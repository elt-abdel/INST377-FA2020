// Does js load?
console.log("hello lab 5");

// Add a margin of 10px to the right side all buttons
const allButtons = document.querySelectorAll("button");
allButtons.forEach(btn => {
  btn.style.marginRight = "10px";
});

// Change the width limit on your checkboxes from 80 to 95px
const myChex = document.querySelectorAll(".flex-inner li");
myChex.forEach(check => {
  check.style.width = "95px";
});

// Add a classname selector of .checkbox-list-label to the element containing "Age" from lab 4
const checkContainer = document.querySelector("li p");
checkContainer.className = "checkbox-list-label";

// Add a new button to your form.
const myButtons = document.querySelector(".buttons");
const myBtn = document.createElement("button");
myBtn.innerText = "Activate";
myBtn.setAttribute("type", "button");
myBtn.setAttribute("id", "activate");
myBtn.setAttribute("name", "activate");
myBtn.setAttribute("onclick", "testFunction()");
myButtons.append(myBtn);
