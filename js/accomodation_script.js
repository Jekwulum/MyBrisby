let genderSelect = document.querySelector(".select-gender");

let genders = ['Male', 'Female'];
genders.forEach(gender => {
  const option = document.createElement("option");
  option.value = gender;
  option.textContent = gender;
  genderSelect.appendChild(option);
});