function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelectorAll(".close");

// launch modal events
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalCloseBtn.forEach((ele) => ele.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  window.scrollTo({ top: 0 });
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// validate form
function validate(e) {
  e.preventDefault();
  let form = e.target;
  for (let field of form.elements) {
    if (field.checkValidity()) {
      field.parentElement.setAttribute("data-error-visible", "false")
    } else {
      field.parentElement.setAttribute("data-error-visible", "true")
    }
  }
  if (form.checkValidity()) {
    validForm()
  }
}

//
function validForm() {
  var modal = document.querySelector(".modal-body")
  var height = modal.clientHeight
  document.getElementById("form").style.display = "none"
  if (window.innerWidth > 768) {
    modal.style.height = height + "px"
  }
  var thanks = document.querySelector(".thanks")
  thanks.style.display = "flex"
}
