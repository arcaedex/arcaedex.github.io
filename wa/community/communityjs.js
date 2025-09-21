const navToggle = document.querySelector('.nav-toggle');
const hamburger = document.querySelectorAll('.hamburger');
const navMenu = document.querySelector('.nav-menu');

var menu_shown= false;

function showMenu(){
    var shown = navMenu.classList.toggle("show");
    navMenu.classList.toggle("hide");

    if (shown){
        navToggle.setAttribute("aria-expanded", "true");
        hamburger[0].style.backgroundColor='grey';
        hamburger[1].style.backgroundColor='grey';
        hamburger[2].style.backgroundColor='grey';
        navToggle.setAttribute('aria-label', 'Close Navigation Menu');
    } else {
        navToggle.setAttribute("aria-expanded", "false");
        hamburger[0].style.backgroundColor='black';
        hamburger[1].style.backgroundColor='black';
        hamburger[2].style.backgroundColor='black';
        navToggle.setAttribute('aria-label', 'Open Navigation Menu');
    }
}

navToggle.addEventListener('click', showMenu);