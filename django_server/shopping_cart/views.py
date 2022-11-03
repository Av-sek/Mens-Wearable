from django.shortcuts import render
from rest_framework.views import APIView
from .models import ShoppingCart
from .serializers import ShoppingCartSeralizer
from rest_framework.response import Response
# Create your views here.



class ShoppingCartView(APIView):
    
    
    def get(self, request):
        cart = ShoppingCart.objects.all()
        serializer = ShoppingCartSeralizer(cart, many=True)
        return Response(serializer.data)