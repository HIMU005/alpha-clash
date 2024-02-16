function cathThePress(event) {
    const playerPressed = event.key;
    
    const currentExpectElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentExpectElement.innerText.toLowerCase();

    console.log(playerPressed, currentAlphabet);
    if(playerPressed === currentAlphabet) {
        console.log('You win');
        removeBackgroundColor(playerPressed);

        const currentScore= getTextValueById('current-score');
        const newScore = currentScore+ 1;
        setTextValueById('current-score', newScore)
        console.log('currentScore', newScore);

        startTheGame();
    }
    else {
        console.log('try again');
        const currentLife =getTextValueById('current-life')
        const newLife = currentLife-1;
        setTextValueById('current-life', newLife);
    }
}

document.addEventListener('keyup',cathThePress);

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
