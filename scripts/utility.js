// hide element 
function hideElementById(elementId)
{
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
// show element 
function showElementByID(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

// get random number 
function getRandomAlphabet() {
    const alphabetsString = "abcdefghijklmnopqrstuvwxyz";
    const alphabets = alphabetsString.split('');

    // get random number  0 to 25
    const randomNumber = (Math.random() * 100);
    const randomNum = Math.round(randomNumber) % 25;
    const alphabet = alphabets[randomNum];
    return alphabet;
}
// set background 
function setBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-500');
}
// remove background 
function removeBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-500');
}

function getTextValueById(elementID) {
    const element = document.getElementById(elementID);
    const value = parseInt(element.innerText);
    return value;
}

function setTextValueById(elementID, value) {
    const element = document.getElementById(elementID);
    element.innerText =value;
}