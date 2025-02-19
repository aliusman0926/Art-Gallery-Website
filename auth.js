document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");
    const logoutButton = document.getElementById("logout-button");

    // Hardcoded username and password
    const validUsername = "alius";
    const validPassword = "1234";

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === validUsername && password === validPassword) {
            document.cookie = "loggedIn=true; path=/"; // Set a cookie to track login status
            window.location.href = "index.html"; // Redirect to the home page
        } else {
            errorMessage.textContent = "Invalid username or password";
        }
    });

    logoutButton.addEventListener("click", function(event) {
        event.preventDefault();
        document.cookie = "loggedIn=; path=/";
        window.location.href = "login.html";
    });
});
