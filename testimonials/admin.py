from django.contrib import admin
from django.utils.html import format_html
from .models import Testimonial


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ("thumbnail", "client_name", "rating_stars", "country", "is_active", "order")
    list_display_links = ("thumbnail", "client_name")
    list_editable = ("is_active", "order")
    list_filter = ("is_active", "rating", "country")
    search_fields = ("client_name", "quote", "country")
    readonly_fields = ("preview", "created_at")
    fields = (
        "client_name", "quote", "photo", "preview",
        "rating", "country", "is_active", "order", "created_at"
    )

    @admin.display(description="Photo")
    def thumbnail(self, obj):
        if obj.photo:
            return format_html(
                '<img src="{}" style="height:50px;width:50px;object-fit:cover;border-radius:50%;" />',
                obj.photo.url,
            )
        return "—"

    @admin.display(description="Rating")
    def rating_stars(self, obj):
        return "★" * obj.rating + "☆" * (5 - obj.rating)

    @admin.display(description="Preview")
    def preview(self, obj):
        if obj.photo:
            return format_html(
                '<img src="{}" style="max-height:180px;border-radius:12px;" />',
                obj.photo.url,
            )
        return "No photo uploaded yet."

# Register your models here.
