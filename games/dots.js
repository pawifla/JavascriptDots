  const gameContainer = document.querySelector(".game-container");
  let score = 0;
  // TODO: make drawing feature: click and circles created under mouse
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function changeCircleColor(circle) {
    circle.style.backgroundColor = getRandomColor();
  }
  

    function moveCircleRandomly(circle) {
        const maxX = (window.innerWidth - circle.clientWidth) / 2;
        const maxY = (window.innerHeight - circle.clientHeight) / 2;

        const randomX = (Math.floor(Math.random() * 10) % 2 == 0) ? Math.floor(Math.random() * maxX) : Math.floor(Math.random() * maxX * -1);
        const randomY = (Math.floor(Math.random() * 10) % 2 == 0) ? Math.floor(Math.random() * maxY) : Math.floor(Math.random() * maxY * -1);

        circle.style.left = `${randomX}px`;
        circle.style.top = `${randomY}px`;
    } 

    function createCircle() {
        const circle = document.createElement("div");
        circle.classList.add("circle");
        circle.style.backgroundColor = getRandomColor();
      
        circle.addEventListener("click", () => {
          moveCircleRandomly(circle);
          createCircle();
        });
      
        gameContainer.appendChild(circle);
      
        return circle;
      }

      function fillScreenWithDots (count){
        let maxDots = 100;
        let counter = count ? count : 0;
        // TODO: add condition not to run if filling
        // add inputs for speed/dot amount
        if(counter < maxDots){
          setTimeout(function(){
          let circle = createCircle();
          circle.classList.add("circle");
          circle.style.backgroundColor = getRandomColor();
          moveCircleRandomly(circle);
          createCircle();
            counter++;
            console.log(counter);
            fillScreenWithDots(counter);
          }, 10);
        } 
      }


      function startGame() {
        const scoreElement = document.createElement("div");
        scoreElement.id = "score";
        scoreElement.textContent = "Score: 0";
        gameContainer.appendChild(scoreElement);
      
        let circles = [];
      
        const circle = createCircle();
        circles.push(circle);
      }
  
  startGame();
  
  
  
  
  
  