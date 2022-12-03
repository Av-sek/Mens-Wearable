
# third party modules
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters

# In app modules.
from .models import Product
from .serializers import ProductSerializer


class ProductSearchView(generics.ListAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    search_fields = ['name', 'tags']
    filterset_fields = ['category', 'brand', 'size', 'color', 'tags']
