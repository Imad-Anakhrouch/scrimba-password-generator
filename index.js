const passwordChars = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", ",", ".", "<", ">", "?", "/", "\\", "~", "`"
];


let randomNumberOne = 0;//(Math.floor(Math.random() * passwordChars.length);
let randomNumberTwo = 0;//Math.floor(Math.random() * passwordChars.length);
let firstPasswordEl = document.getElementById("first-password");
let secondPasswordEl = document.getElementById("second-password");



function generatePassword() {
    let tempIndexOne = [];
    let tempIndexTwo = [];


    for (let i = 1; i <= 16; i++) {
        randomNumberOne = Math.floor(Math.random() * passwordChars.length);
        randomNumberTwo = Math.floor(Math.random() * passwordChars.length);
        tempIndexOne.push(passwordChars[randomNumberOne])
        tempIndexTwo.push(passwordChars[randomNumberTwo])
    }

    firstPasswordEl.textContent = tempIndexOne.join("");
    secondPasswordEl.textContent = tempIndexTwo.join("");



}