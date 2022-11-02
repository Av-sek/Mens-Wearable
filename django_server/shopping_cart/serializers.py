from rest_framework import serializers
from .models import ShoppingCart



class ShoppingCartSeralizer(serializers.ModelSerializer):
    class Meta:
        model = ShoppingCart
        fields = [
            'id',
            'product',
            'quantity',
            ]