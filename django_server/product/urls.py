
from rest_framework.routers import DefaultRouter
from django.urls import path 
from product.viewsets import ProductViewSets
from .views import *

router = DefaultRouter()

router.register('product', ProductViewSets)


urlpatterns = [
    path("product/search",ProductSearchView.as_view(), name="search"),
]

urlpatterns += router.urls
