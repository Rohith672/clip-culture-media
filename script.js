// ===================================
// CLIP CULTURE MEDIA CONFIGURATION
// ===================================

// Replace these with your real contact details.
const AGENCY_WHATSAPP = "916381617293"; // Example format: 919876543210
const AGENCY_EMAIL = "clipculturemedia0@gmail.com";    // Example: hello@youragency.com


// ===================================
// MOBILE NAVIGATION
// ===================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});


// ===================================
// WHATSAPP CONTACT
// ===================================

function setupWhatsAppLink(elementId) {
    const link = document.getElementById(elementId);

    if (!link || !AGENCY_WHATSAPP) {
        if (link) link.hidden = true;
        return;
    }

    const message =
        "Hi Clip Culture Media! I'm interested in your video editing services.";

    link.href =
        "https://wa.me/" +
        AGENCY_WHATSAPP +
        "?text=" +
        encodeURIComponent(message);

    link.target = "_blank";
    link.rel = "noopener noreferrer";
}

setupWhatsAppLink("whatsappLink");
setupWhatsAppLink("floatingWhatsapp");


// ===================================
// DIRECT EMAIL CONTACT
// ===================================

function setupEmailLink(elementId) {
    const link = document.getElementById(elementId);

    if (!link || !AGENCY_EMAIL) {
        if (link) link.hidden = true;
        return;
    }

    const subject = "Project Inquiry - Clip Culture Media";

    const body =
        "Hi Clip Culture Media,\n\n" +
        "I'm interested in discussing a project.\n\n" +
        "Project details:\n\n" +
        "Thank you.";

    link.href =
        "mailto:" +
        AGENCY_EMAIL +
        "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);
}

setupEmailLink("emailLink");
setupEmailLink("floatingEmail");


// ===================================
// SERVICE BUTTONS
// ===================================

const serviceSelect = document.getElementById("serviceSelect");

document.querySelectorAll("[data-service]").forEach((button) => {
    button.addEventListener("click", () => {
        serviceSelect.value = button.dataset.service;
    });
});


// ===================================
// EMAILJS CONTACT FORM
// ===================================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const submitButton = contactForm.querySelector(
            'button[type="submit"]'
        );

        const buttonText = submitButton.querySelector("span");

        submitButton.disabled = true;
        buttonText.textContent = "SENDING...";
        formMessage.textContent = "Sending your inquiry...";
        formMessage.style.color = "#a6ff4d";

        try {
            await emailjs.sendForm(
                "service_h1rtvqa",
                "template_cxd55yj",
                contactForm
            );

            formMessage.textContent =
                "Inquiry received! Our team will review your project and reply soon.";

            formMessage.style.color = "#a6ff4d";
            contactForm.reset();

        } catch (error) {
            console.error("EmailJS error:", error);

            formMessage.textContent =
                "Message couldn't be sent. Please try again.";

            formMessage.style.color = "#ff7777";

        } finally {
            submitButton.disabled = false;
            buttonText.textContent = "SEND PROJECT INQUIRY";
        }
    });
}
// ===================================
// INSTAGRAM CONTACT
// ===================================

const AGENCY_INSTAGRAM =
    "https://www.instagram.com/clip_culture.media/";

function setupInstagramLink(elementId) {
    const link = document.getElementById(elementId);

    if (!link) return;

    link.href = AGENCY_INSTAGRAM;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
}

setupInstagramLink("instagramLink");
