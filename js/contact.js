document.getElementById("contact-us-btn").addEventListener("click", async (e) => {
  e.preventDefault();
  console.log("here");
  let name = document.getElementById("contact-us-name");
  let email = document.getElementById("contact-us-email");
  let message = document.getElementById("contact-us-message");


  Email.send({
    SecureToken: "b85a1106-d346-4835-97ac-b22b744fa8a3",
    To: 'charlesnwoye2@gmail.com',
    From: "charlesnwoye2@gmail.com",
    Subject: `Website Email from ${name}`,
    Body: `${message} <br> My email: ${email}`
  }).then(
    message => {
      alert("message sent!")
      console.log(message);
      location.reload();
    }
  );
  // let payload = { name, email, message };
  // let BASE_URL = "localhost:4000";
  // let url = `${BASE_URL}/services/send-email`;
  // fetch(url, {
  //   method: "POST",
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(payload)
  // })
  //   .then((response) => {
  //     if (response.ok) {
  //       return response.json();
  //     } else {
  //       throw new Error("Failed to send");
  //     }
  //   })
  //   .then(responseData => {
  //     alert(responseData.message);
  //   })
  //   .catch(error => alert(error.message));
});