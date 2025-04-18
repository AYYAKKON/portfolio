// Toggle Navbar for Mobile
const navToggle = document.getElementById('nav_toggle');
const navMenu = document.getElementById('nav_menu');
const navOverlay = document.createElement('div'); // Create overlay element

navOverlay.classList.add('nav_overlay'); // Add overlay class
document.body.appendChild(navOverlay); // Append overlay to body

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  navOverlay.classList.toggle('show');
});

// Close Navbar when overlay is clicked
navOverlay.addEventListener('click', () => {
  navMenu.classList.remove('show');
  navOverlay.classList.remove('show');
});

// Smooth Scroll for Anchor Links and Close Menu
document.querySelectorAll('.nav_link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior

    // Get the target section ID from the href attribute
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      // Smoothly scroll to the target section
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      // Close the mobile menu
      navMenu.classList.remove('show');
      navOverlay.classList.remove('show');
    }
  });
});

// Initialize AOS
AOS.init({
  duration: 1200,
  once: false,
});

// Initialize Swiper
var swiper = new Swiper(".certificate-carousel", {
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

