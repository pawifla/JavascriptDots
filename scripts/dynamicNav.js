// dynamic menu for games
const navButtons = [
  { text: 'Home', url: '../index.html' },
  { text: 'Dots', url: 'dots.html' },
  { text: 'Clicks Survival', url: 'clickSurvival.html' },
  { text: 'Game 3', url: 'game3.html' }
];

function createDynamicNav() {
  const dynamicNavContainer = document.getElementById('dynamicNav');
  const activeWindow = window.location.pathname.replace(/^\/pages\//, '');
  console.log(activeWindow);

  navButtons.forEach(buttonInfo => {
    if(buttonInfo.url == activeWindow){
      return;
    }
    const li = document.createElement('li');
    li.className = 'nav-item active';
    li.style.paddingRight = '10px';

    const button = document.createElement('button');
    button.className = 'btn btn-danger btn-block';
    button.textContent = buttonInfo.text;
    button.onclick = function() {
      location.href = buttonInfo.url;
    };

    li.appendChild(button);
    dynamicNavContainer.appendChild(li);
  });
}

function setColor(){
  //set button color
}

// Call the function to create the dynamic navigation
createDynamicNav();