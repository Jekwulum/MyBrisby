let BASE_URL = "https://studentlifebrisbane-api.onrender.com";
function sendData() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('tel').value;
  let gender = document.getElementById('gender-port-select').value;
  let school = document.getElementById('school_name').value;
  let airport_name = document.getElementById('entry-port-select').value;
  let destination = document.getElementById('destination').value;
  let pickup_date = document.getElementById('date').value;
  let flight_number = document.getElementById('flight_number').value;
  let passengers = Number(document.getElementById('total_passengers').textContent);

  let loadingIcon = document.getElementById('loading-icon');

  if (!name) {
    alert("name cannot be blank");
  }
  else if (!validateEmail(email)) {
    alert('Invalid email');
  }
  else {
    loadingIcon.style.display = "inline-block";
    let payload = { name, email, phone, gender, school, airport_name, destination, pickup_date, flight_number, passengers };
    console.log(payload)
    let url = `${BASE_URL}/services/booking`;

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
          alert("Request sent. Someone will be in touch with you shortly");
          window.location.href = 'pickup.html';
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