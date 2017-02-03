var myHeading = document.querySelector('h1');
myHeading.textContent = "Hello World!";


var icecream = "chocolate";

if (icecream === "chocolate"){
	alert("Yay the icecream is chocolate");
}	else {
	alert("Well I'm not even gonna consider this");
}

function multiply(num1, num2){
	var result = num1 * num2;
	return result;
	console.log(result); 
}

multiply(4, 7)




var myimage = document.querySelector('img');

myimage.onclick = function(){
	var mysrc = myimage.getAttribute('src');
	if(mysrc === 'images/cow1.jpg'){
		myimage.setAttribute('src', 'images/cow2.jpg');
	}	else {
		myimage.setAttribute('src', 'images/cow1.jpg');
	}
}


var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName () {
	var myName = prompt("Please enter your name");
	localStorage.setItem("name", myName);
	myHeading.textContent ="mozilla blah blah blah" + myName;
}


if(!localStorage.getItem("name")) {
	setUserName();
} else {
	var storedName = localStorage.getItem("name");
	myHeading.textContent = "Mozilla is cool, " + storedName;
}	

