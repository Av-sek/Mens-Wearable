
from rest_framework.routers import DefaultRouter,SimpleRouter
from django.urls import re_path 
from product.viewsets import *
from .views import *



urlpatterns = [
    re_path(r"",ShoppingCartView.as_view(), name="shopping_cart"),
]
