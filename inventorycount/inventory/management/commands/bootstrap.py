from datetime import date
from django.core.management.base import BaseCommand, CommandError

from inventorycount.users.models import User
from inventorycount.inventory.models import Sku, InventoryLog


class Command(BaseCommand):
    help = 'Bootstrap database with multiple users and SKU data for the admin user.'

    def handle(self, *args, **options):
        admin = User.objects.create_superuser(
            username='admin@example.com',
            email='admin@example.com',
            password='admin123',
            first_name='admin',
            last_name='example',
        )

        User.objects.create_user(
            username='andrew@example.com',
            email='andrew@example.com',
            password='andrew123',
            first_name='andrew',
            last_name='example',
        )

        admin_sku1 = Sku.objects.create(
            sku_id='EB-457',
            user=admin
        )
        admin_sku2 = Sku.objects.create(
            sku_id='EB-222',
            user=admin
        )

        InventoryLog.objects.create(
            sku=admin_sku1,
            count=231,
            date=date(year=2022, month=5, day=1)
        )
        InventoryLog.objects.create(
            sku=admin_sku2,
            count=12,
            date=date(year=2022, month=5, day=1)
        )

        InventoryLog.objects.create(
            sku=admin_sku1,
            count=20,
            date=date(year=2022, month=5, day=15)
        )
        InventoryLog.objects.create(
            sku=admin_sku2,
            count=122,
            date=date(year=2022, month=5, day=15)
        )