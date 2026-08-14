from django.contrib import admin
from django.utils.html import format_html
from .models import Doctor


@admin.register(Doctor)
class DoctorAdmin(admin.ModelAdmin):
    list_display = ("thumbnail", "name", "specialty", "hospital", "is_featured", "is_active", "order")
    list_display_links = ("thumbnail", "name")
    list_editable = ("is_featured", "is_active", "order")
    list_filter = ("is_active", "is_featured", "specialty")
    search_fields = ("name", "specialty", "hospital")
    readonly_fields = ("preview", "created_at")
    fields = (
        "name", "specialty", "photo", "preview",
        "hospital", "bio", "experience_years",
        "is_featured", "is_active", "order", "created_at"
    )

    @admin.display(description="Photo")
    def thumbnail(self, obj):
        if obj.photo:
            return format_html(
                '<img src="{}" style="height:50px;width:50px;object-fit:cover;border-radius:6px;" />',
                obj.photo.url,
            )
        return "—"

    @admin.display(description="Preview")
    def preview(self, obj):
        if obj.photo:
            return format_html(
                '<img src="{}" style="max-height:220px;border-radius:8px;" />',
                obj.photo.url,
            )
        return "No photo uploaded yet."

# Register your models here.
