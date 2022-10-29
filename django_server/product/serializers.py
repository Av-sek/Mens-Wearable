from unicodedata import category
from rest_framework import serializers
from .models import *


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['id','image']
        

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = '__all__'
        

    
class ProductSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source='category.name', read_only=True)
    brand = serializers.CharField(source='brand.name', read_only=True)
    image_set = ImageSerializer(many=True, read_only=True)
    images = serializers.ListField(
        child = serializers.ImageField(),
        write_only = True
        )
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
            'brand',
            'size',
            'color',
            'tags',
            'thumbnail',
            'image_set',
            'images',
        ]
    def create(self, validated_data):
        uploaded_data = validated_data.pop('images')
        new_product = Product.objects.create(**validated_data)
        for uploaded_item in uploaded_data:
            Image.objects.create(product = new_product, image = uploaded_item)
        return new_product
