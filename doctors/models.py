from django.db import models


class Doctor(models.Model):
    name = models.CharField(max_length=150)
    specialty = models.CharField(
        max_length=150,
        help_text="e.g. Cardiologist, Orthopedic Surgeon, Oncologist"
    )
    photo = models.ImageField(
        upload_to="doctors/",
        blank=True,
        null=True,
        help_text="Square or portrait photo recommended"
    )
    hospital = models.CharField(
        max_length=200,
        blank=True,
        help_text="Hospital or clinic name (can later become a ForeignKey)"
    )
    bio = models.TextField(
        blank=True,
        help_text="Short professional bio shown on the card / detail"
    )
    experience_years = models.PositiveIntegerField(
        null=True,
        blank=True,
        help_text="Years of experience (optional)"
    )
    is_featured = models.BooleanField(
        default=False,
        help_text="Show on homepage or medical page featured section"
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
        ordering = ["order", "name"]
        verbose_name = "Doctor"
        verbose_name_plural = "Doctors"

    def __str__(self):
        return f"{self.name} — {self.specialty}"

# Create your models here.
