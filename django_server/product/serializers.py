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

class SizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Size
        fields = '__all__'

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tags
        fields = '__all__'

class FaviouriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favourite
        fields = ['product']

    
class ProductSerializer(serializers.ModelSerializer):
    category_name = serializers.PrimaryKeyRelatedField(source='category.name', read_only=True)
    brand_name = serializers.PrimaryKeyRelatedField(source='brand.name', read_only=True)
    product_size = serializers.PrimaryKeyRelatedField(source='size.size', read_only=True)
    is_favourite = serializers.SerializerMethodField('get_is_favourite')
    tags = TagSerializer(many=True, read_only=True)
    tags_list = serializers.CharField(write_only=True, required=False)
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
            'category_name',
            'brand',
            'brand_name',
            'size',
            'product_size',
            'color',
            'tags',
            'tags_list',
            'thumbnail',
            'image_set',
            'is_favourite',
            'images',
        ]
        extra_kwargs = {
            'category': {'write_only': True},
            'brand': {'write_only': True},
            'size': {'write_only': True},
            'thumbnail':{'required':False},
        }
    def create(self, validated_data):
        tags = []
        if validated_data.get('tags_list'):
            tags = validated_data.pop('tags_list')
            tags=tags.split(',')
            print(tags)
        new_product = Product.objects.create(**validated_data)
        if validated_data.get('images'):
            uploaded_data = validated_data.pop('images')
            for uploaded_item in uploaded_data:
                Image.objects.create(product = new_product, image = uploaded_item)
        for tag in tags:
            tag_obj = Tags.objects.get_or_create(tag=tag)
            new_product.tags.add(tag_obj[0])
        return new_product
    
    def update(self, instance, validated_data):
        instance.thumbnail = validated_data.get('thumbnail', instance.thumbnail)
        if validated_data.get('tags_list'):
            tags = validated_data.pop('tags_list')
            tags=tags.split(',')
            print(tags)
            for tag in tags:
                tag_obj = Tags.objects.get_or_create(tag=tag)
                instance.tags.add(tag_obj[0])
        if validated_data.get('images'):
            uploaded_data = validated_data.pop('images')
            for uploaded_item in uploaded_data:
                Image.objects.create(product = instance, image = uploaded_item)
        return super().update(instance, validated_data)

    def get_is_favourite(self, obj):
        try:
            user = self.context['request'].user
            Favourite.objects.get(product=obj, user=user)
            return True
        except:
            return False


