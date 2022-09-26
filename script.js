const createAccBtn = document.getElementById("create-Acc-Btn");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");
const error = document.getElementById("error");

function crosscheckPasswords(e) {
  const message = [];
  if (password.value !== confirmPassword.value) {
    message.push("Passwords do not match!");
  }
  if (message.length > 0) {
    e.preventDefault();
    error.innerText = message;
  }
}
createAccBtn.addEventListener("click", crosscheckPasswords);
