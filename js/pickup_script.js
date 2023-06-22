let passengersDisplay = document.querySelector(".passengers-display");
let totalPassengers = document.querySelector(".total-passengers");
let passengersDiv = document.querySelector(".passengers-div");


passengersDisplay.addEventListener("click", () => {
  if (passengersDiv.style.display === 'none') {
    passengersDiv.style.display = 'block';
  } else {
    passengersDiv.style.display = 'none';
  }
});