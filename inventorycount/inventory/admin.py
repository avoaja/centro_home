from django.contrib import admin
from django.urls import reverse
from django.utils.html import format_html

from .models import InventoryLog, Sku


@admin.register(InventoryLog)
class InventoryLogAdmin(admin.ModelAdmin):
    list_display = ('id', 'link_to_sku', 'date', 'count')

    @admin.display(ordering='sku__sku_id', description='Sku ID')
    def link_to_sku(self, obj):
        link = reverse("admin:inventory_sku_change", args=[obj.sku.id])
        return format_html('<a href="{}">{}</a>', link, obj.sku.sku_id)


@admin.register(Sku)
class SkuAdmin(admin.ModelAdmin):
    list_display = ('id', 'sku_id', 'user')
