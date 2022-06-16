let playerRock = document.getElementById('playerRock');
let playerPaper = document.getElementById('playerPaper');
let playerScissors = document.getElementById('playerScissors');
let comRock = document.getElementById('comRock');
let comPaper = document.getElementById('comPaper');
let comScissors = document.getElementById('comScissors');
let playerChoices = document.getElementById('playerChoices');
let comChoices = document.getElementById('comChoices');
let playerOption = document.getElementById('playerOption');
let comOption = document.getElementById('comOption');
let displayResult = document.getElementById('displayResult');
let versusBox = document.getElementById('versusBox');
let refresh = document.getElementById('refresh');


// random function for COM choices
const randomComOptions = function() {
    const randomCom = Math.floor(Math.random() * comOptions.length - 1) + 1
    console.log(comOptions[randomCom], '==> result COM')
    return comOptions[randomCom]
};

let comOptions = [
    'Rock',
    'Paper',
    'Scissors'
];


// game info
function resultWin() {
    versusBox.classList.add('win-box'),
        displayResult.setAttribute('style', 'font-size:36px; color:white;')
};

function resultDraw() {
    versusBox.classList.add('draw-box'),
        displayResult.setAttribute('style', 'font-size:36px; color:white;')
};

// text inside game info
function win() {
    console.log('PLAYER 1 WIN')
    resultWin()
    displayResult.innerText = 'PLAYER 1 WIN'
};

function lose() {
    console.log('COM WIN')
    resultWin()
    displayResult.innerText = 'COM WIN'
};

function draw() {
    console.log('GAME DRAW')
    resultDraw()
    displayResult.innerText = 'GAME DRAW'
};


// game play
playerRock.addEventListener('click', function () {
    let gamePlay = randomComOptions()
    randomComOptions.innerText = gamePlay

    // for player selection highlight
    playerRock.classList.add('selection-option'),
        playerRock.setAttribute('style', 'background-color:#C4C4C4;');

    if (gamePlay === 'Rock') {
        draw()
        comRock.classList.add('selection-option'),
            comRock.setAttribute('style', 'background-color:#C4C4C4;')
    } else if (gamePlay === 'Paper') {
        lose()
        comPaper.classList.add('selection-option'),
            comPaper.setAttribute('style', 'background-color:#C4C4C4;')
    } else {
        win()
        comScissors.classList.add('selection-option'),
            comScissors.setAttribute('style', 'background-color:#C4C4C4;')
    }

});

playerPaper.addEventListener('click', function () {
    let gamePlay = randomComOptions()
    randomComOptions.innerText = gamePlay

    // for player selection highlight
    playerPaper.classList.add('selection-option'),
        playerPaper.setAttribute('style', 'background-color:#C4C4C4;');

    if (gamePlay === 'Paper') {
        draw()
        comPaper.classList.add('selection-option'),
            comPaper.setAttribute('style', 'background-color:#C4C4C4;');
    } else if (gamePlay === 'Scissors') {
        lose()
        comScissors.classList.add('selection-option'),
            comScissors.setAttribute('style', 'background-color:#C4C4C4;');
    } else {
        win()
        comRock.classList.add('selection-option'),
            comRock.setAttribute('style', 'background-color:#C4C4C4;');
    }
});

playerScissors.addEventListener('click', function () {
    let gamePlay = randomComOptions()
    randomComOptions.innerText = gamePlay

    // for player selection highlight
    playerScissors.classList.add('selection-option'),
        playerScissors.setAttribute('style', 'background-color:#C4C4C4;');

    if (gamePlay === 'Scissors') {
        draw()
        comScissors.classList.add('selection-option'),
            comScissors.setAttribute('style', 'background-color:#C4C4C4;');
    } else if (gamePlay === 'Rock') {
        lose()
        comRock.classList.add('selection-option'),
            comRock.setAttribute('style', 'background-color:#C4C4C4;');
    } else {
        win()
        comPaper.classList.add('selection-option'),
            comPaper.setAttribute('style', 'background-color:#C4C4C4;');
    }
});


// refresh game
refresh.addEventListener('click', function() {
    versusBox.classList.remove('win-box');
    versusBox.classList.remove('draw-box');
    displayResult.removeAttribute('style', "color: ''; font-size: '';");
    playerRock.removeAttribute('style', "background-color:'';");
    playerPaper.removeAttribute('style', "background-color:'';");
    playerScissors.removeAttribute('style', "background-color:'';");
    comRock.removeAttribute('style', "background-color:'';");
    comPaper.removeAttribute('style', "background-color:'';");
    comScissors.removeAttribute('style', "background-color:'';");
    displayResult.innerText = 'VS';
});