'use strict';

// ===== Navbar Toggle =====
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');

const navToggleFunc = () => {
  nav.classList.toggle('active');
};

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);

// Close mobile nav on nav link click
const mobileNavLinks = document.querySelectorAll('.mobile-nav .nav-link');
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});


// ===== Theme Toggle with LocalStorage =====
const themeBtn = document.querySelectorAll('.theme-btn');
const body = document.body;

// Apply saved theme on load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-theme');
  body.classList.remove('light-theme');
  themeBtn.forEach(btn => {
    btn.classList.add('dark');
    btn.classList.remove('light');
  });
} else {
  body.classList.add('light-theme');
  themeBtn.forEach(btn => {
    btn.classList.add('light');
    btn.classList.remove('dark');
  });
}

// Toggle theme on button click
themeBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');

    themeBtn.forEach(btn => {
      btn.classList.toggle('dark');
      btn.classList.toggle('light');
    });

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});


// ===== Newsletter Form Validation =====
const newsletterForm = document.querySelector('.newsletter form');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', function (e) {
    const emailInput = this.querySelector('input[name="email"]');
    const email = emailInput.value.trim();

    if (!email || !email.includes('@')) {
      e.preventDefault(); // Stop form submission
      alert('Please enter a valid email address.');
    }
  });
}


// ===== Load More Blog Cards =====
const blogCards = document.querySelectorAll('.blog-card');
const loadMoreBtn = document.querySelector('.load-more');

if (blogCards.length && loadMoreBtn) {
  let visibleCards = 3;

  const showCards = count => {
    blogCards.forEach((card, i) => {
      card.style.display = i < count ? 'block' : 'none';
    });
  };

  showCards(visibleCards);

  loadMoreBtn.addEventListener('click', () => {
    visibleCards += 3;
    showCards(visibleCards);

    if (visibleCards >= blogCards.length) {
      loadMoreBtn.style.display = 'none';
    }
  });
}
