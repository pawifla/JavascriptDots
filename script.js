  const circle = document.getElementById("circle");
  let score = 0;
  
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function changeCircleColor() {
    circle.style.backgroundColor = getRandomColor();
  }
  
  function increaseScore() {
    score++;
    circle.textContent = `Score: ${score}`;
  }

    function moveCircleRandomly() {
    const maxX = (window.innerWidth - circle.clientWidth)/2;
    const maxY = (window.innerHeight - circle.clientHeight)/2;

    const randomX = (Math.floor(Math.random() * 10) % 2 == 0)? Math.floor(Math.random() * maxX): Math.floor(Math.random()* maxX *-1);
    const randomY = (Math.floor(Math.random()* 10) % 2 == 0)? Math.floor(Math.random() * maxY): Math.floor(Math.random()* maxY *-1);


    circle.style.left = `${randomX}px`;
    circle.style.top = `${randomY}px`;
    console.log(randomX, randomY);
    } 
  function startGame() {
    circle.addEventListener("click", () => {
      increaseScore();
      changeCircleColor();
      moveCircleRandomly();
    });
  
    // Initial circle color change
    changeCircleColor();
  }
  
  startGame();
  
  
  
  
  
  