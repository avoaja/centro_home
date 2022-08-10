from collections import defaultdict

from rest_framework import viewsets, permissions
from rest_framework.response import Response

from .models import InventoryLog


class InventoryLogViewSet(
    viewsets.GenericViewSet
):
    """
        Viewset that provides the list of inventory log entries associated with the SKUs
        belonging to a particular user.

        list :
            GET /api/v1/inventory-log/

            response :
                [
                    {
                        'date': <str>
                        '<sku_id>': <int>
                    },
                    ...
                ]
    """

    def get_queryset(self):
        return InventoryLog.objects.filter(sku__user=self.request.user)

    def list(self, request, *args, **kwargs):
        """
            Returns a list of inventory log entries
        """
        qs = self.get_queryset()
        sku_id = self.request.query_params.get('sku_id')
        if sku_id is not None:
            qs = qs.filter(sku__sku_id=sku_id)

        log_data = defaultdict(list)

        for log in qs:
            log_data[log.date].append({'sku_id': log.sku.sku_id, 'count': log.count})

        response_data = []

        for date, skus in log_data.items():
            consolidated_data = {"date": date}
            for sku in skus:
                consolidated_data[sku["sku_id"]] = sku["count"]

            response_data.append(consolidated_data)

        return Response(response_data)