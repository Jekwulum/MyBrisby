// let BASE_URL = "https://studentlifebrisbane-api.onrender.com";
let BASE_URL = "https://studentlifebrisbane-api.onrender.com";

window.addEventListener("DOMContentLoaded", () => {
  let token = sessionStorage.getItem("token");

  if (!token) {
    window.location.href = 'sign_in.html';
  }

  let url = `${BASE_URL}/auth/user`;
  fetch(url, {
    method: "GET",
    headers: { 'authorization': 'Bearer ' + token, 'Content-Type': 'application/json' }
  })
    .then((response) => {
      if (response.ok) {
        const loadingSection = document.getElementById('loading-section');
        loadingSection.style.display = "none";
        return response.json();
      }
      else {
        throw new Error("Authentication failed");
      }
    }).then(({ data: responseData }) => {
      let welcomeHeader = document.getElementById("welcome-header");
      welcomeHeader.textContent = `Welcome ${responseData.name}`;
    })
    .catch(error => reject(error.message))
});

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

  if (!name) {
    alert("name cannot be blank");
  } else if (!validateEmail(email)) {
    alert('Invalid email');
  } else if (!validatePassword(password)) {
    alert('Invalid password');
  } else if (password !== re_password) {
    alert("passwords do not match");
  } else {
    let payload = { name, email, password, re_password };
    let url = `${BASE_URL}/auth/register`;
    fetch(url, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(response => response.json())
      .then((data) => {
        if (data.status !== "SUCCESS") {
          alert(data.message);
        }
        else {
          alert(data.message);
          window.location.href = "dashboard.html";
        }
      })
      .catch(error => {
        alert(error.message);
      })
  }
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

        resolveButton.addEventListener("click", (e) => {
          url = `${url}/${entry._id}`;
          fetch(url, { method: "PATCH", headers: { 'Content-Type': 'application/json' } })
            .then(response => response.json())
            .then(function (data) {
              alert(data.message);
              window.location.href = 'dashboard.html';
            })
            .catch(error => alert(error.message));
        });

        lastElement.appendChild(passengers);
        entry.resolved ? "" : lastElement.appendChild(resolveButton);

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
    .catch((error) => alert(error.message));
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
        resolveButton.addEventListener("click", (e) => {
          url = `${url}/${entry._id}`;
          fetch(url, { method: "PATCH", headers: { 'Content-Type': 'application/json' } })
            .then(response => response.json())
            .then(function (data) {
              alert(data.message);
              window.location.href = 'dashboard.html';
            })
            .catch(error => alert(error.message));
        });

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
    .catch((error) => alert(error.message));
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
};

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function validatePassword(password) {
  const lengthPattern = /.{6,}/;  // At least 6 characters
  const symbolPattern = /[!@#$%^&*]/;  // Contains at least one symbol
  const uppercasePattern = /[A-Z]/;  // Contains at least one uppercase letter
  const numberPattern = /[0-9]/;  // Contains at least one number

  return (
    lengthPattern.test(password) &&
    symbolPattern.test(password) &&
    uppercasePattern.test(password) &&
    numberPattern.test(password)
  );
}