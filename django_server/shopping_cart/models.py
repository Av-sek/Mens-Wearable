from django.db import models

# Create your models here.
from product.models import Product
from django.contrib.auth.models import User

class ShoppingCart(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE,related_name="product_shopping_cart")
    user = models.ForeignKey(User, on_delete=models.CASCADE,related_name="user_shopping_cart")
    quantity = models.IntegerField(default=1)
    
    def __str__(self):
        return self.user.username