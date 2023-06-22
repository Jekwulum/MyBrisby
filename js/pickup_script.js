let passengersDisplay = document.querySelector(".passengers-display");
let totalPassengers = document.querySelector(".total-passengers");
let passengersDiv = document.querySelector(".passengers-div");
let adultsFigure = document.querySelector('.adults-figure');
let childrenFigure = document.querySelector('.children-figure');
let infantsFigure = document.querySelector('.infants-figure');


passengersDisplay.addEventListener("click", () => {
  if (passengersDiv.style.display === 'none') {
    passengersDiv.style.display = 'block';
  } else {
    passengersDiv.style.display = 'none';
  }
});

let passengersObj = { infants: 0, children: 0, adults: 1 };
let passengers = Object.values(passengersObj).reduce((acc, curr) => acc + curr, 0);
totalPassengers.textContent = passengers;
adultsFigure.textContent = passengersObj["adults"];
childrenFigure.textContent = passengersObj["children"];
infantsFigure.textContent = passengersObj["infants"];


function increasePassengers(category) {
  if (category === "adults") {
    {
      passengersObj["adults"] += 1;
      adultsFigure.textContent = passengersObj["adults"];
    }
  } else if (category === "children") {
    {
      passengersObj["children"] += 1;
      childrenFigure.textContent = passengersObj["children"];
    }
  } else if (category === "infants") {
    {
      passengersObj["infants"] += 1;
      infantsFigure.textContent = passengersObj["infants"];
    }
  }

  passengers = Object.values(passengersObj).reduce((acc, curr) => acc + curr, 0);
  totalPassengers.textContent = passengers;
};

function decreasePassengers(category) {
  if (category === "adults") {
    {
      passengersObj["adults"] == 0 ? "" : passengersObj["adults"] -= 1;
      adultsFigure.textContent = passengersObj["adults"];
    }
  } else if (category === "children") {
    {
      passengersObj["children"] == 0 ? "" : passengersObj["children"] -= 1;
      childrenFigure.textContent = passengersObj["children"];
    }
  } else if (category === "infants") {
    {
      passengersObj["infants"] == 0 ? "" : passengersObj["infants"] -= 1;
      infantsFigure.textContent = passengersObj["infants"];
    }
  }

  passengers = Object.values(passengersObj).reduce((acc, curr) => acc + curr, 0);
  totalPassengers.textContent = passengers;
};