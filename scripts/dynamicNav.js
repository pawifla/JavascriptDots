// dynamic menu for games
const navButtons = [
  { text: 'Home', url: '../index.html', color: 'blue' },
  { text: 'Dots', url: 'dots.html',color: 'green' },
  { text: 'Clicks Survival', url: 'clickSurvival.html',color: 'gray' },
  { text: 'Game 3', url: 'game3.html',color: 'dark' }
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
    button.className = 'btn btn-block '+ setColor(buttonInfo.color);
    button.textContent = buttonInfo.text;
    button.onclick = function() {
      location.href = buttonInfo.url;
    };

    li.appendChild(button);
    dynamicNavContainer.appendChild(li);
  });
}

function setColor(color){
  //set button color
  let buttonColor = '';
  switch(color){
    case 'blue':
      buttonColor = 'btn-primary';
      break;
    case 'gray':
      buttonColor = 'btn-secondary';
      break;
    case 'green':
      buttonColor = 'btn-success';
      break;
    case 'red':
      buttonColor = 'btn-danger';
      break;
    case 'yellow':
      buttonColor = 'btn-warning';
      break;
    case 'aqua':
      buttonColor = 'btn-info';
      break;
    case 'light':
      buttonColor = 'btn-light';
      break;
    case 'dark':
      buttonColor = 'btn-dark';
      break;
    case 'link':
      buttonColor = 'btn-link';
      break;
    default:
      return 'btn-primary';
  }
  return buttonColor;
}

// Call the function to create the dynamic navigation
createDynamicNav();