let topNav = document.querySelector('.topnav');
let menuIcon = document.querySelector('.bars-icon');
let closeIcon = document.querySelector('.close-icon');
let cardIcons = document.querySelectorAll('.card-icon');

menuIcon.addEventListener('click', () => {
  topNav.classList.add('responsive');
});

closeIcon.addEventListener('click', () => {
  topNav.classList.remove('responsive');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 915) {
    topNav.classList.remove('responsive');
  }
});

cardIcons.forEach((cardIcon) => {
  cardIcon.addEventListener('mouseenter', () => {
    cardIcon.classList.add('fa-beat-fade');
  });

  cardIcon.addEventListener('mouseleave', () => {
    cardIcon.classList.remove('fa-beat-fade');
  });
});