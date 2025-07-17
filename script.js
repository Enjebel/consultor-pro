function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const main = document.getElementById("main");
    if (sidebar.style.left === "0px") {
      sidebar.style.left = "-250px";
      main.style.marginLeft = "0";
    } else {
      sidebar.style.left = "0px";
      main.style.marginLeft = "250px";
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
  
    if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
  
        // You would typically send this data via fetch() or an API
        formMessage.textContent = "Thank you! Your message has been sent.";
        contactForm.reset();
      });
    }
  });
  // EmailJS SDK 
<script src="https://cdn.emailjs.com/dist/email.min.js"></script>

  (function() {
    emailjs.init("a0FstyrySQbwobu5a"); // 👈 Replace this with your actual public key
  })();



    // === Contact Form Submission with EmailJS ===
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm("service_9mbx4as", "template_x12i50f", this)
        .then(function () {
          document.getElementById("formMessage").textContent = "Message sent successfully!";
          form.reset();
        }, function (error) {
          document.getElementById("formMessage").textContent = "Failed to send message.";
          console.error("EmailJS Error:", error);
        });
    });
  }
});
