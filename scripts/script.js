
  const hoverSound = new Audio('./assets/sounds/hover.mp3');

  const hoverElements = document.querySelectorAll('.nav-links a, .button, .logo-link');

  hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      hoverSound.currentTime = 0;
      hoverSound.play();
    });
  });