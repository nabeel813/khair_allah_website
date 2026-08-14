from django.db import models


class ContactMessage(models.Model):
    full_name = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.CharField(max_length=30)
    country = models.CharField(max_length=100, blank=True)
    message = models.TextField()
    source_page = models.CharField(max_length=100, blank=True, default="contact.html")
    is_read = models.BooleanField(default=False, help_text="Mark as read in admin")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "Contact Message"
        verbose_name_plural = "Contact Messages"

    def __str__(self):
        return f"{self.full_name} — {self.email} ({self.created_at:%Y-%m-%d})"
