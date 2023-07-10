window.addEventListener("DOMContentLoaded", () => {
  let token = sessionStorage.getItem("token");

  // if (!token) {
  //   window.location.href = 'index.html';
  // }
});

let BASE_URL = "http://localhost:4000";

function toggleAddStaff() {
  let addStaffDiv = document.getElementById("add-staff");
  if (addStaffDiv.style.display === "none") {
    addStaffDiv.style.display = "flex";
  } else {
    addStaffDiv.style.display = "none";
  }
};

function submitStaffData() {
  let name = document.getElementById("staff-name").value;
  let email = document.getElementById("staff-email").value;
  let password = document.getElementById("staff-password").value;
  let re_password = document.getElementById("staff-re-password").value;

  let payload = { name, email, password, re_password };
  console.log(payload);
  let url = `${BASE_URL}/auth/register`;
  fetch(url, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      if (data.status !== "SUCCESS"){
        alert(data.message);
      }
      else {
        alert(data.message);
        window.location.href = "dashboard.html";
      }
    })
    .catch(error => {
      alert(error.message);
      console.error(error);
    })
};

function toggleIcon(iconId, divClass) {
  let icon = document.getElementById(iconId);
  let div = document.getElementById(divClass);

  if (icon.classList.contains('fa-circle-chevron-down')) {
    div.style.height = '60px';
    icon.classList.remove('fa-circle-chevron-down');
    icon.classList.add('fa-circle-chevron-up');
    let contentDiv = document.getElementById("content-div");
    if (contentDiv) {
      contentDiv.innerHTML = '';
    }
    let contentDiv2 = document.getElementById("content-div2");
    if (contentDiv2) {
      contentDiv2.innerHTML = '';
    }
  } else {
    div.style.height = 'auto';
    icon.classList.remove('fa-circle-chevron-up');
    icon.classList.add('fa-circle-chevron-down');
    divClass === "bookings" ?
      addAccommodationContent(div) :
      addPickupsContent(div);
  }
};

function addPickupsContent(div) {
  let url = `${BASE_URL}/services/booking`;
  fetch(url, { method: "GET", headers: { 'Content-Type': 'application/json' }, })
    .then(response => response.json())
    .then(function ({ data: data }) {
      let content = document.getElementById('content-div');
      for (let entry of data) {
        let contentDiv = document.createElement('div');
        contentDiv.classList.add('request')

        let resolvedTag = document.createElement('span');

        let resolved = document.createElement('p');
        resolved.textContent = `Resolved: ${entry.resolved}`;

        let resolvedIcon = document.createElement('span');
        resolvedIcon.classList.add('resolved-icon');
        resolvedIcon.classList.add(entry.resolved ? 'true' : 'false');

        resolvedTag.classList.add("resolved");
        resolvedTag.appendChild(resolved);
        resolvedTag.appendChild(resolvedIcon);

        let name = document.createElement('p');
        name.textContent = `Name: ${entry.name}`;

        let email = document.createElement('p');
        email.textContent = "Email: " + entry.email;

        let phone = document.createElement('p');
        phone.textContent = "Phone: " + entry.phone;

        let school = document.createElement('p');
        school.textContent = "School: " + entry.school;

        let airport = document.createElement('p');
        airport.textContent = "Airport: " + entry.airport_name;

        let pickupDate = document.createElement('p');
        pickupDate.textContent = `Pickup Date: ${dateFormatter(entry.pickup_date)}`;

        let destination = document.createElement('p');
        destination.textContent = `Destination: ${entry.destination}`;

        let flightNumber = document.createElement('p');
        flightNumber.textContent = "Flight Number: " + entry.flight_number;

        let lastElement = document.createElement('span');
        lastElement.classList.add("lastElement");

        let passengers = document.createElement('p');
        passengers.textContent = "Passengers: " + entry.passengers;

        let resolveButton = document.createElement('button');
        resolveButton.classList.add("resolve-button");
        resolveButton.textContent = "resolve";

        lastElement.appendChild(passengers);
        lastElement.appendChild(resolveButton);

        contentDiv.appendChild(resolvedTag);
        contentDiv.appendChild(name);
        contentDiv.appendChild(email);
        contentDiv.appendChild(phone);
        contentDiv.appendChild(school);
        contentDiv.appendChild(airport);
        contentDiv.appendChild(destination);
        contentDiv.appendChild(pickupDate);
        contentDiv.appendChild(flightNumber);
        contentDiv.appendChild(lastElement);

        content.appendChild(contentDiv);
      }

      div.appendChild(content);
    })
    .catch((error) => console.log("error: ", error));
};

function addAccommodationContent(div) {
  let url = `${BASE_URL}/services/accommodation`;
  fetch(url, { method: "GET", headers: { 'Content-Type': 'application/json' }, })
    .then(response => response.json())
    .then(function ({ data: data }) {

      let content = document.getElementById('content-div2');

      for (let entry of data) {
        let contentDiv = document.createElement('div');
        contentDiv.classList.add('request')

        let resolvedTag = document.createElement('span');

        let resolved = document.createElement('p');
        resolved.textContent = `Resolved: ${entry.resolved}`;

        let resolvedIcon = document.createElement('span');
        resolvedIcon.classList.add('resolved-icon');
        resolvedIcon.classList.add(entry.resolved ? 'true' : 'false');

        resolvedTag.classList.add("resolved");
        resolvedTag.appendChild(resolved);
        resolvedTag.appendChild(resolvedIcon);

        let name = document.createElement('p');
        name.textContent = `Name: ${entry.name}`;

        let email = document.createElement('p');
        email.textContent = "Email: " + entry.email;

        let phone = document.createElement('p');
        phone.textContent = "Phone: " + entry.phone;

        let idealAccommodation = document.createElement('p');
        idealAccommodation.textContent = "Ideal Accommodation: " + entry.ideal_accommodation;

        let priceRange = document.createElement('p');
        priceRange.textContent = "Price Range: $" + entry.price_range;

        let lastElement = document.createElement('span');
        lastElement.classList.add("lastElement");

        let location = document.createElement('p');
        location.textContent = "Location: " + entry.location;

        let resolveButton = document.createElement('button');
        resolveButton.classList.add("resolve-button");
        resolveButton.textContent = "resolve";

        lastElement.appendChild(location);
        entry.resolved ? "" : lastElement.appendChild(resolveButton);

        contentDiv.appendChild(resolvedTag);
        contentDiv.appendChild(name);
        contentDiv.appendChild(email);
        contentDiv.appendChild(phone);
        contentDiv.appendChild(idealAccommodation);
        contentDiv.appendChild(priceRange);
        contentDiv.appendChild(lastElement);

        content.appendChild(contentDiv);
      }

      div.appendChild(content);
    })
    .catch((error) => console.log("error: ", error));
};

function dateFormatter(dateStr) {
  let date = new Date(dateStr);

  let options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  };

  let formatter = new Intl.DateTimeFormat('en', options);
  let formattedDate = formatter.format(date);

  return formattedDate;
}

function getData() { }