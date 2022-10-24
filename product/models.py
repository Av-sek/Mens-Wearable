from operator import mod
from django.db import models

# Create your models here.

#.................... Product model for male products ...............
class Product(models.Model):
    image = models.ImageField(upload_to='products/')
    name = models.CharField(max_length=100)
    overview = models.TextField()
    description = models.TextField()
    price = models.IntegerField()
    rating = models.IntegerField()
    on_sale = models.BooleanField(default=False)
    category = models.CharField(max_length=100)
    brand_name = models.CharField(max_length = 50)
    SIZE_CHOICES = [('S', 'Small'), ('M', 'Medium'), ('L', 'Large'), ('XL', 'Extra Large'), ('XXL', 'Extra Extra Large')]
    size = models.CharField(max_length=5, choices=SIZE_CHOICES)
    color = models.CharField(max_length=50)
    tags = models.CharField(max_length=100)
    