from django.shortcuts import render, HttpResponse
from django.http.response import JsonResponse
from rest_framework import status
from rest_framework.parsers import JSONParser
from .models import postEntry
from .api.serializers import postModelSerializer
from rest_framework.decorators import api_view
# functions not flushed out and neither are models


# This returns all the listings
def GetEverything(request):
    dmp = {}
    dmp = post_model.filter.all()
    return response({"listings": json.dumps(dmp)})

# This saves the new userl


def SaveUser(request):
    data = request.content
    user_model.save(data.user, data.name, data.password)
    return response({"result": "success"})

# This takes the users post info and saves it to the database


@api_view(['POST'])
def SavePost(request):
    if request.method == 'POST':
        post_data = JSONParser().parse(request)
        post_serializer = postModelSerializer(data=post_data)
        if post_serializer.is_valid():
            post_serializer.save()
            return JsonResponse(post_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(post_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        #     data = request.content
    #     post_model.save(data.blah, data.blah, data.blah)
    # return response({"result": "success"})

# This will return all the posts for a specific user


def UserPosts(request):
    dmp = {}
    dmp = post_model.filter(user=request.user)

    return response({"user_posts": json.dumps(dmp)})
