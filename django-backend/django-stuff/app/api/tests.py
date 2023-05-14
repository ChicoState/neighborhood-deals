from django.test import TestCase, Client
from django.urls import reverse
from rest_framework import status
from ..models import postEntry
from .serializers import postModelSerializer
import json

class PostViewSetTest(TestCase):

    def setUp(self):
        self.client = Client()
        # self.test_user = User.objects.create_user(username='test_user')

    def test_create_post(self):
        url = reverse('post-list')  # 'post-list' is the URL name for the viewset
        data = {
            "title": "test_title",
            "content": "test_content",
            "description": "test_description"
        }
        response = self.client.post(url, content_type='application/json', data = data)
        print(response.status_code)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)


    def test_save_post(self):
        url = reverse('post-list') # Directly using the path as there's no name assigned
        data = { 
            "name": "tesst", 
            "title": "test_title", 
            "description": "test_content"
        }

        data_string = json.dumps(data)
        response = self.client.generic('POST', "/api/posts/", json.dumps(data), content_type="application/json")
        print(response.status_code)
        # response = self.client.post("/api/posts/", {"name": "tesst", "title": "test_title", "description": "test_content", "s_date" : "2023-04-10", "e_date" : "2023-04-10", "s_time": "11:35:00", "e_time":"11:36:00",}, content_type= 'application/json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

