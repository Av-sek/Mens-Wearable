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
    category_name = serializers.PrimaryKeyRelatedField(source='category.name', read_only=True)
    brand_name = serializers.PrimaryKeyRelatedField(source='brand.name', read_only=True)
    image_set = ImageSerializer(many=True, read_only=True)
    images = serializers.ListField(
        child = serializers.ImageField(),
        write_only = True,
        required = False
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
            'category_name',
            'brand_name',
            'size',
            'color',
            'tags',
            'thumbnail',
            'image_set',
            'images',
        ]
    def create(self, validated_data):
        new_product = Product.objects.create(**validated_data)
        if validated_data.get('images'):
            uploaded_data = validated_data.pop('images')
            for uploaded_item in uploaded_data:
                Image.objects.create(product = new_product, image = uploaded_item)
        return new_product
