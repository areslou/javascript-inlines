// EXTERNAL JAVASCRIPT FILE
// This file contains all the behavior (interactivity) for Task 3

// Step 1: Get references to the HTML elements
const button = document.getElementById("myButton");
const message = document.getElementById("message");

// Step 2: Add event listener to the button
button.addEventListener("click", () => {
    message.textContent = "Hello LBYCPG3! JavaScript is connected!";
});

// Log to console to confirm the script is loaded
console.log("External JavaScript file (script.js) is connected!");
