let BASE_URL = "https://studentlifebrisbane-api.onrender.com";
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

  if (!name) {
    alert("name cannot be blank");
  }
  else if (!validateEmail(email)) {
    alert('Invalid email');
  }
  else {
    let payload = { name, email, phone, ideal_accommodation, gender, price_range, location };
    let url = `${BASE_URL}/services/accommodation`;
    // console.log(payload);
    fetch(url, {
      method: 'POST',
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
        }
      })
      .catch(error => {
        alert(error.message);
      })
  }
};

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
