let genderSelect = document.querySelector(".select-gender");

let genders = ['Male', 'Female', 'Non-Binary', 'Genderqueer', 'Genderfluid',
  'Agender', 'Bigender', 'Two-Spirit', 'Transgender', 'Cisgender', 'Demigender',
  'Neutrois', 'Androgynous', 'Pangender', 'Gender Nonconforming', 'Other'];
genders.forEach(gender => {
  const option = document.createElement("option");
  option.value = gender;
  option.textContent = gender;
  genderSelect.appendChild(option);
});