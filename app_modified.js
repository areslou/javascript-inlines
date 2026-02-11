
// Step 1: Find the elements we want to work with
const button     = document.getElementById("myButton");
const messageBox = document.getElementById("messageBox");
const clickCount = document.getElementById("clickCount");
const dynamicMsg = document.getElementById("dynamicMsg");
const container  = document.querySelector(".container");

// Step 2: Create a variable to keep track of clicks
let count = 0;

// EXPERIMENT B: rotating custom messages
const messages = [
  "> Signal acquired. JS is CONNECTED.",
  "> DOM manipulation confirmed!",
  "> Event listener fired successfully.",
  "> Hello LBYCPG3! Keep clicking...",
  "> JavaScript bridge: ONLINE.",
  "> You found a secret! (There isn't one.)",
  "> clickCount++ — no bugs detected.",
  "> addEventListener works flawlessly!",
  "> You're basically a developer now.",
  "> MAX COMBO! You cannot be stopped.",
];

// EXPERIMENT D: combo bar — inject it into messageBox once DOM is ready
const comboWrap = document.createElement("div");
comboWrap.className = "combo-bar-wrap";
const comboBar = document.createElement("div");
comboBar.className = "combo-bar";
comboWrap.appendChild(comboBar);

// Step 3: Add an event listener to the button
button.addEventListener("click", function () {

  // EXPERIMENT C: alert only on the very first click
  if (count === 0) {
    alert("Button was clicked!\n\nWelcome to the Neon Arcade JS Demo, LBYCPG3!");
  }

  // Increase the click counter by 1
  count = count + 1;

  // Update the number shown on the page
  clickCount.textContent = count;

  // Pop animation on counter
  clickCount.style.transform = "scale(1.5)";
  setTimeout(() => { clickCount.style.transform = "scale(1)"; }, 150);

  // Toggle the "active" class on the button (EXPERIMENT A colour kicks in via CSS)
  button.classList.toggle("active");

  // Update button label
  if (button.classList.contains("active")) {
    button.textContent = "[ HIDE MESSAGE ]";
  } else {
    button.textContent = "[ CLICK ME! ]";
  }

  // Toggle the "show" class on the message box
  if (!messageBox.querySelector(".combo-bar-wrap")) {
    messageBox.appendChild(comboWrap); // add combo bar the first time
  }
  messageBox.classList.toggle("show");

  // EXPERIMENT B: rotate through custom messages
  dynamicMsg.textContent = messages[(count - 1) % messages.length];

  // EXPERIMENT D: update combo meter (fills over 10 clicks)
  const pct = Math.min((count / 10) * 100, 100);
  comboBar.style.width = pct + "%";

  // EXPERIMENT D: screen shake on every click
  container.classList.remove("shake");
  void container.offsetWidth; // force reflow so animation restarts
  container.classList.add("shake");

  // EXPERIMENT D: glitch the count number briefly at milestones
  if (count % 5 === 0) {
    clickCount.style.color = "#ff00aa";
    clickCount.style.textShadow = "0 0 12px #ff00aa";
    setTimeout(() => {
      clickCount.style.color = "";
      clickCount.style.textShadow = "";
    }, 400);
  }

});

// This message appears in the browser console (F12)
console.log("%c[ LBYCPG3 ] JavaScript is connected and ready!", "color:#c8ff00;font-family:monospace;font-weight:bold;");
console.log("Experiments: A=button color, B=dynamic messages, C=first-click alert, D=glitch+combo+shake");