from urllib.parse import urlparse
from rest_framework.routers import DefaultRouter

from product.viewsets import ProductViewSets


router = DefaultRouter()

router.register('product', ProductViewSets)

print(router.urls)

urlpatterns = router.urls

