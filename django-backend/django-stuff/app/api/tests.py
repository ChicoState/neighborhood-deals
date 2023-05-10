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
            "user": "test_user",
            "title": "test_title",
            "content": "test_content",
            "description": "test_description"
        }
        response = self.client.post(url, data, content_type='application/json')
        print(response.data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
