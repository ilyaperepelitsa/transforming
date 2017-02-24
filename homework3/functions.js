function findWord() {
		if (document.getElementById("yourAnswer").value != ""){
			var entry = document.getElementById("yourAnswer").value;
			var regex = new RegExp("\\W" + entry + "\\W", "i");
			var resultsArray = [];
			for (var i = 0; i < alltexts.length; i++) {
				var mytext = " " + alltexts[i] + " ";
				var lineArray = mytext.split("\n");
				for (var j=0; j < lineArray.length;j++) {
					if (regex.test(" " + lineArray[j] + " ") == true) {
						resultsArray.push(lineArray[j].replace(RegExp(entry + "\\s", "i"),
						"<b>"	+ entry + " </b>" ));
						}
					}
				}
			printLeft(resultsArray);
		} else {
			printLeft("Oh please, I hate to ask but I beg you to type in some word or words");
		}
		}


function countThisWord() {
		if (document.getElementById("yourAnswer").value != ""){
			var entry = document.getElementById("yourAnswer").value;
			var regex = new RegExp("\\W" + entry + "\\W", "i");
			var count_lines = 0;
			for (var i = 0; i < alltexts.length; i++) {
				var mytext = " " + alltexts[i] + " ";
				var lineArray = mytext.split("\n");
				for (var j=0; j < lineArray.length;j++) {
					if (regex.test(" " + lineArray[j] + " ") == true) {
						count_lines += 1;
						}
					}
				}
			printLeft(count_lines);
		} else {
			printLeft("Oh please, I hate to ask but I beg you to type in some word or words");
		}
		}



function allTextWords() {
		if (document.getElementById("yourAnswer").value != ""){
			var entry = document.getElementById("yourAnswer").value;
			var regex = new RegExp("\\W" + entry + "\\W", "i");
			var resultsArray = [];
			var count_texts = 0;
			for (var i = 0; i < alltexts.length; i++) {
				var mytext = " " + alltexts[i] + " ";
				var lineArray = mytext.split("\n");
				for (var j=0; j < lineArray.length;j++) {
					if (regex.test(" " + lineArray[j] + " ") == true) {
						count_texts += 1;
						break;
						}
					}
				}
			var all_contain;
			if (count_texts == 5){
				all_contain = "yes";
			} else {
				all_contain = "no"
			}

			printLeft(all_contain);
		} else {
			printLeft("Oh please, I hate to ask but I beg you to type in some word or words");
		}
		}


function wordCountPerText() {
		if (document.getElementById("yourAnswer").value != ""){
			var entry = document.getElementById("yourAnswer").value;
			var regex = new RegExp("\\s" + entry + "\\s", "i");
			var resultsArray = [];
			var interm_result = []
			for (var i = 0; i < alltexts.length; i++) {
				var entry = []
				entry.push(textTitles[i] + ": ")
				var mytext = " " + alltexts[i] + " ";
				var lineArray = mytext.split("\n");
				word_count = 0
				for (var j=0; j < lineArray.length;j++) {
					if (regex.test(" " + lineArray[j] + " ") == true) {
						word_count ++ ;
						}
					}
				entry.push(word_count)
				interm_result.push(entry)
				}
				interm_result = interm_result.sort(compareSecondColumn)
				for (var i = 0; i < interm_result.length; i++){
					if(interm_result[i][1] != 0){
						resultsArray.push(interm_result[i][0] + interm_result[i][1]);
				} else {
						resultsArray.push(interm_result[i][0] + "This song didn't have what you were looking for")}
				}
			printLeft(resultsArray);
		} else {
			printLeft("Oh please, I hate to ask but I beg you to type in some word or words");
		}
		}




