function toggleNav(){
  
  console.log("worlking");
  let topNav = document.getElementById("myTopnav");
  if (topNav.className === "topnav") topNav.className += "responsive"
  else topNav.className = "topnav"
};