const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "123456789";
const symbols = ["~`!@#$%^&*()_-+={[}]|:;'<>.?/"]

let passwordLength = document.getElementById('password-length');
let uppercaseEl = document.getElementById('uppercase');
let lowercaseEl = document.getElementById('lowercase');
let numbersEl = document.getElementById('numbers');
let symbolsEl = document.getElementById('symbols');
const generateButton = document.getElementById("generate-btn");
const firstPasswordBox = document.getElementById("first-password");
const secondPasswordBox = document.getElementById("second-password");


generateButton.addEventListener('click', () =>{
    firstPasswordBox.value = generatePassword(); 
    secondPasswordBox.value = generatePassword()
})

const generatePassword = () =>{
    let randomPassword = "";
    let allCharacters = ""

    allCharacters += uppercaseEl.checked ? upperCaseLetters : "";
    allCharacters += lowercaseEl.checked ? lowerCaseLetters : "";
    allCharacters += numbersEl.checked ? numbers : "";
    allCharacters += symbolsEl.checked ? symbols : "";

    let i = 1;
    while(i <= passwordLength.value){ 
        randomPassword += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
        i++;
    }
    return randomPassword
}

firstPasswordBox.addEventListener('click', () =>{
    navigator.clipboard.writeText(firstPasswordBox.value);
    alert("Password copied")
})

secondPasswordBox.addEventListener('click', () =>{
    navigator.clipboard.writeText(secondPasswordBox.value);
    alert("Password copied")
})



