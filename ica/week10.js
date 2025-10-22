let trivaBtn = document.querySelector("#js-new-quote").addEventListener('click', newTrivia);
let answerBtn = document.querySelector('#js-tweet').addEventListener('click', newAnswer);

let current = {
    question:"",
    answer:""
}

const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";


async function newTrivia() {
    //console.log("Success");

    try {
        const response = await fetch(endpoint); //we are trying to make a new variable (response)
        //while we wait for fetch to get endpoint
        if(!response.ok){
            throw Error(response.stausText); //if the response isnt okay
        }
        const json = await response.json(); //wait for this to resolve
        //console.log(json);
        displayTrivia(json["question"]);
        current.question = json["question"];
        current.answer = json["answer"];
        //console.log(current.question);
        //console.log(current.answer);
    } catch (err) {
        console.log(err);
        alert('Failed to get new trivia');
    }
}

function displayTrivia(question) {
    const questionText = document.querySelector('#js-quote-text');
    const answerText = document.querySelector('#js-answer-text');
    questionText.textContent = question;
    answerText.textContent = "";
}

function newAnswer(){
    //console.log("success == answer!")
    const answerText = document.querySelector('#js-answer-text');
    answerText.textContent = current.answer;
}

newTrivia();