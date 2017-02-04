var medAnimals = ["tortise", "alligator", "iguana", "turtle", "crocodile", "chimpanzee", "shrimp", "beluga", "shark", "emu", "wallaby", "rabbit", "raven", "pigeon", "narwhal", "lobster", "rhino", "elephant", "panda", "penguin", "chicken", "hawk", "grizzly", "koala", "cobra", "asp", "bear", "python", "capybara", "earthworm", "salmon", "kangaroo", "tiger", "dolphin", "hyena", "giraffe", "sparrow", "hippopotamus", "caribou", "magpie", "swordfish", "kingfisher", "kookaburra", "wombat", "vulture", "dingo", "zebra", "okapi", "moose", "mouse", "gazelle", "sandpiper", "panther", "ibis", "ibex", "lynx", "bobcat", "leopard", "turkey", "jellyfish", "puffin", "octopus", "rattlesnake", "cassowary", "zooplankton", "krill", "osprey", "mongoose", "ferret", "salamander", "scarab", "viper", "starling", "wren", "pheasant", "donkey", "mule", "horse", "scorpion", "antelope", "kiwi", "platypuss", "flamingo", "possum", "partridge", "cockatoo", "cockatiel", "armadillo", "aardwolf", "aardvark", "shrike", "killdeer", "cormorant", "bluejay", "yellowjacket", "snapper", "dragonfly", "ostrich", "lamprey", "meerkat", "gnu"];

var pick =6; /*(Math.floor(Math.random()*101));*/
console.log(medAnimals[pick]);
var word = medAnimals[pick];


var win = 0;
var chances = 14;
var hangman = 0;

var pastGuess = [];
var badGuess = [];
var spaces = word.length;

/*document.write(word.indexOf("e"));*/
document.onkeyup=function(){
	var guess = event.key;
	var isCorrect = false;
	if (pastGuess.indexOf(guess)>=0) {
			alert("You have already picked that letter.")
	} else {
		pastGuess.push(guess);
		console.log(pastGuess);

		//Loop through word to check if guess matches.
		for (var i = 0; i < word.length; i++) {
		 var letter = word[i]
		 console.log(guess + " " + letter);
		 if(guess===letter){ /*This if function is still part of the for loop.*/
		 	console.log("That's right!");
		 	isCorrect = true;
		 }
		 console.log(letter);
		}
		console.log("isCorrect"+ isCorrect);
		
		if (isCorrect===true) {
			console.log("You got it!");
			spaces--;
		} else {
			console.log("That's wrong!")
			badGuess.push(guess);
			console.log(badGuess);
			chances--;
			hangman++;
		}
		}
	/*}*/
	var html = "<img class='img-responsive hangman' src='assets/images/progression/hangman" + hangman + ".png' width='455' height='230'" + 
	"<p>Wins: " + win + "</p>" + 
	"<p>Chances: " + chances + "</p>" +
	"<p>Wrong Letters: " + badGuess + "</p>"


	document.querySelector(".playarea").innerHTML = html;
}