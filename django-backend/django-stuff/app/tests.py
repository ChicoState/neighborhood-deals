from django.test import TestCase, Client
from django.urls import reverse
from rest_framework import status
from .models import postEntry
from .api.serializers import postModelSerializer
import json

class MigrationsViewTest(TestCase):

    def setUp(self):
        self.client = Client()

    def test_get_everything(self):
        url = '/api/'  # Directly using the path as there's no name assigned
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_save_post(self):
        url = '/api/posts/'  # Directly using the path as there's no name assigned
        # data = {"name": "tesst", "title": "test_title", "description": "test_content", "s_date" : "2023-04-10", "e_date" : "2023-04-10", "s_time": "11:35:00", "e_time": "11:35:00" }
        # data = {"name": "tesst", "title": "test_title", "description": "test_content", "user":1 }
#content_type='application/json'
        # response = self.client.post(url, data, content_type='application/json')
        response = self.client.post("/api/posts/", {"name": "tesst", "title": "test_title", "description": "test_content", "s_date" : "2023-04-10", "e_date" : "2023-04-10", "s_time": "11:35:00", "e_time":"11:36:00",})
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
