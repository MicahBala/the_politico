"use strict";

// Select DOM elements
let signupTab = document.querySelector(".create");
let loginTab = document.querySelector(".login");
let confirmInput = document.querySelector(".hide");
let btnSubmit = document.querySelector(".btnSubmit");
let passwordReset = document.querySelector(".pw-reset");

let signUpActive = true;

// Default appearance for unregistered user
signupTab.classList.add("darkBg");
loginTab.classList.add("lightBg");
passwordReset.setAttribute("style", "display: none");

// Event listeners
loginTab.addEventListener("click", () => {
  if (signUpActive === true) {
    signupTab.classList.remove("darkBg");
    loginTab.classList.remove("lightBg");

    signupTab.classList.add("lightBg");
    loginTab.classList.add("darkBg");

    btnSubmit.innerText = "Log in";
    confirmInput.setAttribute("style", "display: none");
    passwordReset.setAttribute("style", "display: flex");
  }
  signUpActive = false;
});

signupTab.addEventListener("click", () => {
  if (signUpActive === false) {
    signupTab.classList.add("darkBg");
    loginTab.classList.add("lightBg");

    signupTab.classList.remove("lightBg");
    loginTab.classList.remove("darkBg");

    btnSubmit.innerText = "Sign up";
    confirmInput.setAttribute("style", "display: block");
    passwordReset.setAttribute("style", "display: none");
  }
  signUpActive = true;
});
