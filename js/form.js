const ampmButton = document.getElementById("ampm-button");
const dropDownList = document.getElementById("dropdown-list");
const arrow = document.querySelector(".arrow");

const incrementBtn = document.getElementById("btn-increment");
const decrementBtn = document.getElementById("btn-decrement");
const numPeople = document.getElementById("people");

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

    // Update values
    ampmValue.textContent = value;
    hiddenInput.value = value;

    // Remove all checkmarks, add checkmark to clicked item with visibility -shown
    listItems.forEach((li) => li.classList.remove("selected"));
    item.classList.add("selected");

    // Reset Dropdown
    dropDownList.classList.remove("show");
    arrow.classList.remove("flip");
  });
});

incrementBtn.addEventListener("click", () => {
  console.log("increment");
  const currentNum = numPeople.value++;
  console.log(currentNum);
});

decrementBtn.addEventListener("click", () => {
  console.log("increment");
  const currentNum = numPeople.value--;
  console.log(currentNum);
});
