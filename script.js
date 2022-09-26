// Time to script!
console.log("Scripting...");
// on submit click
// get password 1 field value
// get password 2 field value
// compare password 1 and 2
// if passwords do not match
// show some kind of error to the user & prevent form submit

const createAccBtn = document.getElementById("create-Acc-Btn");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");
const error = document.getElementById("error");
 

function crosscheckPasswords (e) {
    const message = [];
    if (password.value !== confirmPassword.value) {
        message.push('Passwords do not match');
}
if(message.length > 0) {
    e.preventDefault();
    error.innerText = message;
}}
createAccBtn.addEventListener("click", crosscheckPasswords)