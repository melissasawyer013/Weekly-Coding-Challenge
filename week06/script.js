let string = ``;

let originalPhonemeArray = ["ma", "pa", "ja", "la", "sa", "va", "she", "sir", "scr", "sip", "lip", "ipt", "sos", "si  ", " is ", "sit", "maw", "awe", "paw", "caw", "some"];

for (let i=2; i<originalPhonemeArray.length; i+=3) {
    string += originalPhonemeArray[i];
    console.log(string);
}

document.querySelector("#output").innerText = string;
