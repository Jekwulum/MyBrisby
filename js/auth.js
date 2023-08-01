document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  authenticateUser(email, password)
    .then((token) => {
      sessionStorage.setItem("token", token);
      window.location.href = "dashboard.html";
    })
});

const authenticateUser = (email, password) => {
  
  return new Promise((resolve, reject) => {
    // call API
    // let BASE_URL = "http://localhost:4000";
    let BASE_URL = "https://studentlifebrisbane-api.onrender.com";
    let url = `${BASE_URL}/auth/login`;
    fetch(url, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({email, password})
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        else {
          throw new Error("Authentication failed");
        }
      })
      .then(responseData => {
        let token = responseData.access;
        resolve(token);
      })
      .catch(error => reject(error.message))
  });
};