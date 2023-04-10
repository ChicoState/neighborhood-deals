from django.db import models
from django.contrib.auth.models import User


class postEntry(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=120, default="")
    title = models.CharField(max_length=120)
    description = models.TextField()
    # image = models.ImageField(upload_to='images')

    s_date = models.DateField(default="2023-04-10")
    e_date = models.DateField(default="2023-04-10")
    s_time = models.TimeField(default="11:35:00")
    e_time = models.TimeField(default="11:35:00")

    def __str__(self):
        return self.title
