let pwInput = document.querySelector("#pw");
let pwConfirm = document.querySelector("#confirm-pw");
let letter = document.querySelector("#letter");
let capital = document.querySelector("#capital");
let number = document.querySelector("#number");
let length = document.querySelector("#length");

// Show the message box when user clicks on pw field
pwInput.onfocus = function () {
  document.querySelector("#message").style.display = "block";
};

// Hide the message box when user clicks outside of pw field
pwInput.onblur = function () {
  document.querySelector("#message").style.display = "none";
};

// When the user starts to type something inside the pw field
pwInput.addEventListener("keyup", function () {
  validateLowerCaseLetters();
  validateUpperCaseLetters();
  validateNumbers();
  validateLength();
});

// Function to validate lowercase letters
function validateLowerCaseLetters() {
  let lowerCaseLetters = /[a-z]/g;
  if (pwInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
}

// Function to validate capital letters
function validateUpperCaseLetters() {
  let upperCaseLetters = /[A-Z]/g;
  if (pwInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }
}

// Function to validate numbers
function validateNumbers() {
  let numbers = /[0-9]/g;
  if (pwInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
}

// Function to validate length
function validateLength() {
  if (pwInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

// Function to check whether both passwords are identical
function confirmPassword() {
  if (pwInput.value != pwConfirm.value) {
    alert("Passwords do not match");
  } else if (pwInput.value == "" || pwConfirm.value == "") {
    alert("Please fill out both password fields");
  } else {
    alert("Passwords match");
  }
}
