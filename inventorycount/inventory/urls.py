from rest_framework.routers import DefaultRouter
from .views import InventoryLogViewSet

router = DefaultRouter()
router.register(r'inventory-log', InventoryLogViewSet, basename='inventory-log')
