// i. 
var mainContent = document.getElementById("main-content");

// ii. 
var childElements = mainContent.children;
console.log(childElements);

// iii. 
var renderElements = document.getElementsByClassName("render");
for (var i = 0; i < renderElements.length; i++) {
  console.log(renderElements[i].innerHTML);
}

// iv. 
var firstNameInput = document.getElementById("first-name");
firstNameInput.value = "Atrooba";

// v. 
var lastNameInput = document.getElementById("last-name");
lastNameInput.value = "Arif";

var emailInput = document.getElementById("email");
emailInput.value = "atroobaarif2003@gmail.com";
