from django.shortcuts import render, response

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import NameDescriptionSerializer


#functions not flushed out and neither are models



# This returns all the listings
def GetEverything(request):
    dmp = {}
    dmp = post_model.filter.all()
    return response({"listings": json.dumps(dmp)})

# This saves the new user
def SaveUser(request):
    data = request.content
    user_model.save(data.user, data.name, data.password)
    return response({"result":"success"})

# This takes the users post info and saves it to the database
# def SavePost(request):
#     data = request.content
#     post_model.save(data.blah, data.blah, data.blah)
#     return response({"result":"success"})
@api_view(['POST'])
def SavePost(request):
    serializer = NameDescriptionSerializer(data=request.data)
    if serializer.is_valid():
        # Handle the data as needed
        first_name = serializer.validated_data['first_name']
        last_name = serializer.validated_data['last_name']
        description = serializer.validated_data['description']

        # Return a success response
        return Response({"result": "success"}) 
    else:
        # Return an error response if the data is invalid
        return Response({"result": "fail"}) 

# This will return all the posts for a specific user
def UserPosts(request):
    dmp = {}
    dmp = post_model.filter(user = request.user)

    return response({"user_posts": json.dumps(dmp)})
