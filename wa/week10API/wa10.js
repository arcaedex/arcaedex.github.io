let redBtn = document.querySelector("#red-button").addEventListener('click', redPress);
let orgBtn = document.querySelector("#orange-button").addEventListener('click', orangePress);
let ylwBtn = document.querySelector("#yellow-button").addEventListener('click', yellowPress);
let grnBtn = document.querySelector("#green-button").addEventListener('click', greenPress);
let bluBtn = document.querySelector("#blue-button").addEventListener('click', bluePress);
let prpBtn = document.querySelector("#purple-button").addEventListener('click', purplePress);
let pnkBtn = document.querySelector("#pink-button").addEventListener('click', pinkPress);

let currentPal = {
    firstVal:"",
    secondVal:"",
    thirdVal:"",
    fourthVal:"",
    fifthVal:""
}

function redPress(){
    const endpointred = "https://proxy.corsfix.com/?https://colormagic.app/api/palette/search?q=red";
    newPalette(endpointred);
}
function orangePress(){
    const endpointorg = "https://proxy.corsfix.com/?https://colormagic.app/api/palette/search?q=orange";
    newPalette(endpointorg);
}
function yellowPress(){
    const endpointylw = "https://proxy.corsfix.com/?https://colormagic.app/api/palette/search?q=yellow";
    newPalette(endpointylw);
}
function greenPress(){
    const endpointgrn = "https://proxy.corsfix.com/?https://colormagic.app/api/palette/search?q=green";
    newPalette(endpointgrn);
}
function bluePress(){
    const endpointblu = "https://proxy.corsfix.com/?https://colormagic.app/api/palette/search?q=blue";
    newPalette(endpointblu);
}
function purplePress(){
    const endpointprp = "https://proxy.corsfix.com/?https://colormagic.app/api/palette/search?q=purple";
    newPalette(endpointprp);
}
function pinkPress(){
    const endpointpnk = "https://proxy.corsfix.com/?https://colormagic.app/api/palette/search?q=pink";
    newPalette(endpointpnk);
}

async function newPalette(givenColor) {
    console.log(givenColor +" just ran!")
    try {
        const response = await fetch(givenColor);
        if(!response.ok){
            throw Error(response.stausText);
        }
        const json = await response.json();
        let ranArray = json[Math.floor(Math.random() * json.length)]; 
        currentPal.firstVal = ranArray.colors[0];
        currentPal.firstVal = currentPal.firstVal.slice(1,7);
        currentPal.secondVal = ranArray.colors[1];
        currentPal.secondVal = currentPal.secondVal.slice(1,7);
        currentPal.thirdVal = ranArray.colors[2];
        currentPal.thirdVal = currentPal.thirdVal.slice(1,7);
        currentPal.fourthVal = ranArray.colors[3];
        currentPal.fourthVal = currentPal.fourthVal.slice(1,7);
        currentPal.fifthVal = ranArray.colors[4];
        currentPal.fifthVal = currentPal.fifthVal.slice(1,7);
        //console.log(currentPal);
        displayPalette();
    } catch (err) {
        console.log(err);
        alert('Failed to get new palette!');
    }
}

function displayPalette() {
    document.querySelector('#color-one').src = "https://php-noise.com/noise.php?hex=$"+currentPal.firstVal+"&json";
    document.querySelector('#color-two').src = "https://php-noise.com/noise.php?hex=$"+currentPal.secondVal+"&json";
    document.querySelector('#color-three').src = "https://php-noise.com/noise.php?hex=$"+currentPal.thirdVal+"&json";
    document.querySelector('#color-four').src = "https://php-noise.com/noise.php?hex=$"+currentPal.fourthVal+"&json";
    document.querySelector('#color-five').src = "https://php-noise.com/noise.php?hex=$"+currentPal.fifthVal+"&json";
    
    document.querySelector('.colorholder').style.display = 'flex';
}


