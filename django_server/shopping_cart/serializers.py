from rest_framework import serializers
from product.serializers import ProductSerializer
from api.serializers import UserSerializer
from product.models import Product
from .models import ShoppingCart



class ShoppingCartSeralizer(serializers.ModelSerializer):
    quantity = serializers.IntegerField(default=1)
    product_data = ProductSerializer(source='product', read_only=True)
    class Meta:
        model = ShoppingCart
        fields = [
            'id',
            'product',
            'product_data',
            'quantity',
            ]
        extra_kwargs = {
            'product': {'write_only': True},
        }
