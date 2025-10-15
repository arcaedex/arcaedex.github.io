// --NAV MENU SECTION--
const navToggle = document.querySelector('#nav-toggle');
const hamburger = document.querySelectorAll('.hamburger');
const navMenu = document.querySelector('#nav-menu');

//var menu_shown= false;

function showMenu(){

    if ((navMenu.style.display == 'none') && (screen.width <= 768)){
        navMenu.style.display = 'flex';
        navToggle.setAttribute("aria-expanded", "true");
        hamburger[0].style.backgroundColor='grey';
        hamburger[1].style.backgroundColor='grey';
        hamburger[2].style.backgroundColor='grey';
        navToggle.setAttribute('aria-label', 'Close Navigation Menu');
    } else if(screen.width <= 768){
        navMenu.style.display = 'none';
        navToggle.setAttribute("aria-expanded", "false");
        hamburger[0].style.backgroundColor='black';
        hamburger[1].style.backgroundColor='black';
        hamburger[2].style.backgroundColor='black';
        navToggle.setAttribute('aria-label', 'Open Navigation Menu');
    }
}
navToggle.addEventListener('click', showMenu);


// --THEME SECTION--
let themebtn = document.querySelector('#theme-button');
themebtn.addEventListener('click',themeToggle);

function themeToggle(){
    //console.log("theme works");
    let currentTheme = localStorage.getItem('userTheme')
    setTheme(currentTheme);
}

// Save user's theme choice
function setTheme(theme) {
    let inTheme = theme;
    if(inTheme=='dark') {
        theme = 'light';
    } else {
        theme = 'dark';
    }
    localStorage.setItem('userTheme', theme);
    document.body.className = theme;
}

// Load saved theme on page load
window.addEventListener('load', function() {
    const savedTheme = localStorage.getItem('userTheme') || 'light';
    document.body.className = savedTheme;
});

// --FILTER SECTION--
const filterButtons = document.querySelectorAll('.filter-button');
const gridCards = document.querySelectorAll('.resource-card');

//click event
filterButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const filterValue = event.target.textContent.toLowerCase();
    filterGrid(filterValue);
  });
});

//filter function
function filterGrid(category) {
    
  gridCards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

//--NAME INPUT SECTION--
//username function
inputId = document.getElementById('guestname');
let inputtedName = document.getElementById('guestname').value;
inputId.addEventListener('keyup', function onEvent(e) {
    if (e.keyCode === 13) {
        //console.log('Enter');
        inputtedName = document.getElementById('guestname').value;
        document.getElementById("name-taken").textContent = "Welcome, " + inputtedName + "!";
        localStorage.setItem('userName', inputtedName);
    }
});

// Load saved NAME on page load
window.addEventListener('load', function() {
    if(localStorage.getItem('userName') == ""){
    } else{
      inputtedName = localStorage.getItem('userName');
      document.getElementById("name-taken").textContent = "Hello, " + inputtedName + "!";
    }
});