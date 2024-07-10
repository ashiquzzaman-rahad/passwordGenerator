const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialChars = "!@#$%&*^()_-{}[]:;?/";

let allowedChars = "";
let password = "";

async function copyContent() {
    const text = document.getElementById("generatedPass").textContent;
    try {
      await navigator.clipboard.writeText(text);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Error copying content:', err);
    }
}

function showToast() {
    const toast = document.getElementById('toast');
    toast.innerText = 'Password Copied to Clipboard!';
    toast.style.visibility = 'visible';

    // Hide the toast after 3 seconds
    setTimeout(() => {
        toast.style.visibility = 'hidden';
    }, 3000);
}


function generatePassword() {
    const passwordLength = document.getElementById("passwordLength").value;
    const includeUppercase = document.getElementById("includeUppercase");
    const includeLowercase = document.getElementById("includeLowercase");
    const includeNumbers = document.getElementById("includeNumbers");
    const includeSymbols = document.getElementById("includeSymbols");
    const generatedPass = document.getElementById("generatedPass");

    if(includeUppercase.checked){
        allowedChars += uppercaseLetters;
    }
    
    if(includeLowercase.checked){
        allowedChars += lowercaseLetters;
    }

    if(includeNumbers.checked){
        allowedChars += numbers;
    }

    if(includeSymbols.checked){
        allowedChars += specialChars;
    }

    if (allowedChars.length === 0){
        generatedPass.textContent = "Please Add Some Characters to Generate Password!";
    }
    else{
        for (let i = 0; i < passwordLength; i++){
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
        }

        generatedPass.textContent = password;
        password = "";
        allowedChars = "";
    }

}