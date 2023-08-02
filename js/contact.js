document.getElementById("contact-us-btn").addEventListener("click", async (e) => {
  e.preventDefault();
  console.log("here");
  let name = document.getElementById("contact-us-name").value;
  let email = document.getElementById("contact-us-email").value;
  let message = document.getElementById("contact-us-message").value;

  let loadingIcon = document.getElementById('loading-icon');
  loadingIcon.style.display = "inline-block";

  let payload = { name, email, message };
  console.log(payload);
  // let BASE_URL = "http://localhost:4000";
  let BASE_URL = "https://studentlifebrisbane-api.onrender.com";
  let url = `${BASE_URL}/services/send-email`;
  
  fetch(url, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        alert("Failed to send");
        throw new Error("Failed to send");
      }
    })
    .then(responseData => {
      alert("Message sent. Someone will be in touch with you shortly");
      window.location.href = 'contact-us.html';
    })
    .catch(error => alert(error.message));
});