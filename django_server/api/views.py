from django.shortcuts import render
from rest_framework import generics
from .serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

from django.contrib.auth import authenticate
# Create your views here.
class UserCreate(APIView):
    def post(self,request):
        serializers = UserSerializer(data=request.data)
        if not serializers.is_valid():
            return Response(serializers.errors)
        serializers.save()
        
        user = User.objects.get(username = serializers.data['username'])
        refresh = RefreshToken.for_user(user)
        
        return Response({
            'status': 200,
            'payload': serializers.data,
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }
        )


    
    