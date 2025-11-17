//LOCALSTORAGE SETUP
let timeList = [];
if(localStorage.getItem("timeList")){
  timeList = JSON.parse(localStorage.getItem("timeList"));
}
let myList = [];
if(localStorage.getItem("savedList")){
  myList = JSON.parse(localStorage.getItem("savedList"));
  for (item in myList) {
    //get index of item, use index to find equal in timeList
  htmlList(myList[item], timeList[item]);
}
}
//console.log(myList + " and time: " + timeList);

//ON LOAD
window.addEventListener('load', function() {
    //console.log(localStorage);
});

//reset button
let resetBtn = document.getElementById('clearbtn').addEventListener('click', resetData);
function resetData(){
  //console.log("reset clicked!");
  localStorage.clear();
  for(i in myList){
    document.getElementById("movielist").removeChild(document.querySelector("p"));
  }
  myList = [];
  timeList = [];
}

//export button
let exportBtn = document.getElementById('exportbtn').addEventListener('click', exportData);
function exportData(){
  //console.log("clicked 2!");
  navigator.clipboard.writeText(JSON.stringify(localStorage.savedList));
  alert('Copied to Clipboard!');
}

//searchbar
const textInput = document.getElementById('searchbar');

    textInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        //console.log('Enter key pressed!');
        movieSearch();
        textInput.value = ""
      }
    });

function movieSearch(){
  var filtered = textInput.value.toUpperCase();
  //console.log(filtered);
  findMovie(filtered);
}

// https://www.omdbapi.com/?t=jurassic+park&apikey=e7a20d47 TEST
let fetchpoint = "https://www.omdbapi.com/?t=jurassic+park&apikey=e7a20d47";

async function findMovie(search) {
    //console.log("Success");
    fetchpoint = "https://www.omdbapi.com/?t="+search+"&apikey=e7a20d47";
    try {
        const response = await fetch(fetchpoint); //we are trying to make a new variable (response)
        //while we wait for fetch to get endpoint
        if(!response.ok){
          alert('Failed to access API!')
            throw Error(response.stausText); //if the response isnt okay
        }
        const json = await response.json(); //wait for this to resolve
        if(json.Response == "False"){
          alert("Could not find movie!")
          throw Error(response.stausText);
        }
        
        //console.log(json);
        appendMovie(json.Title, json.Runtime);

    } catch (err) {
        console.log(err);
    }
}
// taking movie from search and pushing to myList, then calling htmlList to update html live
function appendMovie(value, time){
  myList.push(value);
  timeList.push(time);
  localStorage.setItem("savedList", JSON.stringify(myList));
  localStorage.setItem("timeList", JSON.stringify(timeList));
  htmlList(value, time);
}

// adding something to the html list
function htmlList(text, time){
  let ul = document.getElementById("movielist");
  let li = document.createElement("p");
  let timeslot = document.createElement("p");
  timeslot.textContent = time;
  timeslot.setAttribute("class","runtime");
  li.textContent = text;
  ul.appendChild(li);
  li.setAttribute("class", "listing");
  li.setAttribute("id",text);
  let btn = document.createElement("button");
  btn.textContent = "X";
  btn.setAttribute("aria-label","Remove this movie");
  li.appendChild(btn);
  btn.setAttribute("class","removebtn");
  addRemover(btn);
  li.appendChild(timeslot);
}

//adding a remove button
let removeBtns = document.querySelectorAll('.removebtn');
//console.log(removeBtns);
function addRemover(element){
  let specificItem = element.parentNode.getAttribute("id");
  element.addEventListener('click', function (){removeMovie(specificItem)});
  //for the above^ adding the function bit like that prevents an auto-fire on load
}

//removeBtn.addEventListener('click', removeMovie);
//remove list item function via attached removebtn
function removeMovie(specific){
  //console.log("you just tried to remove a movie: " + specific);
  let element = document.getElementById(specific);
  element.remove();
  let myindex = myList.indexOf(specific);
  if (myindex !== -1) {
       myList.splice(myindex, 1);
       timeList.splice(myindex, 1);
    }
  localStorage.setItem("savedList", JSON.stringify(myList));
  localStorage.setItem("timeList", JSON.stringify(timeList));
}