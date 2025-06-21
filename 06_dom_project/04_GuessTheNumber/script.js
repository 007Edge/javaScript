let randomNumber = parseInt((Math.random()*100)+1);
console.log(randomNumber);

const submit = document.querySelector('.submitGuess')
const userInput = document.querySelector('.guessField')
const yourGusses = document.querySelector('.yourGusses')
const GuessRemaining = document.querySelector('.rem')
let result = document.querySelector('.results')
let startGame = document.querySelector('.startGame');



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
        checkGuess(guess)
        remaining--;
        GuessRemaining.innerHTML = `${remaining}`
        prevGuess.push(guess)
        console.log(prevGuess);
        yourGusses.innerHTML += ` ${guess},`
    }
    
}

function checkGuess(guess) {
    
    if (guess === randomNumber) {
        playGame = false;
        displayMessage(`You Won!!!.. ${guess}`);
        endGame();

    }
    if(remaining == 0) {
        displayMessage(`Oops! the numbers was.. ${guess}`);
        endGame();   
    }
    
    
    
}
function displayMessage(message) {
    result.innerHTML= message;
}


function endGame() {
    userInput.setAttribute('disabled','')
    startGame.setAttribute('style','display: block')
    submit.setAttribute('disabled','')
    newGame();
}

function newGame() {
    startGame.addEventListener('click',function(e){
        e.preventDefault();
        randomNumber = parseInt((Math.random()*100)+1);
        console.log(randomNumber);
        prevGuess = [];
        remaining = 10;
        yourGusses.innerHTML = ''
        GuessRemaining.innerHTML = '10'
        playGame = true;
        result.innerHTML = '';
        startGame.setAttribute('style', 'display: none')
        userInput.removeAttribute('disabled')
        submit.removeAttribute('disabled')
    })
    
}