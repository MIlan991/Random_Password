let outputEl1 = document.getElementById('output-el1')
let outputEl2 = document.getElementById('output-el2')
let outputEl3 = document.getElementById('output-el3')
let outputEl4 = document.getElementById('output-el4')

//PASSWORD SLIDER
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

// PASSWORD CHARACTERS
const characters = {
    uppers: "QWERTYUIOPASDFGHJKLZXCVBNM",
    lowers: "qwertyuiopasdfghjklzxcvbnm",
    numbers: "1234567890",
    symbols: "!@#$%^&*"
}

//OUTPUT 1
const getRandomCharFromString1 = (str) => str.charAt(Math.floor(Math.random() * str.length))

const generatePassword = (length = slider.value) => {
    let password1 = "";
    password1 += getRandomCharFromString1(characters.uppers);
    password1 += getRandomCharFromString1(characters.lowers);
    password1 += getRandomCharFromString1(characters.numbers);
    password1 += getRandomCharFromString1(characters.symbols);
    for (let i = password1.length; i < length; i++){
        password1 += getRandomCharFromString1(Object.values(characters).join(''));
        outputEl1.innerHTML = `<input type="text" value=${password1} class="pasword-text" id="pwd-text1">` + `<i id="copy-icon1" class="fa fa-copy" onclick="copyPassword1()"></i>`;
    }
}
//COPY PASSWORD 1
function copyPassword1() {
    var copyText1 = document.getElementById("pwd-text1");
    
    copyText1.select();
    copyText1.setSelectionRange(0, 99999); /* For mobile devices */
    
    navigator.clipboard.writeText(copyText1.value);
}

//OUTPUT 2
const getRandomCharFromString2 = (str) => str.charAt(Math.floor(Math.random() * str.length))

const generatePassword2 = (length = slider.value) => {
    let password2 = "";
    password2 += getRandomCharFromString2(characters.uppers);
    password2 += getRandomCharFromString2(characters.lowers);
    password2 += getRandomCharFromString2(characters.numbers);
    password2 += getRandomCharFromString2(characters.symbols);
    for (let i = password2.length; i < length; i++){
        password2 += getRandomCharFromString2(Object.values(characters).join(''));
        outputEl2.innerHTML = `<input type="text" value=${password2} class="pasword-text" id="pwd-text2">` + `<i id="copy-icon1" class="fa fa-copy" onclick="copyPassword2()"></i>`;
    }
}
//COPY PASSWORD 2
function copyPassword2() {
    var copyText2 = document.getElementById("pwd-text2");
    
    copyText2.select();
    copyText2.setSelectionRange(0, 99999); /* For mobile devices */
    
    navigator.clipboard.writeText(copyText2.value);
}

//OUTPUT 3
const getRandomCharFromString3 = (str) => str.charAt(Math.floor(Math.random() * str.length))

const generatePassword3 = (length = slider.value) => {
    let password3 = "";
    password3 += getRandomCharFromString3(characters.uppers);
    password3 += getRandomCharFromString3(characters.lowers);
    password3 += getRandomCharFromString3(characters.numbers);
    password3 += getRandomCharFromString3(characters.symbols);
    for (let i = password3.length; i < length; i++){
        password3 += getRandomCharFromString3(Object.values(characters).join(''));
        outputEl3.innerHTML = `<input type="text" value=${password3} class="pasword-text" id="pwd-text3">` + `<i id="copy-icon1" class="fa fa-copy" onclick="copyPassword3()"></i>`;
    }
}
//COPY PASSWORD 3
function copyPassword3() {
    var copyText3 = document.getElementById("pwd-text3");
    
    copyText3.select();
    copyText3.setSelectionRange(0, 99999); /* For mobile devices */
    
    navigator.clipboard.writeText(copyText3.value);
}

//OUTPUT 4
const getRandomCharFromString4 = (str) => str.charAt(Math.floor(Math.random() * str.length))

const generatePassword4 = (length = slider.value) => {
    let password4 = "";
    password4 += getRandomCharFromString4(characters.uppers);
    password4 += getRandomCharFromString4(characters.lowers);
    password4 += getRandomCharFromString4(characters.numbers);
    password4 += getRandomCharFromString4(characters.symbols);
    for (let i = password4.length; i < length; i++){
        password4 += getRandomCharFromString4(Object.values(characters).join(''));
        outputEl4.innerHTML = `<input type="text" value=${password4} class="pasword-text" id="pwd-text4">` + `<i id="copy-icon1" class="fa fa-copy" onclick="copyPassword4()"></i>"`;
    }
}
//COPY PASSWORD 4
function copyPassword4() {
    var copyText4 = document.getElementById("pwd-text4");
    
    copyText4.select();
    copyText4.setSelectionRange(0, 99999); /* For mobile devices */
    
    navigator.clipboard.writeText(copyText4.value);
}