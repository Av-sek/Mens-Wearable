from rest_framework.routers import DefaultRouter
from django.urls import path
from api.views import UserCreate
from .viewsets import *



urlpatterns =[
    path("/create",UserCreate.as_view(), name="create_user"),
]
