const circle = document.getElementById('circle');
const container = document.getElementById('container');
const health = document.getElementById('health');
const corners = [
    { top: 0, left: 0 },
    { top: 0, right: 0 },
    { bottom: 0, right: 0 },
    { bottom: 0, left: 0 }
];

let livesRemaining = 3;
let currentCorner = 0;
let animationInProgress = false;
const score = 0;


let direction = '';
let options = [];
function animateCircle() {
    let pos = 0;
    let id = null;
    let startPos = { x: parseInt(circle.style.left.replace(/\D/g, '')), y: parseInt(circle.style.top.replace(/\D/g, '')) };

    // pick random direction based on start positions
    direction = pickDirections(startPos);

    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
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
        //directions
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
    const healthContainer = document.getElementById('health');
    let nextLife = healthContainer.getElementsByClassName('bi')[0];
    console.log(typeof(nextLife));
    if(typeof(nextLife) != 'object'){
        console.log('game over');
        console.log(seconds);
        score = seconds;
        return;
    }
    healthContainer.removeChild(nextLife);
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
    timerElement.textContent = seconds; // Update the displayed time

  }, 1000); // Run the interval every 1000ms (1 second)
}

startTimer();

// Move to the next corner on click
container.addEventListener('click', loseLife);