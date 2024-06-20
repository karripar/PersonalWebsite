'use strict';

// animation for project examples
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.product-container section');
  sections.forEach((section, index) => {
    setTimeout(() => {
      section.classList.add('show');
    }, index * 500);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const skillBars = document.querySelectorAll('.skill-bar');

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function fillSkillBars() {
    skillBars.forEach(skillBar => {
      if (isElementInViewport(skillBar)) {
        const percent = skillBar.getAttribute('data-percent');
        const skillBarFill = skillBar.querySelector('.skill-bar-fill');
        skillBarFill.style.width = percent;
        skillBar.querySelector('.skill-percent').style.opacity = 1;
        skillBar.querySelector('.skill-percent').textContent = percent;
      }
    });
  }

  window.addEventListener('scroll', fillSkillBars);
  window.addEventListener('resize', fillSkillBars);
  fillSkillBars(); // Initial check
});

// cool initial scrolling in the document to specified element (empty right now)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// toggles a menu bar on the left edge of the html (button)
document.getElementById('menu-toggle').
    addEventListener('click', function(event) {
      event.stopPropagation();
      const menu = document.querySelector('.dropdown_menu');
      const toggleButton = document.getElementById('menu-toggle');
      console.log('Current width:', menu.style.width);
      if (menu.style.width === '250px') {
        menu.style.width = '0';
        toggleButton.innerHTML = '&#9654;'; // arrow to the right
        toggleButton.style.left = '0'; // button moves to the left
      } else {
        menu.style.width = '250px';
        toggleButton.innerHTML = '&#9664;'; // arrow to the left
        toggleButton.style.left = '250px'; // button moves to the right
      }
    });

// close the sidebar if document is clicked elsewhere
document.addEventListener('click', function() {
  const menu = document.querySelector('.dropdown_menu');
  const toggleButton = document.getElementById('menu-toggle');
  if (menu.style.width === '250px') {
    menu.style.width = '0';
    toggleButton.innerHTML = '&#9654;'; // arrow to the right
    toggleButton.style.left = '0'; // button moves to the left
  }
});

document.querySelector('.dropdown_menu').
    addEventListener('click', function(event) {
      event.stopPropagation();
    });

// check the state of the old color toggle when switching pages
window.addEventListener('DOMContentLoaded', (event) => {
  const themeSwitcher = document.getElementById('theme-switcher');
  if (localStorage.getItem('theme') === 'pink') {
    document.documentElement.classList.add('pink-theme');
    themeSwitcher.checked = true;
  }
});

document.getElementById('theme-switcher').
    addEventListener('change', function() {
      if (this.checked) {
        document.documentElement.classList.add('pink-theme');
        localStorage.setItem('theme', 'pink');
      } else {
        document.documentElement.classList.remove('pink-theme');
        localStorage.removeItem('theme');
      }
    });

const ratImage = document.getElementById('ChaseTheRat');
ratImage.addEventListener('click', function() {
  window.location.href = 'https://github.com/lummila/projekti-2';
});

const htmlImage = document.getElementById('htmlRepo');
htmlImage.addEventListener('click', function() {
  window.location.href = 'https://github.com/karripar/PersonalWebsite';
});

const logo = document.querySelector('.logo');
logo.addEventListener('click', function() {
  window.location.href = 'index.html';
});








