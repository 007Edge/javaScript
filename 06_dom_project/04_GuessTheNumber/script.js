let randomNumber = parseInt((Math.random()*100)+1);
console.log(randomNumber);


const submit = document.querySelector('.submitGuess')
const userInput = document.querySelector('.guessField')
const prev = document.querySelector('.prev')
const GuessRemaining = document.querySelector('.rem')
let result = document.querySelector('.results')



let prevGuess = [];
let remaining = 10;
let playGame = true;

if(playGame) {
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please Enter a Valid Number')
    }
    else if(guess > 100 || guess < 1) {
        alert('Please enter number between 1 and 100');
    }
    
    else {
        remaining--;
        
        prevGuess.push(guess)
        checkGuess(guess)

        GuessRemaining.innerHTML = `Guess Remaining: ${remaining}`
        prev.innerHTML += ` ${guess},`
    }
    
}

function checkGuess(guess) {
    if(remaining == 0) {
        alert('game Over');
        playGame = false
        resetGame()

    }
    if (guess === randomNumber) {
        playGame = false;
        displayMessage(`You Gussed the right number ${guess}`)
        playGame = false
        resetGame()
    }
    console.log(prevGuess);
    
}
function displayMessage(message) {
    result.innerHTML= message;
}

function resetGame() {
    GuessRemaining.innerHTML = `Guess Remaining: 10`
    prev.innerHTML = `Previous guess:`
    prevGuess = [];
    remaining = 10;
    userInput.value = '';
    userInput.setAttribute('disabled','')

}


