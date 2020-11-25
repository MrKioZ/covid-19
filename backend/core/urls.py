from rest_framework import routers
from .api import CaseViewSet

router = routers.SimpleRouter()

router.register(r'cases', CaseViewSet)
urlpatterns = router.urls