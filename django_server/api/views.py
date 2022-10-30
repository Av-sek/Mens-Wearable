from django.shortcuts import render
from rest_framework import generics
from .serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response

from django.contrib.auth import authenticate
# Create your views here.
class UserCreate(generics.CreateAPIView):
    authentication_classes = ()
    permission_classes = ()
    serializer_class = UserSerializer
    

class LoginView(APIView):
    permission_classes = ()
    
    def post(self,request):
        username = request.data.get("username")
        password = request.data.get("password")
        user = authenticate(username=username,password=password)
        if user:
            return Response({"token":user.auth_token.key})
        else:
            return Response({"error":"Wrong Credentials"},status=400)
        
    
    