from unicodedata import category
from rest_framework import serializers
from .models import *


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = '__all__'
    
class ProductSerializer(serializers.ModelSerializer):
    product_images = ImageSerializer(many=True,read_only=True)
    category = serializers.PrimaryKeyRelatedField(source="category.name",read_only="True")
    brand_name = serializers.PrimaryKeyRelatedField(source="brand_name.name",read_only="True")
    class Meta:
        model = Product
        fields = [
            'id',
            'name',
            'overview',
            'description',
            'price',
            'rating',
            'on_sale',
            'category',
            'brand_name',
            'size',
            'color',
            'tags',
            'slug',
            'product_images',
            'thumbnail',
        ]
        

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = '__all__'
        
