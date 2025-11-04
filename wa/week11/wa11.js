//LOCALSTORAGE SETUP
let myList = [];
if(localStorage.getItem("savedList")){
  myList = JSON.parse(localStorage.getItem("savedList"));
  for (item in myList) {
  htmlList(myList[item]);
}
}
//console.log(myList);

//ON LOAD
window.addEventListener('load', function() {
    //console.log(localStorage);
});

//reset button
let resetBtn = document.getElementById('clearbtn').addEventListener('click', resetData);
function resetData(){
  //console.log("clicked!");
  localStorage.clear();
  for(i in myList){
    document.getElementById("movielist").removeChild(document.querySelector("li"));
  }
  myList = [];
}

//export button
let exportBtn = document.getElementById('exportbtn').addEventListener('click', exportData);
function exportData(){
  //console.log("clicked 2!");
  navigator.clipboard.writeText(JSON.stringify(localStorage));
  alert('Copied to Clipboard!');
}

//searchbar
const textInput = document.getElementById('searchbar');

    textInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        //console.log('Enter key pressed!');
        movieSearch();
      }
    });

function movieSearch(){
  var filtered = textInput.value.toUpperCase();
  //console.log(filtered);
  findMovie(filtered);
}

// http://www.omdbapi.com/?t=jurassic+park&apikey=e7a20d47 TEST
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
        appendMovie(json.Title);

    } catch (err) {
        console.log(err);
    }
}
// taking movie from search and pushing to myList, then calling htmlList to update html live
function appendMovie(value){
  myList.push(value);
  //console.log(myList);
  localStorage.setItem("savedList", JSON.stringify(myList));
  htmlList(value);
}

// adding something to the html list
function htmlList(text){
  let ul = document.getElementById("movielist");
  let li = document.createElement("li")
  li.textContent = text;
  ul.appendChild(li);
}