from django.test import TestCase, Client
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
from .models import postEntry
from django.contrib.auth.models import User
from .api.serializers import postModelSerializer
import json

class MigrationsViewTest(TestCase):

    def setUp(self):
        self.client = Client()
        self.test_user = User.objects.create_user(username='test_user')


    def test_get_everything(self):
        url = '/api/'  
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_save_post(self):
        url = '/api/posts/'  # Update this with your correct url
        data = {
            "user": self.test_user.pk,
            "name": "test_user",
            "title": "test_title",
            "description": "test_description",
            "s_date": "2023-04-10",
            "e_date": "2023-04-10",
            "s_time": "11:35:00",
            "e_time": "11:35:00",
        }
        response = self.client.post(url, json.dumps(data), content_type='application/json')
        if response.status_code != status.HTTP_201_CREATED:
            print(response.data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
class PostViewSetTest(TestCase):
#
    def setUp(self):
        self.client = APIClient()
        self.test_user = User.objects.create_user(username='test_user')

    def test_create_post(self):
        self.client.force_authenticate(user=self.test_user)
        url = reverse('post-list')  
        data = {
            "user": self.test_user.pk,
            "name": "test_user",
            "title": "test_title",
            "description": "test_description",
        }
        response = self.client.post(url, json.dumps(data), content_type='application/json')
        print(response.data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_get_post(self):
        post = postEntry.objects.create(user=self.test_user, name="test_user", title="test_title", description="test_description")
        url = reverse('post-detail', kwargs={'pk': post.pk})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], "test_title")

    def test_get_non_existent_post(self):
        url = reverse('post-detail', kwargs={'pk': 9999})  # post doesn't exist
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_create_post_with_invalid_data(self):
        self.client.force_authenticate(user=self.test_user)
        url = reverse('post-list')  # 
        # Pass in data that will make the serializer invalid.
        data = {
            "user": self.test_user.id,
            "name": "test_user",
            # "title": "test_title",
            "description": "test_description",
        }
        response = self.client.post(url, data, content_type='application/json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_delete_post(self):
        post = postEntry.objects.create(user=self.test_user, name="test_user", title="test_title", description="test_description")
        url = reverse('post-detail', kwargs={'pk': post.pk})
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(postEntry.objects.filter(pk=post.pk).exists())

    def test_retrieve_single_post(self):
        # Create a new post
        url = reverse('post-list')
        data = {
            "user": self.test_user.id,
            "name": "test_user",
            "title": "test_title",
            "description": "test_description",
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        # Retrieve the created post
        url = reverse('post-detail', kwargs={'pk': response.data['id']})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['name'], 'test_user')
        self.assertEqual(response.data['title'], 'test_title')
        self.assertEqual(response.data['description'], 'test_description')
