let rhyme = ``;


let button1 = document.querySelector("#button1");
button1.addEventListener("click", addMaryHad, false);

function addMaryHad() {
    rhyme += `Mary had a `;
};



let button2 = document.querySelector("#button2");
button2.addEventListener("click", addLittleLamb, false);

function addLittleLamb() {
    rhyme += `little lamb, `;
};



let button3 = document.querySelector("#button3");
button3.addEventListener("click", addFleece, false);

function addFleece() {
    rhyme += `whose fleece was white as snow.`
};



let button4 = document.querySelector("#button4");
button4.addEventListener("click", addLineBreak, false);

function addLineBreak() {
    rhyme += `\n`
};



let displaySpot = document.querySelector("#output");

let button5 = document.querySelector("#button5");
button5.addEventListener("click", displayRhyme, false);

function displayRhyme() {
    displaySpot.innerText = rhyme;
};



let button6 = document.querySelector("#button6");
button6.addEventListener("click", clearText, false);

function clearText() {
    rhyme = ``;
    displaySpot.innerText = rhyme;
};


