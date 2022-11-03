from rest_framework import serializers
from product.serializers import ProductSerializer
from api.serializers import UserSerializer
from product.models import Product
from .models import ShoppingCart



class ShoppingCartSeralizer(serializers.ModelSerializer):
    product_data = ProductSerializer(source='product',read_only=True)
    user_data = UserSerializer(source='user',read_only=True)
    class Meta:
        model = ShoppingCart
        fields = [
            'id',
            'product',
            'product_data',
            'user',
            'user_data',
            'quantity',
            ]
        
    def create(self,validated_data):
        user = self.request.user
        cart = ShoppingCart.objects.create(user=user,**validated_data)
        return cart