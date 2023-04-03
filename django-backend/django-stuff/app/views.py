from django.shortcuts import render, HttpResponse


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
def SavePost(request):
    if request.method == 'POST':
        data = request.content
        post_model.save(data.blah, data.blah, data.blah)
    return response({"result":"success"})

# This will return all the posts for a specific user
def UserPosts(request):
    dmp = {}
    dmp = post_model.filter(user = request.user)

    return response({"user_posts": json.dumps(dmp)})
