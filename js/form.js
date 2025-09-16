const ampmButton = document.getElementById("ampm-button");
const dropDownList = document.getElementById("dropdown-list");
const arrow = document.querySelector(".arrow");

const name = document.getElementById("name");
const email = document.getElementById("email");

const incrementBtn = document.getElementById("btn-increment");
const decrementBtn = document.getElementById("btn-decrement");
const numPeople = document.getElementById("people");

const ampmValue = document.getElementById("ampm-value"); // span AM/PM
const hiddenInput = document.getElementById("ampm"); // hidden input
const listItems = document.querySelectorAll(".dropdown__list-item"); // 2 dropdown items of AM / PM

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

//AMPM Dropdown
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
  numPeople.value++;
});

decrementBtn.addEventListener("click", () => {
  if (numPeople.value < 2) return;
  numPeople.value--;
});

// CHECK AND RESET INPUTS
window.addEventListener("DOMContentLoaded", function () {
  name.value = "";
  email.value = "";
});

function checkInputs() {
  console.log("Checking inputs");
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();

  if (nameValue === "") {
    console.log("Field cannot be empty");
    setErrorFor(name);
  } else {
    console.log("Success");
    setSuccessFor(name);
  }
}

function setSuccessFor(input) {
  console.log(`Setting success for ${input}`);
  input.style.color = "#25293A";
  input.style.borderColor = "#25293A";
}

function setErrorFor(input) {
  console.log(`Setting error for ${input}`);
  input.style.color = "#F05B5B";
  input.style.borderColor = "#F05B5B";
}
// REGEX

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function isPhoneNumber(phoneNumber) {
  return /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(phoneNumber);
}
