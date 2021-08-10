// alert("Working");

// Event Listener on 1 button (or rather 1st button)
// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
// 	alert("I got Clicked");
// }



// Add Event Listener to all buttons_______________________________________

// many people use anonymous function as follows ... (the same function without the name).

// for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
// 	document.querySelectorAll("button")[i].addEventListener("click", handleClick);
// }

// Function  to check which character is pressed on the keyboard
function makeSound(keyValue){
	switch (keyValue) {
			case "w":
				var tom1 = new Audio('sounds/tom-1.mp3');
				tom1.play();
				break;
			case "a":
				var tom2 = new Audio('sounds/tom-2.mp3');
				tom2.play();
				break;
			case "s":
				var tom3 = new Audio('sounds/tom-3.mp3');
				tom3.play();
				break;
			case "d":
				var tom4 = new Audio('sounds/tom-4.mp3');
				tom4.play();
				break;
			case "j":
				var snare = new Audio('sounds/snare.mp3');
				snare.play();
				break;
			case "k":
				var crash = new Audio('sounds/crash.mp3');
				crash.play();
				break;
			case "l":
				var kick = new Audio('sounds/kick-bass.mp3');
				kick.play();
				break;
			default:
				break;
		}
}

function buttonAnimation(key){
	var activeButton = document.querySelector("." + key);
	activeButton.classList.add("pressed");

	setTimeout(function() {
		activeButton.classList.remove("pressed");
	} , 100);
}


// Detecting Buttom Press
for(var i = 0; i < 7; i++){
	document.querySelectorAll("button")[i].addEventListener("click",function () {
		var buttonText = this.innerText;

		makeSound(buttonText);
		buttonAnimation(buttonText);

	});
}


// Detecting Keyboard key press
document.addEventListener("keydown" , function (event) {
	makeSound(event.key);
	buttonAnimation(event.key);
})


// callback functions are passed functions to another function that are called when certain condition is meet eg click or keydown.





