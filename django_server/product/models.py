from operator import mod
from django.db import models
from django.template.defaultfilters import slugify

# Create your models here.

#.................... Product model for male products ...............


class Category(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name
class Brand(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name
class Product(models.Model):
    thumbnail = models.ImageField(upload_to='products/')
    name = models.CharField(max_length=100)
    overview = models.TextField()
    description = models.TextField()
    price = models.IntegerField()
    rating = models.IntegerField()
    on_sale = models.BooleanField(default=False)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE,related_name='products')
    size = models.CharField(max_length=5)
    color = models.CharField(max_length=50)
    tags = models.CharField(max_length=100)
    slug = models.SlugField()
    
    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super(Product, self).save(*args, **kwargs)
    def __str__(self):
        return self.name

class Image(models.Model):
    image = models.ImageField(upload_to='products/', blank=True, null=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)    
    def __str__(self):
        return self.product.name