function mostPerText() {
	if (document.getElementById("yourAnswer").value != ""){
		var entry = document.getElementById("yourAnswer").value;
		var regex = new RegExp("\\s" + entry + "\\s", "i");
		var resultsArray = [];
		var interm_result = []
		for (var i = 0; i < alltexts.length; i++) {
			var item = []
			item.push(textTitles[i] + ": ")
			var mytext = " " + alltexts[i] + " ";
			var lineArray = mytext.split("\n");
			word_count = 0
			for (var j=0; j < lineArray.length; j++) {
				split_line = lineArray[j].split(RegExp("\\W"));
				for(var spl = 0; spl < split_line.length;spl ++){
					if (regex.test(" " + split_line[spl] + " ") == true) {
						word_count ++ ;
						}
					}
				}
			item.push(word_count)
			interm_result.push(item)
			}
			interm_result = interm_result.sort(compareSecondColumn)
			for (var i = 0; i < interm_result.length; i++){
				resultsArray.push(interm_result[i][0] + interm_result[i][1])}

		printLeft(resultsArray[0]);
	} else {
		printLeft("Oh please, I hate to ask but I beg you to type in some word or words");
	}
	}




function containingWords() {
var entry = document.getElementById("yourAnswer").value;
entry = entry.split(new RegExp("\\W", "i"));


var resultsArray = [];
for (var i = 0; i < alltexts.length; i++) {
	var mytext = alltexts[i];

	var lineArray = mytext.split("\n");
	for (var j=0; j < lineArray.length;j++) {
		var perfect_line_counter = 0;
		for (var multi = 0; multi < entry.length; multi ++){
			var regex = new RegExp("\\W" + entry[multi] + "\\W", "i");
			if (regex.test(" " + lineArray[j] + " ") == true){
				perfect_line_counter += 1;
				}

			}

		if (perfect_line_counter == entry.length){
			resultsArray.push(lineArray[j]);
			}
		}


	}
	for (arr = 0; arr < resultsArray.length; arr ++){
		for (var r = 0; r < entry.length; r ++){
			console.log(entry[r]);
			resultsArray[arr].replace("\\s" + RegExp(entry[r] + "\\s", "i"), "<b>"	+ entry[r] + " </b>" );
		}
	}
printLeft(resultsArray);
}
























function firstWord() {
var resultsArray = [];
for (var i = 0; i < alltexts.length; i++) {
	var mytext = alltexts[i];
	var lineArray = mytext.split("\n");
	for (var j=0; j < lineArray.length;j++) {
		var wordsArray = lineArray[j].split(" ");
		resultsArray.push(wordsArray[0]);
	}
}
printRight(resultsArray);
}


function lastWord() {
var resultsArray = [];
for (var i = 0; i < alltexts.length; i++) {
	var mytext = alltexts[i];
	var lineArray = mytext.split("\n");
	for (var j=0; j < lineArray.length;j++) {
		var wordsArray = lineArray[j].split(" ");
		resultsArray.push(wordsArray[wordsArray.length - 1]);
	}
}
printRight(resultsArray);
}


//
function randomLine() {
var resultsArray = [];
for (var i = 0; i < alltexts.length; i++) {
	var mytext = alltexts[i];
	var lineArray = mytext.split(RegExp("\\n{1,3}", "i"));
	var some_entry = [];
	some_entry.push("\<b\>" + textTitles[i] + "\<\/b\> : ");
	var lyrics = lineArray[Math.floor((Math.random() * lineArray.length))];
	if (lyrics != ""){
		some_entry += String(lyrics);
	} else {
		lyrics = lineArray[Math.floor((Math.random() * lineArray.length))];
		some_entry += String(lyrics);
	}

	resultsArray.push(some_entry);
	}

printRight(resultsArray);

}


function randomReverse() {
	var resultsArray = [];
	var index = Math.floor((Math.random() * alltexts.length));
	var lineArray = alltexts[index].split(RegExp("\\n{1,3}", "i"));
	var some_entry = [];
	some_entry.push("\<b\>" + textTitles[index] + "\<\/b\> : ");
	var lyrics = lineArray[Math.floor((Math.random() * lineArray.length))];
	if (lyrics != ""){
		some_entry += String(lyrics);
	} else {
		lyrics = lineArray[Math.floor((Math.random() * lineArray.length))];
		some_entry += String(lyrics);
	}
	resultsArray.push(some_entry);
	var hub_line = lyrics.split(RegExp("\\W", "i"));
	var reversed_line = [];
	var reversed_entry = "\<b\>" + textTitles[index] + "\<\/b\> : ";
	loop_length = hub_line.length;
	for (i = 0; i < loop_length; i++){
		var popped = hub_line.pop();
		reversed_entry += popped + " ";
	}
	resultsArray.push(reversed_entry);
	printRight(resultsArray);

}

