from rest_framework import serializers
from .models import Case

# Case Serializer
class CaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Case
        fields = '__all__'
