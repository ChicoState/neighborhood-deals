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
        # # print(request.data)
        # # json_obj = json.loads(request.data)\
        # postEntry.objects.create(user=request.data.user)

        # post_data = JSONParser().parse(request.data)
        # # print(post_data)
        # post_serializer = serializers.postModelSerializer(data=post_data)
        # if post_serializer.is_valid():
        #     post_serializer.save()
        #     return JsonResponse(post_serializer.data, status=status.HTTP_201_CREATED)
        # return JsonResponse(post_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
