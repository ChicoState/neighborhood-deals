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
        url = '/app/migrations/'  # Directly using the path as there's no name assigned
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_save_post(self):
        url = '/app/migrations/post/'  # Directly using the path as there's no name assigned
        data = {"user": "test_user", "title": "test_title", "content": "test_content"}
        response = self.client.post(url, data, content_type='application/json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
