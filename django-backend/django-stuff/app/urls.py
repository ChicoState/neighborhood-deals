from django.urls import path
from .views import *

urlpatterns = [
    path('', GetEverything),
    path('/post', SavePost)

]
