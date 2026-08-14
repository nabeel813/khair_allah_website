from django.contrib import admin
from django.utils.html import format_html

from .models import Client


@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    list_display = ("thumbnail", "name", "is_active", "order", "created_at")
    list_display_links = ("thumbnail", "name")
    list_editable = ("is_active", "order")
    list_filter = ("is_active",)
    search_fields = ("name",)
    readonly_fields = ("preview", "created_at")
    fields = ("image", "preview", "name", "is_active", "order", "created_at")

    @admin.display(description="Photo")
    def thumbnail(self, obj):
        if obj.image:
            return format_html(
                '<img src="{}" style="height:50px;width:50px;object-fit:cover;'
                'border-radius:6px;" />',
                obj.image.url,
            )
        return "—"

    @admin.display(description="Preview")
    def preview(self, obj):
        if obj.image:
            return format_html(
                '<img src="{}" style="max-height:220px;border-radius:8px;" />',
                obj.image.url,
            )
        return "No image uploaded yet."
