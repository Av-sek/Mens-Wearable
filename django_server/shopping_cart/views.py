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
    
    def get(self,request):
        cart = ShoppingCart.objects.filter(user=self.request.user)
        print(cart)
        serializer = ShoppingCartSeralizer(cart, many=True)
        return Response(serializer.data)
    
    def post(self,request):
        serializer = ShoppingCartSeralizer(data=request.data,)
        if serializer.is_valid():
            serializer.save(user=self.request.user)
            return Response(serializer.data)
        return Response(serializer.errors)

class ShoppingCartRetrieveDestroyView(APIView):
    authentication_classes = [JWTAuthentication,SessionAuthentication]
    permission_classes = [IsAuthenticated]
    def put(self,request,id):
        try:
            cart = ShoppingCart.objects.get(id=id,user=self.request.user)
        except:
            return Response({"status":404,"message":"Not Found"})
        request.POST._mutable = True
        request.data['product'] = cart.product.id
        request.POST._mutable = False
        serializer = ShoppingCartSeralizer(cart,data=request.data,)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    def delete(self,request,id):
        try:
            cart = ShoppingCart.objects.get(id=id,user=self.request.user)
        except:
            return Response({"status":404,"message":"Not Found"})
        cart.delete()
        return Response("Deleted")
    
