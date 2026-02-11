// MODIFIED EXTERNAL JAVASCRIPT FILE - app_modified.js
// This file contains MODIFIED behavior with custom experiments

// Step 1: Find the elements we want to work with
const button = document.getElementById("myButton");
const messageBox = document.getElementById("messageBox");
const clickCount = document.getElementById("clickCount");

// Step 2: Create a variable to keep track of clicks
let count = 0;

// Step 3: Add an event listener to the button
button.addEventListener("click", function () {
    // EXPERIMENT C: Add an alert when button is clicked
    if (count === 0) {
        alert('Button was clicked! Welcome to the interactive demo!');
    }
    
    // Increase the click counter by 1
    count = count + 1;

    // Update the number shown on the page
    clickCount.textContent = count;
    
    // EXPERIMENT D: Add pulse animation to the count
    clickCount.classList.add('pulse');
    setTimeout(() => {
        clickCount.classList.remove('pulse');
    }, 500);

    // Toggle the "active" class on the button
    button.classList.toggle("active");

    // Toggle the "show" class on the message box
    messageBox.classList.toggle("show");

    // EXPERIMENT B: Change the message text to custom message
    const customMessages = [
        "🎉 Awesome! You clicked " + count + " time(s)!",
        "🚀 Great job! Click count: " + count,
        "⭐ You're doing amazing! Clicks: " + count,
        "🎯 Perfect! Total clicks: " + count,
        "💪 Keep going! You've clicked " + count + " times!"
    ];
    
    // Get a message based on click count
    const messageIndex = (count - 1) % customMessages.length;
    const messageText = messageBox.querySelector('p:first-child');
    messageText.textContent = customMessages[messageIndex];

    // Change the button text based on whether message is showing
    if (messageBox.classList.contains("show")) {
        button.textContent = "Hide Message";
    } else {
        button.textContent = "Click Me Again!";
    }
    
    // EXPERIMENT D: Custom addition - Change background color based on clicks
    if (count >= 10) {
        document.body.style.background = 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)';
        if (count === 10) {
            alert('🏆 Congratulations! You reached 10 clicks! The background changed!');
        }
    }
});

// This message appears in the browser console (F12)
console.log("Modified JavaScript is connected and ready with custom experiments!");
console.log("Experiments included:");
console.log("A) Changed button color to purple");
console.log("B) Custom dynamic messages");
console.log("C) Alert on first click");
console.log("D) Pulse animation + background color change at 10 clicks");
