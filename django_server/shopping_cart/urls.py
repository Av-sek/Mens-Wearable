
from rest_framework.routers import DefaultRouter,SimpleRouter
from django.urls import re_path,path
from product.viewsets import *
from .views import *



urlpatterns = [
    path("",ShoppingCartView.as_view(), name="shopping_cart"),
    re_path(r'^(?P<id>\d+)/?$',ShoppingCartRetrieveDestroyView.as_view(), name="shopping_cart_retrieve_destroy"),
]
