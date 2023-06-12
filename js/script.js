let topNav = document.querySelector('.topnav');
let menuIcon = document.querySelector('.bars-icon');
let closeIcon = document.querySelector('.close-icon');

menuIcon.addEventListener('click', () => {
  console.log("hello")
  topNav.classList.add('responsive');
});

closeIcon.addEventListener('click', () => {
  topNav.classList.remove('responsive');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 915) {
    topNav.classList.remove('responsive');
  }
})