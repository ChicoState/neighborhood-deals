from rest_framework import viewsets
from ..models import postEntry
from .serializers import postModelSerializer


class postViewSet(viewsets.ModelViewSet):
    queryset = postEntry.objects.all()
    serializer_class = postModelSerializer
