welcomeMessage();

function welcomeMessage() {
    // Prompt the user for their name
    let userResponse = prompt("What is your name?");

    // If userResponse is null or empty, set a default name
    if (userResponse === null || userResponse.trim() === "") {
        userResponse = "Guest";
    }

    // Display a welcome message on the webpage in the element with id "welcome-speech"
    document.getElementById("welcome-speech").innerText = "Welcome to Silvia's Portfolio, " + userResponse + "!";
    console.log(userResponse);
}

function validateForm() {
    // Get the value of the input field with id "name-input"
    let nameInput = document.getElementById("name-input").value;