import csv

from datetime import datetime
from django.core.management.base import BaseCommand, CommandError

from inventorycount.users.models import User
from inventorycount.inventory.models import Sku, InventoryLog


class Command(BaseCommand):
    help = 'Backfills Inventory log data'

    def add_arguments(self, parser):
        parser.add_argument(
            "--csv",
            dest="csv",
            default="",
            help=("CSV file to import inventory log data from")
        )
        parser.add_argument(
            "--email",
            dest="email",
            default="",
            help=("Email of the user that this data is attributed to")
        )

    def handle(self, *args, **options):
        csv_file_name = options.get("csv", None)
        user_email = options.get("email", None)

        if not csv_file_name:
            raise CommandError(
                "No CSV file specified! use --csv <csv_file_name> to specify a CSV file."
            )

        if not user_email:
            raise CommandError(
                "No email specified! use --email <email> to specify a user email"
            )

        try:
            user = User.objects.get(email=user_email)
        except:
            raise CommandError(
                f"User with {user_email} does not exist."
            )

        self.parse_csv_file(csv_file_name, user)

    def parse_csv_file(self, csv_file_name: str, user: User):
        with open(csv_file_name, "r+") as csv_file:
            csv_file.readline()
            csv_reader = csv.DictReader(csv_file)
            inventory_logs = []

            for row in csv_reader:
                for key, val in row.items():
                    if not val:
                        row[key] = None

                sku, _ = Sku.objects.get_or_create(
                    sku_id=row["SKU"],
                    user=user
                )

                inventory_logs.append(InventoryLog(
                    sku=sku,
                    count=row["Count"],
                    date=self.normalize_date(row["Date"])
                ))

        InventoryLog.objects.bulk_create(inventory_logs)

    def normalize_date(self, date: str) -> datetime:
        """
        Convert dates to datetime objects
        """
        if not date:
            return None

        return datetime.strptime(
            date, '%M/%d/%Y'
        )