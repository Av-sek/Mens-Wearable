
from rest_framework.routers import DefaultRouter,SimpleRouter
from django.urls import path 
from product.viewsets import *
from .views import *

router = DefaultRouter()

router.register('product', ProductViewSets)
router.register('product_category', CategoryViewSets)
router.register('brand', BrandViewSets)
router.register('image', ImageViewSets)
router.register('size', SizeViewSets)
router.register('tags', TagsViewSets)
router.register('fav', FavouriteViewSets)


urlpatterns = [
    path("product/search",ProductSearchView.as_view(), name="search"),
]

urlpatterns += router.urls
