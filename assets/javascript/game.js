//Word Bank
var medAnimals = ["tortoise", "alligator", "iguana", "turtle",
"crocodile", "chimpanzee", "shrimp", "beluga", "shark", "emu",
"wallaby",  "rabbit", "raven", "pigeon", "narwhal", "lobster",
"rhino", "elephant", "panda", "penguin", "chicken", "hawk", "grizzly",
"koala", "cobra", "asp", "bear", "python", "capybara", "earthworm",
"salmon", "kangaroo", "tiger", "dolphin", "hyena", "giraffe",
"sparrow", "hippopotamus", "caribou", "magpie", "swordfish",
"kingfisher", "kookaburra", "wombat", "vulture", "dingo", "zebra",
"okapi", "moose", "mouse", "gazelle", "sandpiper", "panther", "ibis",
"ibex", "lynx", "bobcat", "leopard", "turkey", "jellyfish", "puffin",
"octopus", "rattlesnake", "cassowary", "zooplankton", "krill",
"osprey", "mongoose", "ferret", "salamander", "scarab", "viper",
"starling", "wren", "pheasant", "donkey", "mule", "horse", "scorpion",
"antelope", "kiwi", "platypuss", "flamingo", "possum", "partridge",
"cockatoo", "cockatiel", "armadillo", "aardwolf", "aardvark",
"shrike", "killdeer", "cormorant", "bluejay", "yellowjacket",
"snapper", "dragonfly", "ostrich", "lamprey", "meerkat", "gnu"];

//This needs to hold through multiple games 
var win = 0; 
var useable =["a","b","c","d","e","f","g", "h", "i", "j", "k", "l",
"m", "n",  "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y",
"z"];

window.onload = replay;

/*.onclick = replay;*/

//random word chosen
//This should reset every game
function replay(){
	var pick = (Math.floor(Math.random()*101));
	var chances = 14;
	var hangman = 0;
	var goodGuess = [];
	var pastGuess = [];
	var badGuess = [];
	console.log(medAnimals[pick]);
	var word = medAnimals[pick];
	var space = word.length; /*This triggers the win result*/
	var hidden = word.split();
	var spaces  = " ";
	    for (i=0; i<word.length; i++) {

	      spaces = spaces + "_ "
	    };

	var blanks=spaces.split();
	          document.querySelector('#shown').innerHTML = blanks;


 //starting on release of key
	document.onkeyup=function(){
		/*game.word;
		game.hangman;
		game.goodGuess;*/
		var guess = event.key;
		var isCorrect = false;

	//Checks that keys are valid for game purposes
		if(useable.indexOf(guess)<0){
			alert("You didn't pick a letter.")
		} else {
		if (pastGuess.indexOf(guess)>=0) {
				alert("You have already picked that letter.")
		} else {
			pastGuess.push(guess);
			console.log(pastGuess);

	//Loop through word to check if guess matches.
			for (var i = 0; i < word.length; i++) {
				var letter = word[i];
			console.log(guess + " " + letter);

				if(guess===letter){ /*This if function is still part of the for loop.*/
			 	console.log("That's right!");
			 	space--;
			 	isCorrect = true;
			 	goodGuess.push(guess);
			 	console.log(goodGuess);
				}
			 	console.log(letter);
			}
			console.log("isCorrect"+ isCorrect);
	//Positive result	
			if (isCorrect===true) {
				console.log("WORD: " + word);
				console.log("Past guess: " + pastGuess);
			 	for (var ctr=0; ctr < word.length; ctr++){
			 		console.log("Word[" + ctr + "]: " + word[ctr] + ", Word Length: " + word.length);
			 		console.log("Word[ctr]: " + word[ctr]);
			 		console.log("Index? " + pastGuess.indexOf(word[ctr]));
			 		if (pastGuess.indexOf(word[ctr]) > -1) {
			 			console.log("Match!");
			 			blanks[ctr] = word[ctr] + " ";
					} else{
			 			console.log("Mismatch");
					 	blanks[ctr] = "_ ";
					}
	                document.getElementById("shown").innerHTML = blanks;
			 	}
			} else {

	//Negative result
				console.log("That's wrong!")
				badGuess.push(guess);
				document.getElementById("bad").innerHTML = badGuess;
				chances--;
				document.getElementById("chances").innerHTML =  chances;
				hangman++;
				document.querySelector("#gallows").innerHTML = "<img class='img-responsive' src='assets/images/progression/hangman" + hangman + ".png' width='455' height='230'>";
				
			}
			}
		}

		//Change things in HTML according to result of loops.
		if (chances===0) {
			document.getElementById('boo').innerHTML = "<p class='h1 lead strong'>You Lose</p>";

		}

		if (space===0) {
			document.getElementById('boo').innerHTML = "<p class='h1 lead strong'>You Win</p>";
			
			win++;
			
			document.querySelector("#win").innerHTML= win;
			document.getElementById('pics').innerHTML="<img class='img-responsive' src='assets/images/" + 
			word + ".jpg' width='455' height='230'>";
		}	
	}
}





