'use strict';

// navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');

// nav toggle function
const navToggle = function () {
    nav.classList.toggle('active');
}

navMenuBtn.addEventListener('click', navToggle);
navCloseBtn.addEventListener('click', navToggle);

// theme toggle variables
const themeBtn = document.querySelectorAll('.theme-btn');

for (let i = 0; i < themeBtn.length; i++) {
    themeBtn[i].addEventListener('click', function () {
        document.body.classList.toggle('light');
        document.body.classList.toggle('dark');

        for (let i = 0; i < themeBtn.length; i++) {
            themeBtn[i].classList.toggle('light');
            themeBtn[i].classList.toggle('dark');
        }
    })
}