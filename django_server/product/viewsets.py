from rest_framework import viewsets,permissions
from rest_framework_simplejwt import authentication
from .models import *
from .serializers import *



class ProductViewSets(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = permissions.IsAuthenticatedOrReadOnly,
    authentication_classes = [
        authentication.JWTAuthentication,
        ]
    

class CategoryViewSets(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = permissions.IsAuthenticatedOrReadOnly,
    authentication_classes = [
        authentication.JWTAuthentication,
        ]
    
class BrandViewSets(viewsets.ModelViewSet):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer
    authentication_classes = [
        authentication.JWTAuthentication,
        ]
    permission_classes = permissions.IsAuthenticatedOrReadOnly,
class ImageViewSets(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    authentication_classes = [
        authentication.JWTAuthentication,
        ]
    permission_classes = permissions.IsAuthenticatedOrReadOnly,
    