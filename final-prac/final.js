"use strict";

let currentNumber;
let streak = 0;
let gameStarted = false;

function startGame() {
    currentNumber = generateNewNumber();
    document.getElementById('current-number').innerText = currentNumber;
    document.getElementById('message').innerText = '';
    document.getElementById('play-again').style.display = 'none';
    document.getElementById('high-button').disabled = false;
    document.getElementById('low-button').disabled = false;
    gameStarted = true;
}

function guess(choice) {
    if (!gameStarted) return;

    const newNumber = generateNewNumber();
    const result = (choice === 'high' && newNumber > currentNumber) || (choice === 'low' && newNumber < currentNumber);

    if (result) {
        streak++;
        document.getElementById('message').innerText = '正解！次のカードは ' + newNumber + ' でした！';
    } else {
        streak = 0;
        document.getElementById('message').innerText = '不正解...次のカードは ' + newNumber + ' でした。';
    }

    document.getElementById('play-again').style.display = 'block';
    document.getElementById('high-button').disabled = true;
    document.getElementById('low-button').disabled = true;

    document.getElementById('streak').innerText = streak;
    gameStarted = false;
}

function generateNewNumber() {
    let newNumber;
    do {
        newNumber = Math.floor(Math.random() * 13) + 1;
    } while (newNumber === currentNumber);
    return newNumber;
}

function enableButtons() {
    document.getElementById('high-button').disabled = false;
    document.getElementById('low-button').disabled = false;
}

document.getElementById('play-again').onclick = function () {
    enableButtons();
    startGame();
};

startGame();