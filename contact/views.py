import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from .models import ContactMessage


@csrf_exempt          # JS sends JSON, not a form with CSRF token
@require_POST
def contact_api(request):
    try:
        data = json.loads(request.body.decode("utf-8"))
    except (json.JSONDecodeError, UnicodeDecodeError):
        return JsonResponse({"error": "Invalid JSON"}, status=400)

    full_name = (data.get("full_name") or "").strip()
    email = (data.get("email") or "").strip()
    phone = (data.get("phone") or "").strip()
    country = (data.get("country") or "").strip()
    message = (data.get("message") or "").strip()
    source_page = (data.get("source_page") or "contact.html").strip()

    errors = {}
    if not full_name:
        errors["full_name"] = ["Full name is required."]
    if not email:
        errors["email"] = ["Email is required."]
    if not phone:
        errors["phone"] = ["Phone number is required."]
    if not message:
        errors["message"] = ["Message is required."]

    if errors:
        return JsonResponse(errors, status=400)

    ContactMessage.objects.create(
        full_name=full_name,
        email=email,
        phone=phone,
        country=country,
        message=message,
        source_page=source_page,
    )

    return JsonResponse({"success": True, "message": "Inquiry received."}, status=201)
