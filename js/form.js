const ampmButton = document.getElementById("ampm-button");
const dropDownList = document.getElementById("dropdown-list");
const arrow = document.querySelector(".arrow");

const ampmValue = document.getElementById("ampm-value"); // span AM/PM
const hiddenInput = document.getElementById("ampm"); // hidden input
const listItems = document.querySelectorAll(".dropdown__list-item"); // 2 dropdown items of AM / PM

ampmButton.addEventListener("click", () => {
  console.log("Dropdown button clicked");
  dropDownList.classList.toggle("show");
  arrow.classList.toggle("flip");
});

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(`${item.dataset.value} clicked`); // dataset gets data- attribute
    const value = item.dataset.value;

    ampmValue.textContent = value;
    hiddenInput.value = value;
    dropDownList.classList.remove("show");
    arrow.classList.remove("flip");
  });
});
