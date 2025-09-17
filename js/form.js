const ampmButton = document.getElementById("ampm-button");
const dropDownList = document.getElementById("dropdown-list");
const arrow = document.querySelector(".arrow");

const name = document.getElementById("name");
const email = document.getElementById("email");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

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

// RESET INPUTS
window.addEventListener("DOMContentLoaded", function () {
  name.value = "";
  email.value = "";
  day.value = "";
  month.value = "";
  year.value = "";
});

//CHECK INPUTS
function checkInputs() {
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const dayValue = day.value.trim();
  const monthValue = month.value.trim();
  const yearValue = year.value.trim();
  console.log(dayValue, monthValue, yearValue);

  if (nameValue === "") {
    console.error("Name field cannot be empty");
    setErrorFor(name);
  } else {
    console.log("Success");
    setSuccessFor(name);
  }

  if (!isEmail(emailValue)) {
    console.error("Email field cannot be empty");
    setErrorFor(email);
  } else {
    console.log("Success");
    setSuccessFor(email);
  }

  if (!isDay(dayValue) || !isMonth(monthValue) || !isYear(yearValue)) {
    console.error("One of the dates does not have the correct format");
    setFieldErrorFor();
  }
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  const errorDropdown = formControl.querySelector(".error-dropdown");
  if (errorDropdown) {
    errorDropdown.classList.remove("active");
  }
  input.classList.remove("error");
  input.classList.add("success");
}

function setErrorFor(input) {
  const formControl = input.parentElement;
  const errorDropdown = formControl.querySelector(".error-dropdown");
  errorDropdown.classList.add("active");
  input.classList.remove("sucess");
  input.classList.add("error");
}
// REGEX

function isDay(value) {
  return /^(0[1-9]|[12][0-9]|3[01])$/.test(value);
}

function isMonth(value) {
  return /(0[1-9]|1[0-2])$/.test(value);
}

function isYear(value) {
  return /(20[0-9]{2})$/.test(value);
}

function isHour(value) {
  return /(0?[1-9]|1[0-2])$/.test(value);
}

function isMinute(value) {
  return /([0-5][0-9])$/.test(value);
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
