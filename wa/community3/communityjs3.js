// this is for the ""hamburger"" menu
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

//this is for the guestbook
document.getElementById('guestnameButton').addEventListener("click", signBook);

function signBook(){
    let nameInput = document.getElementById('guestname').value;
    if (nameInput === ""){
        document.getElementById("book").textContent = "You didn't put anything in, silly!";
    } else {
document.getElementById("book").textContent = "Thanks for signing, " + nameInput + " the ant!";
    }
}

// section for resource buttons
const filterButtons = document.querySelectorAll('.resourceButton button');
const gridCards = document.querySelectorAll('.resource-card');

// Add click event to each resourcebutton
filterButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const filterValue = event.target.textContent.toLowerCase();
    filterGrid(filterValue);
  });
});

function filterGrid(category) {
    
  gridCards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

//DATA CONSENT
document.querySelector('#consent').addEventListener('click',markedRead);
function markedRead(){
  const popupped = document.getElementById('popup');
  popupped.style.display = 'none';
  localStorage.setItem('Consent', 'read');
}

if(localStorage.getItem('Consent') == 'read'){
document.getElementById('popup').style.display = 'none';
}

//DATA REMOVAL
document.querySelector('#deleteData').addEventListener('click',clearCache());
function clearCache(){
localStorage.clear();
console.log("clearCache ran");
}

//THEME
let btn = document.querySelector('#theme').addEventListener('click',theme);

function theme(){
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