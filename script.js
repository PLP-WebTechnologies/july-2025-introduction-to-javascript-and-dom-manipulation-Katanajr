//Part 1: JavaScript Basics
let userName = prompt("Enter your name:"); // variable declaration
let userAge = prompt("Enter your age:");

// Conditional check
if (userAge >= 18) {
  document.getElementById("greeting").textContent = `Hello ${userName}, you are an adult! ✅`;
} else {
  document.getElementById("greeting").textContent = `Hi ${userName}, you are still young! 🌱`;
}

// Part 2: Functions

// Function 1: Calculate total
function calculateTotal(price, quantity) {
  return price * quantity;
}

function showTotal() {
  let total = calculateTotal(200, 3); // Example values
  document.getElementById("total").textContent = `The total is: Ksh ${total}`;
}

// Function 2: Format greeting
function formatGreeting(name) {
  return `Welcome, ${name}! Enjoy coding 🚀`;
}
console.log(formatGreeting(userName)); // prints to console

// Part 3: Loops
// Loop 1: For loop
function showNumbers() {
  let list = document.getElementById("numbersList");
  list.innerHTML = ""; // clear old numbers
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = `Number: ${i}`;
    list.appendChild(li);
  }
}

// Loop 2: While loop
let countdown = 3;
while (countdown > 0) {
  console.log("Countdown:", countdown);
  countdown--;
}

// Part 4: DOM Manipulation
let toggleBtn = document.getElementById("toggleBtn");
let message = document.getElementById("message");

toggleBtn.addEventListener("click", function () {
  if (message.style.display === "none") {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
});

// Extra DOM interaction: Create element dynamically
let newPara = document.createElement("p");
newPara.textContent = "This paragraph was added dynamically!";
document.body.appendChild(newPara);
