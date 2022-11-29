from rest_framework import viewsets,permissions
from .permissions import IsAdminOrReadOnly
from rest_framework_simplejwt.authentication import JWTAuthentication 
from rest_framework import authentication
from .models import *
from .serializers import *



class ProductViewSets(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = (IsAdminOrReadOnly,)
    authentication_classes = [
        authentication.SessionAuthentication,
        JWTAuthentication,
        ]
    def get_serializer_context(self):
        context = super().get_serializer_context()
        context.update({"request": self.request})
        return context

class CategoryViewSets(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = (IsAdminOrReadOnly,)
    authentication_classes = [
        authentication.SessionAuthentication,
        JWTAuthentication,
        ]
    
class BrandViewSets(viewsets.ModelViewSet):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer
    authentication_classes = [
        authentication.SessionAuthentication,
        JWTAuthentication,
        ]
    permission_classes = (IsAdminOrReadOnly,)
class ImageViewSets(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    authentication_classes = [
        authentication.SessionAuthentication,
        JWTAuthentication,
        ]
    permission_classes = (IsAdminOrReadOnly,)

class SizeViewSets(viewsets.ModelViewSet):
    queryset = Size.objects.all()
    serializer_class = SizeSerializer
    authentication_classes = [
        authentication.SessionAuthentication,
        JWTAuthentication,
        ]
    permission_classes = (IsAdminOrReadOnly,)

class TagsViewSets(viewsets.ModelViewSet):
    queryset = Tags.objects.all()
    serializer_class = TagSerializer
    authentication_classes = [
        authentication.SessionAuthentication,
        JWTAuthentication,
        ]
    permission_classes = (IsAdminOrReadOnly,)


class FavouriteViewSets(viewsets.ModelViewSet):
    queryset = Favourite.objects.all()
    serializer_class = FaviouriteSerializer
    authentication_classes = [
        authentication.SessionAuthentication,
        JWTAuthentication,
        ]
    permission_classes = (permissions.IsAuthenticated,)
    
    def get_queryset(self):
        return Favourite.objects.filter(user=self.request.user)
    
    def perform_create(self,serializer):
        serializer.save(user=self.request.user)