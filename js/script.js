let firstName = document.querySelector(".input-first-name");
let lastName = document.querySelector(".input-last-name");
let email = document.querySelector(".input-email");
let password = document.querySelector(".input-password");
let button = document.querySelector(".btn");
let errorFirstName = document.querySelector(".error-first-name");
let errorLastName = document.querySelector(".error-last-name");
let errorEmail = document.querySelector(".error-email");
let errorPassword = document.querySelector(".error-password");


button.addEventListener("click", () => {
   let firstNameValue = firstName.value.trim();
   let lastNameValue = lastName.value.trim();
   let emailValue = email.value.trim();
   let passwordValue = password.value.trim();

   if (firstNameValue === "") {
      Errors(firstName, errorFirstName , "First name cannot be empty");
      
   } else {
      success(firstName, errorFirstName);
   }
   if (lastNameValue === "") {
      Errors(lastName, errorLastName , "Last name cannot be empty");
      
   } else {
      success(lastName, errorLastName);
   }
   if (emailValue === "") {
      Errors(email, errorEmail , "Email cannot be empty");

      
   } else if (!emailValue.includes("@")){
      email.setAttribute("placeholder", "example@email.com");
      Errors(email, errorEmail , "Email is not valid");
   }
   else {
      success(email, errorEmail);
   }
   if (passwordValue === "") {
      Errors(password, errorPassword , "Password cannot be empty");
      
   } else {
      success(password, errorPassword);
   }
})

function Errors(input, errorPlace, errorMessage) {
   input.parentElement.classList.add("input-box--error");
   input.classList.add("input-error");
   input.value = "";
   errorPlace.style.display = "block";
   errorPlace.innerHTML = errorMessage;  
}

function success(input, errorPlaceReset) {
   input.parentElement.classList.remove("input-box--error");
   input.classList.remove("input-error");
   input.value = "";
   errorPlaceReset.style.display = "none";
}