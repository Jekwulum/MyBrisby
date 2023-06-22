let topNav = document.querySelector('.topnav');
let menuIcon = document.querySelector('.bars-icon');
let closeIcon = document.querySelector('.close-icon');
let cardIcons = document.querySelectorAll('.card-icon');
let suburbSelect = document.getElementById("suburb-select");
let rangeInput = document.getElementById("price-range");
let rangeValue = document.getElementById("rangeValue");

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

let suburbs = ["Brisbane City", "South Brisbane", "Fortitude Valley", "New Farm",
  "Paddington", "West End", "Spring Hill", "Kangaroo Point",
  "Milton", "Toowong", "Indooroopilly", "St Lucia",
  "Taringa", "Ashgrove", "Bulimba", "Hamilton",
  "Ascot", "Chermside", "Nundah", "Sunnybank"];
suburbs.sort((a, b) => a.localeCompare(b));
suburbs.forEach(suburb => {
  const option = document.createElement("option");
  option.value = suburb;
  option.textContent = suburb;
  suburbSelect.appendChild(option);
});

rangeInput.addEventListener("input", function () {
  rangeValue.textContent = `$${rangeInput.value}`;
});