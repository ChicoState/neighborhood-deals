from django.db import models
from django.contrib.auth.models import User


class postEntry(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length = 120)
    description = models.TextField()
    # image = models.ImageField(upload_to='images')

    electronics = models.BooleanField(default = False)
    clothing = models.BooleanField(default = False)
    music = models.BooleanField(default = False)
    furniture = models.BooleanField(default = False)
    appliances = models.BooleanField(default = False)
    toys_games = models.BooleanField(default = False)
    auto_parts = models.BooleanField(default = False)
    free = models.BooleanField(default = False)
    anitques = models.BooleanField(default = False)
    baby_kids_family = models.BooleanField(default = False)
    books = models.BooleanField(default = False)
    sporting = models.BooleanField(default = False)
    jewelry= models.BooleanField(default = False)

    s_date = models.DateField()
    e_date = models.DateField()
    s_time = models.TimeField()
    e_time = models.TimeField()


    def __str__(self):
        return self.title
