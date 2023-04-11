from rest_framework import routers
from .views import postViewSet
from django.urls import path, include

router = routers.DefaultRouter()
router.register(r'posts', postViewSet, basename='post')
# router.register(r'create', postViewSet, basename='create')

urlpatterns = [
    path('', include(router.urls)),
]
