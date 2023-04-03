from rest_framework import serializers

class NameDescriptionSerializer(serializers.Serializer):
    first_name = serializers.CharField(max_length=100)
    last_name = serializers.CharField(max_length=100)
    description = serializers.CharField(max_length=1000)
