const circle = document.getElementById('circle');
console.log(circle);
const container = document.getElementById('container');
const corners = [
    { top: 0, left: 0 },
    { top: 0, right: 0 },
    { bottom: 0, right: 0 },
    { bottom: 0, left: 0 }
];

let currentCorner = 0;
let animationInProgress = false;


let direction = '';
let options = [];
function animateCircle() {
    let count = 0;
    let pos = 0;
    let id = null;
    let startPos = { x: parseInt(circle.style.left.replace(/\D/g, '')), y: parseInt(circle.style.top.replace(/\D/g, '')) };
    circle.style.top = startPos.y;
    circle.style.left = startPos.x;

    // pick random direction based on start positions
    direction = pickDirections(startPos);

    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
        if (count == 350) {
            clearInterval(id);
        } else {
            switch (direction) {
                case 'down':
                    // code block
                    pos++;
                    count++;
                    moveCircleDown(pos);
                    break;
                case 'up':
                    // code block
                    pos++;
                    count++;
                    moveCircleUp(pos);
                    break;
                case 'right':
                    // code block
                    pos++;
                    count++;
                    moveCircleRight(pos);
                    break;
                case 'left':
                    // code block
                    pos++;
                    count++;
                    moveCircleLeft(pos);
                    break;
                case 'downRight':
                    // code block
                    pos++;
                    count++;
                    moveCircleDownRight(pos);
                    break;
                case 'downLeft':
                    // code block
                    pos++;
                    count++;
                    moveCircleDownLeft(pos);
                    break;
                case 'upRight':
                    // code block
                    pos++;
                    count++;
                    moveCircleUpRight(pos);
                    break;
                case 'upLeft':
                    // code block
                    pos++;
                    count++;
                    moveCircleUpLeft(pos);
                    break;
                default:
                // code block
            }
        }
        //4 corners
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

// Initial position
circle.style.left = '0';
circle.style.top = '0';

// Move to the next corner on click
container.addEventListener('click', animateCircle);