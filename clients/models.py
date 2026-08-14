from django.db import models


class Client(models.Model):
    """A client photo shown in the gallery on the Clients page.

    Uploaded via the Django admin. Name/caption is optional since the
    current site design just shows photos with a generic "Client" alt text,
    but having it lets staff add captions later without a schema change.
    """

    name = models.CharField(
        max_length=150,
        blank=True,
        help_text="Optional. Shown as the image caption/alt text if provided.",
    )
    image = models.ImageField(
        upload_to="clients/",
        help_text="Recommended: square or landscape photo, at least 600px wide.",
    )
    is_active = models.BooleanField(
        default=True,
        help_text="Untick to hide this photo from the site without deleting it.",
    )
    order = models.PositiveIntegerField(
        default=0,
        help_text="Lower numbers appear first in the gallery.",
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["order", "-created_at"]

    def __str__(self):
        return self.name or f"Client photo #{self.pk}"
