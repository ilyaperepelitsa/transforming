

///THIS IS A SIMPLE FIND/WORD OF PHRASE FUNCTION
function findWord() {
//This gets what you entered in the input field
//And sets the "entry" variable
var entry = document.getElementById("yourAnswer").value;
//This sets the entry variable as a Regular Expression
//Regular Expression tell the program to look for patterns in a string of text
//Here is look for whatever you entered with a space other non-letter character of before and after it
//This isolates the word or phrase in the string
var regex = new RegExp("\\W" + entry+"\\W","i");
//This is an empty array the will be filled with all of the lines that contain the word
//Look in the inner loop where the push happens
var resultsArray = [];

//This is the for-loop that loops through the five texts
for (var i = 0; i < alltexts.length; i++) {
//for each text it makes a variable for the entire text
	var mytext = alltexts[i];
//it splits up poems by line (\n is a line break)
	var lineArray = mytext.split("\n");
//if you want to go by sentences use this, it splits up sentences by .
//if you use sentences, be sure to replace lineArray below with sentenceArray
	var sentenceArray = mytext.split(". ");
//now it loops through the lineArray and searches for the word
//yes, this is a loop inside a loop
//if you want it to search sentences, just change "lineArray" to "sentenceArray" below
	for (var j=0; j < lineArray.length;j++) {
	//this use the Regular expression test() method to see if the line contains the word or phrase
		if (regex.test(" " + lineArray[j] + " ") == true) {
		//if the test returns a "true" then it puts that line into the resultsArray
			resultsArray.push(lineArray[j]);
		}
	} //end of inner for loop
}//end of main for loop (it's gone through all of the texts)

//now all the results have been entered in resultsArray
//we send that array into the printLeft function
printLeft(resultsArray);
}

//This function pulls out all of the lines and prints out all of the first words of the lines
function firstWord() {
//Again, and empty resultsArray that will be filled during the for loop
//There will be times when you want a variable, like a "var counter=0" to go here
var resultsArray = [];
//This is the main loop. It loops through all five texts
for (var i = 0; i < alltexts.length; i++) {
//mytext is a variable the holds one of the text
	var mytext = alltexts[i];
//lineArray and sentenceArray split that text by line break or period
//you choose which to use, I have lineArray in the inner for loop
	var lineArray = mytext.split("\n");
	var sentenceArray = mytext.split(". ");
//This inner for loop, loops through each line
	for (var j=0; j < lineArray.length;j++) {
		//here the line is split up into words
		var wordsArray = lineArray[j].split(" ");
		//here the first word of the line / first [0] member of the array
		//is pushed into the results
		resultsArray.push(wordsArray[0]);
	}//end inner for-loop
}//end outer for loop

//send the result to printRight()
//because this function is for a right-hand side function
printRight(resultsArray);
}

//BELOW ARE THE printLeft() and printRight() functions
//DON'T TOUCH THEM. THEY CONTROL DISPLAYING THE RESULTS ON THE LEFT AND RIGHT HAND SIDE OF THE PAGE
function printLeft(results) {
var thestring = "";
if (results.constructor === Array) {
for (var i=0; i < results.length; i++) {
	thestring += results[i] + "<BR><BR>\n";
}
} else {
thestring = results;
}
document.getElementById("inputResults").innerHTML = thestring;
}

function printRight(results) {
var thestring = "";
if (results.constructor === Array) {
for (var i=0; i < results.length; i++) {
	thestring += results[i] + "<BR><BR>\n";
}
} else {
thestring = results;
}

document.getElementById("clickResults").innerHTML = thestring;
}
