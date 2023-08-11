from django.template.response import TemplateResponse
from django.views.decorators.cache import never_cache
from django.views.decorators.csrf import ensure_csrf_cookie


@ensure_csrf_cookie
@never_cache
def index(request):
    return TemplateResponse(request, ["index.html", "core/index-placeholder.html"])
