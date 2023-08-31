from . import models
from rest_framework import serializers

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Application
        fields = ["id", "kind", "message", "created_on", "updated_on"]
