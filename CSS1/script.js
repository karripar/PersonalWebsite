'use strict'

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.product-container section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('show')
        }, index * 500);
    });
});



// toggles a menu bar on the left edge of the html (button)
document.getElementById('menu-toggle').addEventListener('click', function(event) {
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

document.addEventListener('click', function() {
    const menu = document.querySelector('.dropdown_menu');
    const toggleButton = document.getElementById('menu-toggle');
    if (menu.style.width === '250px') {
        menu.style.width = '0';
        toggleButton.innerHTML = '&#9654;'; // arrow to the right
        toggleButton.style.left = '0'; // button moves to the left
    }
});

document.querySelector('.dropdown_menu').addEventListener('click', function(event) {
    event.stopPropagation();
});



const ratImage = document.getElementById("ChaseTheRat");
ratImage.addEventListener('click', function() {
    window.location.href = 'https://github.com/lummila/projekti-2';
});


const htmlImage = document.getElementById("htmlRepo");
htmlImage.addEventListener('click', function() {
    window.location.href = 'https://github.com/karripar/PersonalWebsite';
});









