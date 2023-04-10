from rest_framework import serializers
from ..models import postEntry


class postModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = postEntry
        # fields = {'id', 'title', 'description',
        #           'sdate', 'edate', 'stime', 'etime'}
        fields = "__all__"

        # fields = ("user", "name", "titles", "description")


# class postCreationSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = postEntry
