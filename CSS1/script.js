'use strict'

const ratImage = document.getElementById("ChaseTheRat");

ratImage.addEventListener('click', function() {
    window.location.href = 'https://github.com/lummila/projekti-2';
});

const htmlImage = document.getElementById("htmlRepo");

htmlImage.addEventListener('click', function() {
    window.location.href = 'https://github.com/karripar/PersonalWebsite';
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.product-container section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('show')
        }, index * 500);
    });
});











