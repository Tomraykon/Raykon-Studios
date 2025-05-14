
const hoverSound = new Audio('../assets/sounds/hover.mp3');

const hoverElements = document.querySelectorAll('.nav-links a, .button, .logo-link, .news-card');

hoverElements.forEach(element => {
  element.addEventListener('mouseenter', () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });
});


const hoverSound2 = new Audio('../assets/sounds/hover-2.mp3');

const hoverElements2 = document.querySelectorAll('.debug-buttons a');

hoverElements2.forEach(element => {
  element.addEventListener('mouseenter', () => {
    hoverSound2.currentTime = 0;
    hoverSound2.play();
  });
});