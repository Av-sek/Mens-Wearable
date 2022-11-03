from rest_framework import serializers
from product.serializers import ProductSerializer
from product.models import Product
from .models import ShoppingCart



class ShoppingCartSeralizer(serializers.ModelSerializer):
    product = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model = ShoppingCart
        fields = [
            'id',
            'product',
            'user',
            'quantity',
            ]