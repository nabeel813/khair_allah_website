
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator


class Testimonial(models.Model):
    client_name = models.CharField(max_length=150)
    quote = models.TextField(help_text="The testimonial text")
    photo = models.ImageField(
        upload_to="testimonials/",
        blank=True,
        null=True,
        help_text="Optional client photo (square preferred)"
    )
    rating = models.PositiveSmallIntegerField(
        default=5,
        validators=[MinValueValidator(1), MaxValueValidator(5)],
        help_text="Rating from 1 to 5 stars"
    )
    country = models.CharField(
        max_length=100,
        blank=True,
        help_text="Optional, e.g. Oman, UAE, Saudi Arabia"
    )
    is_active = models.BooleanField(
        default=True,
        help_text="Untick to hide without deleting"
    )
    order = models.PositiveIntegerField(
        default=0,
        help_text="Lower numbers appear first"
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["order", "-created_at"]
        verbose_name = "Testimonial"
        verbose_name_plural = "Testimonials"

    def __str__(self):
        return f"{self.client_name} ({self.rating}★)"
