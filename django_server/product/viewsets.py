from rest_framework import viewsets,permissions,authentication
from .models import *
from .serializers import *



class ProductViewSets(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = permissions.IsAuthenticatedOrReadOnly,
    authentication_classes = [
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
        ]
    

class CategoryViewSets(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = permissions.IsAuthenticatedOrReadOnly,
    
class BrandViewSets(viewsets.ModelViewSet):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer
    permission_classes = permissions.IsAuthenticatedOrReadOnly,
class ImageViewSets(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    permission_classes = permissions.IsAuthenticatedOrReadOnly,
    