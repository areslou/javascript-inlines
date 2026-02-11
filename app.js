const button     = document.getElementById("myButton");
const messageBox = document.getElementById("messageBox");
const clickCount = document.getElementById("clickCount");
const dynamicMsg = document.getElementById("dynamicMsg");
const container  = document.querySelector(".container");

let count = 0;

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

const comboWrap = document.createElement("div");
comboWrap.className = "combo-bar-wrap";
const comboBar = document.createElement("div");
comboBar.className = "combo-bar";
comboWrap.appendChild(comboBar);

button.addEventListener("click", function () {

  if (count === 0) {
    alert("Button was clicked!\n\nWelcome to the Neon Arcade JS Demo, LBYCPG3!");
  }

  count = count + 1;

  clickCount.textContent = count;

  clickCount.style.transform = "scale(1.5)";
  setTimeout(() => { clickCount.style.transform = "scale(1)"; }, 150);

  button.classList.toggle("active");

  if (button.classList.contains("active")) {
    button.textContent = "[ HIDE MESSAGE ]";
  } else {
    button.textContent = "[ CLICK ME! ]";
  }

  if (!messageBox.querySelector(".combo-bar-wrap")) {
    messageBox.appendChild(comboWrap);
  }
  messageBox.classList.toggle("show");

  dynamicMsg.textContent = messages[(count - 1) % messages.length];

  const pct = Math.min((count / 10) * 100, 100);
  comboBar.style.width = pct + "%";

  container.classList.remove("shake");
  void container.offsetWidth;
  container.classList.add("shake");

  if (count % 5 === 0) {
    clickCount.style.color = "#ff00aa";
    clickCount.style.textShadow = "0 0 12px #ff00aa";
    setTimeout(() => {
      clickCount.style.color = "";
      clickCount.style.textShadow = "";
    }, 400);
  }

});

console.log("%c[ LBYCPG3 ] JavaScript is connected and ready!", "color:#c8ff00;font-family:monospace;font-weight:bold;");
console.log("Experiments: A=button color, B=dynamic messages, C=first-click alert, D=glitch+combo+shake");
