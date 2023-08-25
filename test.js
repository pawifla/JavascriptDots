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
    
    // function animateCircle() {
    //   if (animationInProgress) return;

    //   animationInProgress = true;
    //   const targetCorner = corners[currentCorner];

    //   const startX = parseFloat(circle.style.left || 0);
    //   const startY = parseFloat(circle.style.top || 0);
    //   const targetX = targetCorner.left || targetCorner.right || 0;
    //   const targetY = targetCorner.top || targetCorner.bottom || 0;

    //   const duration = 1000; // 1 second
    //   const startTime = performance.now();

    //   function step(timestamp) {
    //     const progress = (timestamp - startTime) / duration;

    //     if (progress >= 1) {
    //       circle.style.left = targetX + 'px';
    //       circle.style.top = targetY + 'px';
    //       animationInProgress = false;

    //       currentCorner = (currentCorner + 1) % corners.length;
    //     } else {
    //       circle.style.left = startX + (targetX - startX) * progress + 'px';
    //       circle.style.top = startY + (targetY - startY) * progress + 'px';
    //       requestAnimationFrame(step);
    //     }
    //   }

    //   requestAnimationFrame(step);
    // }
    let pos = 0;
function animateCircle() {
    let count = 0;
    let id = null;
    clearInterval(id);
    id = setInterval(frame, 1);
    let startPos = {x:circle.style.left, y:circle.style.top};
    console.log(startPos);
    function frame() {
        if (count == 350) {
            clearInterval(id);
        }else if (startPos.x === '351px' && startPos.y === '350px'){
            //diag bottom right - top left
            pos--;
            count++;
            console.log(pos);
            circle.style.top = pos + "px";
            circle.style.left = pos + "px";
        }else if(startPos.x === '0px' && startPos.y === '0px'){
            //diag top left - bottom right
            pos++;
            count++;
            circle.style.top = pos + "px";
            circle.style.left = pos + "px";
        }else if(startPos.x === '0px' && startPos.y === '0px'){
            //diag top right - bottom left
            pos++;
            count++;
            circle.style.top = pos + "px";
            circle.style.left = pos + "px";
        }else if(startPos.x === '350px' && startPos.y === '0px'){
            //diag top left - bottom right
            pos++;
            count++;
            circle.style.top = pos + "px";
            circle.style.left = (-1*pos) + "px";
        }else if(startPos.x === '0px' && startPos.y === '350px'){
            //straight to the right
            pos--;
            count++;
            circle.style.left = pos + "px";
        }else if(startPos.x === '0px' && startPos.y === '350px'){
            //straight to the left
            pos++;
            count++;
            circle.style.left = pos + "px";
        }else if(startPos.x === '350px' && startPos.y === '350px'){
            //straight up
            pos--;
            count++;
            circle.style.top = pos + "px";
        }else if(startPos.x === '0px' && startPos.y === '350px'){
            //straight down
            pos++;
            count++;
            circle.style.top = pos + "px";
        }



    }
}

    // Initial position
    circle.style.left = '0';
    circle.style.top = '0';

    // Move to the next corner on click
    container.addEventListener('click', animateCircle);