from django.contrib import admin
from .models import ContactMessage


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ("full_name", "email", "phone", "country", "is_read", "created_at")
    list_filter = ("is_read", "country", "created_at")
    search_fields = ("full_name", "email", "phone", "message", "country")
    list_editable = ("is_read",)
    readonly_fields = ("full_name", "email", "phone", "country", "message", "source_page", "created_at")
    date_hierarchy = "created_at"

    fieldsets = (
        ("Contact details", {
            "fields": ("full_name", "email", "phone", "country")
        }),
        ("Message", {
            "fields": ("message", "source_page")
        }),
        ("Status", {
            "fields": ("is_read", "created_at")
        }),
    )
