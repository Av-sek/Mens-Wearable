from django.shortcuts import render
from rest_framework import generics
from .serializers import *
# Create your views here.
class UserCreate(generics.CreateAPIView):
    serializer_class = UserSerializer
    
    