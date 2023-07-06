window.addEventListener("DOMContentLoaded", () => {
  let token = sessionStorage.getItem("token");

  if (!token) {
    window.location.href = 'index.html';
  }
});