function randomLongWord() {
	var resultsArray = [];
	var index = Math.floor((Math.random() * alltexts.length));
	var lineArray = alltexts[index].split(RegExp("\\n{1,3}", "i"));
	var some_entry = [];
	some_entry.push("\<b\>" + textTitles[index] + "\<\/b\> : ");
	var lyrics = lineArray[Math.floor((Math.random() * lineArray.length))];
	if (lyrics != ""){
		some_entry += String(lyrics);
	} else {
		lyrics = lineArray[Math.floor((Math.random() * lineArray.length))];
		some_entry += String(lyrics);
	}
	resultsArray.push(some_entry);

	var hub_line = lyrics.split(RegExp("\\W", "i"));

	var pair_list = [];
	// var reversed_entry = "\<b\>" + textTitles[index] + "\<\/b\> : ";
	console.log(hub_line.length);
	console.log(hub_line);
	for (count_longest = 0; count_longest < hub_line.length; count_longest += 1){
		var pair = [];
		pair.push(hub_line[count_longest]);
		pair.push(hub_line[count_longest].length);
		pair_list.push(pair);
		// console.log(pair_list);
		// reversed_entry += popped + " ";
	}

	pair_list = pair_list.sort(compareSecondColumn);

	for(i = 0; i < pair_list.length; i++){
		resultsArray.push("\<b\>" + pair_list[i][0] + "\<\/b\> : " + pair_list[i][1]);
	}

	printRight(resultsArray);

}


function longestText() {
	var resultsArray = [];
	var all_results = [];
	for (var i = 0; i < alltexts.length; i++) {
		// console.log(some_entry);
		var mytext = alltexts[i];
		var lineArray = mytext.split(RegExp("\\n{1,3}", "i"));
		var some_entry = [];
		some_entry.push("\<b\>" + textTitles[i] + "\<\/b\> ");

		// console.log(some_entry);
		var lyrics = [];
		for (n = 0; n < lineArray.length; n++){

			if (lineArray[n] != ""){
				lyrics += String(lineArray[n]);
			} else {
				continue;
			}

		}

		some_entry.push(lyrics.length);

		all_results.push(some_entry);

		}

	all_results = all_results.sort(compareSecondColumn);
	// console.log(all_results);

	for(i = 0; i < all_results.length; i++){
		resultsArray.push("\<b\>" + all_results[i][0] + "\<\/b\> : " + all_results[i][1]);
	}


	printRight(resultsArray);
}


function averageLineLength() {
	var resultsArray = [];
	var all_results = [];

	for (var i = 0; i < alltexts.length; i++) {

		var total_letters = 0;
		// console.log(some_entry);
		var mytext = alltexts[i];
		var lineArray = mytext.split(RegExp("\\n{1,3}", "i"));
		var total_lines = lineArray.length;
		var some_entry = [];
		some_entry.push("\<b\>" + textTitles[i] + "\<\/b\> ");

		// console.log(some_entry);
		var lyrics = [];
		for (n = 0; n < lineArray.length; n++){


			if (lineArray[n] != ""){
				lyrics += String(lineArray[n]);
				total_letters += (lineArray[n]).length;
			} else {
				continue;
			}

		}

		some_entry.push(total_letters/total_lines);

		all_results.push(some_entry);

		}

	all_results = all_results.sort(compareSecondColumn);
	// console.log(all_results);

	for(i = 0; i < all_results.length; i++){
		resultsArray.push("\<b\>" + all_results[i][0] + "\<\/b\> : " + all_results[i][1]);
	}


	printRight(resultsArray);
}




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


// stole it from here: http://stackoverflow.com/questions/16096872/how-to-sort-2-dimensional-array-by-column-value
function compareSecondColumn(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] > b[1]) ? -1 : 1;
    }
}
