// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");
// var items = document.getElementsByTagName("li");

// function inputLength() {
// 	return input.value.length;
// }

// function createListElement() {
// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value));
// 	ul.appendChild(li);
// 	input.value = "";
// }

// function addListAfterClick() {
// 	if (inputLength() > 0) {
// 		createListElement();
// 	}
// }

// function addListAfterKeydown(event) {
// 	if (inputLength() > 0 && event.key === "Enter") {
// 		createListElement();
// 	}
// }

// var deleteButton = document.createElement("button");
// deleteButton.textContent = "Delete";
// deleteButton.className = "delete";
// li.appendChild(deleteButton);

// deleteButton.addEventListener("click", function(){
// 	li.classList.toggle("done");
// })

// ul.addEventListener("click", function(event) {
// 	if (event.target.tagName === "BUTTON") {
// 		var li = event.target.parentElement;
// 		li.classList.toggle("done");
// 	}
// });

// button.addEventListener("click", addListAfterClick);

// input.addEventListener("keydown", addListAfterKeydown);

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));

    // Create the "Delete" button
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete";

    // Add a click event listener to the "Delete" button
    deleteButton.addEventListener("click", function () {
        li.classList.toggle("done");
    });

    // Append the "Delete" button to the list item
    li.appendChild(deleteButton);

    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeydown(event) {
    if (inputLength() > 0 && event.key === "Enter") {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keydown", addListAfterKeydown);