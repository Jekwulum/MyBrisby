let BASE_URL = "https://studentlifebrisbane-api.onrender.com";
// let BASE_URL = "http://localhost:4000"
let genderSelect = document.querySelector(".select-gender");

let genders = ['Male', 'Female', 'other'];
genders.forEach(gender => {
  const option = document.createElement("option");
  option.value = gender;
  option.textContent = gender;
  genderSelect.appendChild(option);
});

function sendData() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('tel').value;
  let ideal_accommodation = document.getElementById('accommodation').value;
  let gender = document.getElementById('gender').value;
  let price_range = document.getElementById('price-range').value;
  let location = document.getElementById('suburb-select').value;

  let loadingIcon = document.getElementById('loading-icon');

  if (!name) {
    alert("name cannot be blank");
  }
  else if (!validateEmail(email)) {
    alert('Invalid email');
  }
  else {
    loadingIcon.style.display = "inline-block";
    let payload = { name, email, phone, ideal_accommodation, gender, price_range, location };
    // console.log(payload)
    let url = `${BASE_URL}/services/accommodation`;
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(response => response.json())
      .then((data) => {
        loadingIcon.style.display = "none";
        if (data.status !== "SUCCESS") {
          alert(data.message);
        }
        else {
          alert("Request sent. Someone will be in touch with you shortly");
          window.location.href = 'accomodation.html';
        }
      })
      .catch(error => {
        alert(error.message);
      });
  }
};

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regex (regular expression) - validates password -> has string, number and symbol
  return emailPattern.test(email);
}
