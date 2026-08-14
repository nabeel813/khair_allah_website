// Wires the existing contact form (#contact-form form) on contact.html to
// this site's own backend at /api/contact/. Same-origin now that the
// frontend and API are served by the same Django app, so no CORS setup is
// needed for this request.
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-form form");
  if (!form) return;

  const submitBtn = form.querySelector('button[type="submit"]');
  const submitBtnDefaultHTML = submitBtn ? submitBtn.innerHTML : "";

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const [fullNameInput, emailInput, phoneInput, countryInput, messageInput] =
      form.querySelectorAll("input, textarea");

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = "Sending...";
    }

    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: fullNameInput.value,
          email: emailInput.value,
          phone: phoneInput.value,
          country: countryInput.value,
          message: messageInput.value,
          source_page: "contact.html",
        }),
      });

      if (res.ok) {
        alert("Thank you! Your inquiry has been received. Our team will contact you shortly.");
        form.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        const firstError =
          data && typeof data === "object"
            ? Object.values(data).flat()[0]
            : null;
        alert(firstError || "Something went wrong, please check your details and try again.");
      }
    } catch (err) {
      alert("Something went wrong, please check your connection and try again.");
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = submitBtnDefaultHTML;
      }
    }
  });
});
