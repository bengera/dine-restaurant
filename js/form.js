const ampmButton = document.getElementById("ampm-button");
const dropDownList = document.getElementById("dropdown-list");
const arrow = document.querySelector(".arrow");

ampmButton.addEventListener("click", () => {
  console.log("Dropdown button clicked");
  dropDownList.classList.toggle("show");
  arrow.classList.toggle("flip");
});
