var word = "elephant";
var isRight = true;
var space = word.length;

var hidden = word.split("");

	document.querySelector("#hidden").innerHTML = "Word: " + hidden;

var spaces = " ";
    for (i=0; i<word.length; i++) {

      spaces = spaces + "_ "
    };

var blanks=spaces.split();
          document.querySelector('#shown').innerHTML = blanks;


var letter= "e";

if(isRight===true){
	var count = 0;
	var spot = [];
 	for (i=0; i<word.length; i++){
 		if(hidden[i].indexOf(letter) > -1){
 			count++;
 			console.log(i);
 			spot.push(i);
 			console.log(spot)
 			blanks = blanks + word[i];
 			console.log(blanks)
		 	document.getElementById("shown").innerHTML = blanks;
		 	space=space-count;
		 	console.log(space);
		 } else{
		 	blanks += "_";
		 }

 	}
 }