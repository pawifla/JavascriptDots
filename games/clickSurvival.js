const circle = document.getElementById('circle');
const container = document.getElementById('container');
const health = document.getElementById('health');
const healthContainer = document.getElementById('health');
const corners = [
    { top: 0, left: 0 },
    { top: 0, right: 0 },
    { bottom: 0, right: 0 },
    { bottom: 0, left: 0 }
];

let livesRemaining = 3;
let currentCorner = 0;
let animationInProgress = false;
let score = 0;


let direction = '';
let options = [];
function animateCircle() {
    let pos = 0;
    let id = null;
    let startPos = { x: parseInt(circle.style.left.replace(/\D/g, '')), y: parseInt(circle.style.top.replace(/\D/g, '')) };

    // pick random direction based on start positions
    direction = pickDirections(startPos);

    id = setInterval(frame, 10);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
            animateCircle();
        } else {
            switch (direction) {
                case 'down':
                    pos++;
                    moveCircleDown(pos);
                    break;
                case 'up':
                    pos++;
                    moveCircleUp(pos);
                    break;
                case 'right':
                    pos++;
                    moveCircleRight(pos);
                    break;
                case 'left':
                    pos++;
                    moveCircleLeft(pos);
                    break;
                case 'downRight':
                    pos++;
                    moveCircleDownRight(pos);
                    break;
                case 'downLeft':
                    pos++;
                    moveCircleDownLeft(pos);
                    break;
                case 'upRight':
                    pos++;
                    moveCircleUpRight(pos);
                    break;
                case 'upLeft':
                    pos++;
                    moveCircleUpLeft(pos);
                    break;
                default:
            }
        }
        // #region directions
        function moveCircleDown(position) {
            circle.style.top = (startPos.y + position) + "px";
        }
        function moveCircleUp(position) {
            circle.style.top = (startPos.y - position) + "px";
        }
        function moveCircleUpLeft(position) {
            circle.style.top = (startPos.y - position) + "px";
            circle.style.left = (startPos.x - position) + "px";
        }
        function moveCircleDownRight(position) {
            circle.style.top = position + "px";
            circle.style.left = position + "px";
        }
        function moveCircleDownLeft(position) {
            circle.style.top = position + "px";
            circle.style.left = (startPos.x - position) + "px";
        }
        function moveCircleUpRight(position) {
            circle.style.top = (startPos.y - position) + "px";
            circle.style.left = position + "px";
        }
        function moveCircleLeft(position) {
            circle.style.left = (startPos.x - position) + "px";
        }
        function moveCircleRight(position) {
            circle.style.left = position + "px";
        }
        // #endregion
    }
}

function pickDirections(startPos) {
    if (startPos.x === 0 && startPos.y === 0) {
        options = ['down', 'right', 'downRight'];
        const randomIndex = Math.floor(Math.random() * options.length);
        direction = options[randomIndex];
    }
    else if (startPos.x === 0 && startPos.y === 350) {
        options = ['right', 'up', 'upRight'];
        const randomIndex = Math.floor(Math.random() * options.length);
        direction = options[randomIndex];
    }
    else if (startPos.x === 350 && startPos.y === 0) {
        options = ['down', 'left', 'downLeft'];
        const randomIndex = Math.floor(Math.random() * options.length);
        direction = options[randomIndex];
    }
    else if (startPos.x === 350 && startPos.y === 350) {
        options = ['up', 'left', 'upLeft'];
        const randomIndex = Math.floor(Math.random() * options.length);
        direction = options[randomIndex];
    }
    return direction;
}

function loseLife(){
    //remove lives, game over when 0 lives.
    let nextLife = healthContainer.getElementsByClassName('bi')[0];
    if(healthContainer.getElementsByClassName('bi').length == 1){
        healthContainer.removeChild(nextLife);
        gameOver(score);
        return;
    }
    else if(healthContainer.getElementsByClassName('bi').length > 0){
        healthContainer.removeChild(nextLife);
    }
}

function gameOver(finalScore){
    // Todo: fix style 
    //remove ball
    container.removeChild(circle);

    //display game over screen
    const gameOverElem = document.createElement('div');
    gameOverElem.innerHTML += "Game Over <br>";
    gameOverElem.innerHTML +=  'Final Score: '+ finalScore;
    gameOverElem.style = "height: inherit; font-size: xx-large;  width: inherit; display: flex; justify-content: center; align-items: center;"; container.setAttribute('class', 'game-over-screen');
    container.appendChild(gameOverElem);
    clearInterval(countdown);
}

function createLives(numOfLives){
    const iconElem = document.createElement('i');
    iconElem.setAttribute('class','bi bi-heart-fill');
    iconElem.setAttribute('id', numOfLives);
    health.appendChild(iconElem);
}

// Initial position
circle.style.left = '0';
circle.style.top = '0';

//Load 3 lives
for(numOfLives = 3; numOfLives > 0; numOfLives--){
    createLives(numOfLives);
}

//Start Timer
function startTimer(stop) {
  let seconds = 0; // Set the initial time in seconds
  const timerElement = document.getElementById('timer');

  // Display the initial time
  timerElement.textContent = seconds;

  // Start the timer interval
  countdown = setInterval(function() {
    seconds++; // Decrement the time
    score = seconds;
    timerElement.textContent = seconds; // Update the displayed time

  }, 1000); // Run the interval every 1000ms (1 second)
}


function stayinAlive(e){
    //when player successfully clicks circle... maybe add a life
    console.log(circle);
    createLives(3);
}

function activateCircle(){
    //change color - add click event for one second
    // red is clickable, blue is not clickable
    circle.style.backgroundColor = 'red';
    circle.addEventListener('click', stayinAlive);
    //pause animation... maybe

    setTimeout(function(){
    circle.style.backgroundColor = 'blue';
    circle.removeEventListener('click', stayinAlive);
    }, 1000);
}

//random interval clickable circle
(function loop() {
    var rand = Math.round(Math.random() * (30000 - 500)) + 500;
    interval = setInterval(function() {
            activateCircle();
            console.log(rand);
    }, rand);
}());


//start game functions
animateCircle();
activateCircle();
startTimer();

// Move to the next corner on click
container.addEventListener('click', loseLife);

