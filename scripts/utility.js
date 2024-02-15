function hideElementById(elementId)
{
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementByID(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getRandomAlphabet() {
    const alphabetsString = "abcdefghijklmnopqrstuvwxyz";
    const alphabets = alphabetsString.split('');

    // get random number  0 to 25
    const randomNumber = (Math.random() * 100);
    const randomNum = Math.round(randomNumber) % 25;
    const alphabet = alphabets[randomNum];
    return alphabet;
}
function setBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-500');
}

function removeBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-500');
}