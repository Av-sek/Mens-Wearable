from django.db import models
from django.template.defaultfilters import slugify

# Create your models here.

# .................... Product model for male products ...............


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Brand(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Size(models.Model):
    size = models.CharField(max_length=100)

    def __str__(self):
        return self.size


class Tags(models.Model):
    tag = models.CharField(max_length=100)

    def __str__(self):
        return self.tag


class Product(models.Model):
    thumbnail = models.ImageField(upload_to='products/')
    name = models.CharField(max_length=100)
    overview = models.TextField()
    description = models.TextField()
    price = models.IntegerField()
    rating = models.IntegerField()
    on_sale = models.BooleanField(default=False)
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, related_name='products')
    brand = models.ForeignKey(
        Brand, on_delete=models.CASCADE, related_name='products')
    size = models.ForeignKey(
        Size, on_delete=models.CASCADE, related_name='products')
    color = models.CharField(max_length=50)
    tags = models.ManyToManyField(Tags, related_name='products')
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


# user faviroute prducts

class Favourite(models.Model):
    user = models.ForeignKey(
        'auth.User', on_delete=models.CASCADE, related_name='favourite')
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name='favourite')

    class Meta:
        unique_together = ('user', 'product')

    def __str__(self):
        return self.product.name
