from django.conf import settings
from django.db import models
from django.utils import timezone

class Application(models.Model):
    id = models.AutoField(primary_key=True)
    kind = models.CharField(max_length=200)
    message = models.TextField(blank=True)
    created_on = models.DateTimeField(default=timezone.now)
    updated_on = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.kind
