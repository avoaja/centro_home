from django.db import models
from ..users.models import User


class Sku(models.Model):
    '''
        Model representing various skus.
    '''
    id = models.BigAutoField(primary_key=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        null=True
    )

    sku_id = models.SlugField()

    class Meta:
        unique_together = ['user', 'sku_id']


class InventoryLog(models.Model):
    '''
        Model representing the inventory count of a particular sku on a paricular date.
        There can only be one entry for each sku on a particular date.
    '''
    id = models.BigAutoField(primary_key=True)
    created = models.DateTimeField(auto_now_add=True)
    sku = models.ForeignKey(
        Sku,
        on_delete=models.CASCADE,
        unique_for_date="date"
    )
    date = models.DateField()
    count = models.PositiveIntegerField()