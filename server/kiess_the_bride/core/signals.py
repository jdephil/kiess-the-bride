from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

from kiess_the_bride.core.models import User


@receiver(post_save, sender=User)
def create_auth_token_add_permissions(sender, instance, created, **kwargs):
    if created:
        Token.objects.create(user=instance)
