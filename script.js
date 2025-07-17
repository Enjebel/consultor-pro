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
  