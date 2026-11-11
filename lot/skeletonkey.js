//BUTTON
    let info = false;

    const expandBtn = document.querySelector('.expand-btn');
    const details = document.querySelector('.buttonHidden');

    expandBtn.addEventListener('click', showButtonInfo);
    //when you hear a click, run function

    function showButtonInfo(){
        //console.log("hi!");
        //alert("this is an alert");

        if (info == false){
            details.style.display = 'flex';
            document.querySelector('.expand-btn').textContent = 'UNCLICK';
            document.querySelector('.expand-btn').setAttribute('aria-label', 'Close card')
            info = true;
        } else {
            details.style.display = 'none';
            document.querySelector('.expand-btn').textContent = 'CLICK';
            document.querySelector('.expand-btn').setAttribute('aria-label', 'Expand card')
            info = false;
        }
    }

//INPUT ENTER
    const textInputText = document.querySelector('.inputTextChange');
    const textInput = document.getElementById('textInput');
    textInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        showEnterInfo();
      }
    });

    function showEnterInfo(){
        textInputText.textContent = 'YOU PRESSED ENTER';
    }

//INPUT ENTER THEN SPECIFIC
const textInputText2 = document.querySelector('.inputTextChange2');
    const textInput2 = document.getElementById('textInput2');
    textInput2.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        verifyInputInfo();
      }
    });

    function verifyInputInfo(){
        var specificInput = document.getElementById("textInput2").value;
        if (specificInput == "red")
              {
            textInputText2.textContent = "you typed red!";
              }
        else
              {
            textInputText2.textContent = "you DIDNT type red!";
              }
        }

//TYPE ON LOAD
var i = 0;
var typedtext = 'this is typed text! yahooie!';
var typespeed = 100; //higher is slower

function typeWriter() {
  if (i < typedtext.length) {
    document.getElementById("typing").innerHTML += typedtext.charAt(i);
    i++;
    setTimeout(typeWriter, typespeed);
  }
}