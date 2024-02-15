function startTheGame() {
    // generate random number 
    const alphabet = getRandomAlphabet();
    // generate random alphabet 
    const randomAlphabet = document.getElementById('current-alphabet');
    randomAlphabet.innerText = alphabet;
    setBackgroundColor(alphabet);
}
function play() {
    hideElementById('home');
    showElementByID('playground');
    startTheGame();
}