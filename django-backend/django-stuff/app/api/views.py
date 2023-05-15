from rest_framework import viewsets, status
from rest_framework.response import Response
from django.shortcuts import HttpResponse
from ..models import postEntry
from .serializers import postModelSerializer
from rest_framework.parsers import JSONParser
import json


class postViewSet(viewsets.ModelViewSet):
    queryset = postEntry.objects.all()
    serializer_class = postModelSerializer

    def create(self, request):
        serializer = postModelSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, *args, **kwargs):
        post = self.get_object()
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
