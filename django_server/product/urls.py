
from rest_framework.routers import DefaultRouter
from django.urls import path
from product.viewsets import ProductViewSets, CategoryViewSets, BrandViewSets
from product.viewsets import TagsViewSets, FavouriteViewSets, ImageViewSets
from product.viewsets import SizeViewSets
from .views import ProductSearchView

router = DefaultRouter()

router.register('product', ProductViewSets)
router.register('product_category', CategoryViewSets)
router.register('brand', BrandViewSets)
router.register('image', ImageViewSets)
router.register('size', SizeViewSets)
router.register('tags', TagsViewSets)
router.register('fav', FavouriteViewSets)


urlpatterns = [
    path("product/search", ProductSearchView.as_view(), name="search"),
]

urlpatterns += router.urls
