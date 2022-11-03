from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework_simplejwt.authentication import JWTAuthentication 
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from .models import ShoppingCart
from .serializers import ShoppingCartSeralizer
from rest_framework.response import Response
# Create your views here.



class ShoppingCartView(APIView):
    authentication_classes = [JWTAuthentication,SessionAuthentication]
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        print(request.user)
        cart = ShoppingCart.objects.filter(user=request.user)
        serializer = ShoppingCartSeralizer(cart, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = ShoppingCartSeralizer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)