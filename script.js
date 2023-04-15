let inputSlider = document.getElementById('inputSlider'),
sliderValue = document.getElementById('sliderValue'),
passBox = document.getElementById('passBox'),
lowercase = document.getElementById('lowercase'),
uppercase = document.getElementById('uppercase'),
numbers = document.getElementById('numbers'),
symbols = document.getElementById('symbols'),
generateBtn = document.getElementById('generateBtn'),
copyIcon = document.getElementById('copyIcon');

sliderValue.textContent = inputSlider.value
inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value;
});

let lowerChars = 'abcdefghijklmnopqrstuvwxyz',
upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
allNumbers = '0123456789',
allSymbols = ",.;:~^!@#$%¨&*(){}[]_-=+?";

generateBtn.addEventListener('click', () => {
    passBox.value = generatePass();
});

function generatePass() {
    let generatePassword = "", str = "";

    str += uppercase.checked ? upperChars : '';
    str += lowercase.checked ? lowerChars : '';
    str += numbers.checked ? allNumbers : '';
    str += symbols.checked ? allSymbols : '';

    if (str.length == 0) {
        return generatePassword;
    }

    let i = 1;

    while (i<=inputSlider.value) {
        generatePassword += str.charAt((Math.random() * 469) % str.length);
        i++;
    }
    
    return generatePassword;
}

copyIcon.addEventListener('click', () => {
    if (passBox.value.length >= 1) {
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = 'check';
        copyIcon.title = "Senha Copiada";

        setTimeout( () => {
            copyIcon.innerHTML ='content_copy';
            copyIcon.title = "Copiar";
        }, 1500);
    }
});