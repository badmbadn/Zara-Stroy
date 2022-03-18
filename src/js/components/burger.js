"use strict"

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.header__nav');

if (iconMenu) {
   
    iconMenu.addEventListener('click', function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
       
    })
}

const navLinks = document.querySelectorAll('.nav__link[data-goto]');

if(navLinks.length > 0) {
    navLinks.forEach(function(navLink) {
        navLink.addEventListener("click", onMenuLinkClick);
        console.log('dffdf')
    });

}

function onMenuLinkClick(e) {
    const navLink = e.target;
    if(navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
        const gotoBlock = document.querySelector(navLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY //- document.querySelector('.header').offsetHeight;
        
        if(iconMenu.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
        }  
        
        window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"

              
        });
        e.preventDefault();
    }
}

//проверить переход к страницам в состоянии бургер меню