// script.js

// Theme toggle
const toggle = document.getElementById("theme-toggle");
const body = document.body;

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
  }
});

// AOS Initialization
AOS.init({
  duration: 1000,
  once: true,
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("http://localhost:8000/contact", {
        method: "POST",
        body: new URLSearchParams(data),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      if (response.ok) {
        alert("Message sent successfully! ✅");
        form.reset();
      } else {
        alert("Failed to send message. ❌");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error connecting to server.");
    }
  });
});

