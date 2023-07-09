window.addEventListener("DOMContentLoaded", () => {
  let token = sessionStorage.getItem("token");

  // if (!token) {
  //   window.location.href = 'index.html';
  // }
});

function toggleIcon(iconId, divClass) {
  let icon = document.getElementById(iconId);
  let div = document.getElementById(divClass);

  if (icon.classList.contains('fa-circle-chevron-down')) {
    div.style.height = '90px';
    icon.classList.remove('fa-circle-chevron-down');
    icon.classList.add('fa-circle-chevron-up');
  } else {
    div.style.height = 'auto';
    icon.classList.remove('fa-circle-chevron-up');
    icon.classList.add('fa-circle-chevron-down');
  }
};