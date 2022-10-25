from unicodedata import category
from django.shortcuts import render
from requests import request

# In app modules.
from .models import *
from .serializers import *



#third party modules
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters


class ProductSearchView(generics.ListAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    filter_backends = [DjangoFilterBackend,filters.SearchFilter]
    search_fields = ['name','tags']
    filterset_fileds = ['category', 'brand_name', 'size', 'color']