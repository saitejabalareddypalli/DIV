
const button = document.getElementById("welcomeBtn");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    message.textContent = "Hi! Your website is working.";
});
