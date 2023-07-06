document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  let email = document.getElementById("username");
  let password = document.getElementById("password");

  authenticateUser(email, password)
    .then((token) => {
      sessionStorage.setItem("token", token);
      window.location.href = "dashboard.html";
    })
    .catch(error => {
      console.error(error);
      alert("Invalid login credentials");
    });
});

const authenticateUser = (email, password) => {
  return new Promise((resolve, reject) => {
    // call API
    let BASE_URL = "localhost:4000";
    let url = `${BASE_URL}/auth/login`;
    fetch(url, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
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