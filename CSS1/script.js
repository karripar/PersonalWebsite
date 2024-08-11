'use strict';

// animation for project examples
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.product-container section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('show');
        }, index * 500);
    });
});

// skillbar animations and percentage filled
document.addEventListener('DOMContentLoaded', function () {
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
            const percent = skillBar.getAttribute('data-percent');
            const skillBarFill = skillBar.querySelector('.skill-bar-fill');
            const skillPercent = skillBar.querySelector('.skill-percent');
            if (isElementInViewport(skillBar)) {
                skillBarFill.style.width = percent;
                skillPercent.style.opacity = 1;
                skillPercent.textContent = percent;
            } else {
                skillBarFill.style.width = '0%';
                skillPercent.style.opacity = 0;
                skillPercent.textContent = '';
            }
        });
    }

    window.addEventListener('scroll', fillSkillBars);
    window.addEventListener('resize', fillSkillBars);
    fillSkillBars(); // Initial check
});

// cool initial scrolling in the document to specified element (empty right now)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});
/**
 // logic for the project carousel (gallery)
 let currentIndex = 0;

 function showSlide(index) {
 const slides = document.querySelectorAll('.product-container section');
 const totalSlides = slides.length;

 if (index >= totalSlides - 2) {
 currentIndex = 0;
 } else if (index < 0) {
 currentIndex = totalSlides - 3;
 } else {
 currentIndex = index;
 }

 const newTransform = -currentIndex * (100 / 3) + '%'; // Adjust the transform percentage
 document.querySelector('.product-container').style.transform = `translateX(${newTransform})`;
 }

 function nextSlide() {
 showSlide(currentIndex + 1);
 }

 function prevSlide() {
 showSlide(currentIndex - 1);
 }

 // Initialize the carousel
 showSlide(currentIndex);
 **/
// toggles a menu bar on the left edge of the html (button)
document.getElementById('menu-toggle').addEventListener('click', function (event) {
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
document.addEventListener('click', function () {
    const menu = document.querySelector('.dropdown_menu');
    const toggleButton = document.getElementById('menu-toggle');
    if (menu.style.width === '250px') {
        menu.style.width = '0';
        toggleButton.innerHTML = '&#9654;'; // arrow to the right
        toggleButton.style.left = '0'; // button moves to the left
    }
});

document.querySelector('.dropdown_menu').addEventListener('click', function (event) {
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

document.getElementById('theme-switcher').addEventListener('change', function () {
    if (this.checked) {
        alert("Changing to a pink theme. Mind the brightness change...")
        document.documentElement.classList.add('pink-theme');
        localStorage.setItem('theme', 'pink');
    } else {
        document.documentElement.classList.remove('pink-theme');
        localStorage.removeItem('theme');
    }
});

const logoImage = document.querySelector(".logo");
logoImage.addEventListener('click', function () {
    window.location.href = 'index.html'
})

const ratImage = document.getElementById('ChaseTheRat');
ratImage.addEventListener('click', function () {
    window.location.href = 'https://github.com/lummila/projekti-2';
});

const htmlImage = document.getElementById('htmlRepo');
htmlImage.addEventListener('click', function () {
    window.location.href = 'https://github.com/karripar/PersonalWebsite';
});

const logo = document.querySelector('.logo');
logo.addEventListener('click', function () {
    window.location.href = 'index.html';
});








