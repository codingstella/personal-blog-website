/*-----------------------------------*\
  #script.js
\*-----------------------------------*/

/*============================
  1. THEME TOGGLE
============================*/

const themeToggleBtns = document.querySelectorAll('.theme-btn-mobile, .theme-btn-desktop');
const body = document.body;

themeToggleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
      body.classList.replace('light-theme', 'dark-theme');
      localStorage.setItem('theme', 'dark-theme');
    } else {
      body.classList.replace('dark-theme', 'light-theme');
      localStorage.setItem('theme', 'light-theme');
    }
  });
});

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) body.className = savedTheme;


/*============================
  2. LOAD MORE BLOG CARDS
============================*/

const loadMoreBtn = document.getElementById('loadMoreBtn');
const blogContainer = document.getElementById('blog-container');

// Example blog data
const blogData = [
  {
    title: 'Blog Post 1',
    topic: 'Database',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Julia Walker',
    date: 'Oct 5, 2025'
  },
  {
    title: 'Blog Post 2',
    topic: 'Accessibility',
    text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices...',
    author: 'Julia Walker',
    date: 'Oct 4, 2025'
  },
  {
    title: 'Blog Post 3',
    topic: 'Web Performance',
    text: 'Phasellus bibendum, mi nec cursus interdum, urna lorem facilisis...',
    author: 'Julia Walker',
    date: 'Oct 3, 2025'
  }
];

let loadedCount = 0;
const increment = 2;

function loadBlogs() {
  const nextBlogs = blogData.slice(loadedCount, loadedCount + increment);

  nextBlogs.forEach(blog => {
    const blogCard = document.createElement('div');
    blogCard.classList.add('blog-card');
    blogCard.innerHTML = `
      <div class="blog-card-banner">
        <img src="./assets/images/blog-placeholder.png" alt="${blog.title}" class="blog-banner-img">
      </div>
      <div class="blog-content-wrapper">
        <span class="blog-topic">${blog.topic}</span>
        <h3 class="h3">${blog.title}</h3>
        <p class="blog-text">${blog.text}</p>
        <div class="wrapper-flex">
          <div class="profile-wrapper">
            <img src="./assets/images/profile.png" alt="${blog.author}">
          </div>
          <span class="h4">${blog.author}</span>
          <span class="separator"></span>
          <span class="text-sm">${blog.date}</span>
        </div>
      </div>
    `;
    blogContainer.appendChild(blogCard);
  });

  loadedCount += increment;

  if (loadedCount >= blogData.length) {
    loadMoreBtn.style.display = 'none';
  }
}

// Initial load
loadBlogs();

loadMoreBtn.addEventListener('click', loadBlogs);


/*============================
  3. NEWSLETTER FORM
============================*/

const newsletterForm = document.getElementById('newsletterForm');
const newsletterMsg = document.getElementById('newsletterMsg');

newsletterForm.addEventListener('submit', e => {
  e.preventDefault();
  newsletterMsg.style.display = 'block';
  newsletterForm.reset();

  setTimeout(() => {
    newsletterMsg.style.display = 'none';
  }, 3000);
});


/*============================
  4. SCROLL TO TOP BUTTON
============================*/

const scrollTopBtn = document.getElementById('scrollTopBtn');

window.onscroll = () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
};

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


/*============================
  5. MOBILE NAVIGATION
============================*/

const navMenuBtn = document.querySelector('.nav-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
const navCloseBtn = document.querySelector('.nav-close-btn');

navMenuBtn.addEventListener('click', () => {
  mobileNav.classList.add('active');
});

navCloseBtn.addEventListener('click', () => {
  mobileNav.classList.remove('active');
});
