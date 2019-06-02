
// array of words
var words = ["hotline bling", "controlla", "one dance", "energy", "childs play"];
// word chosen from array
var word = "";
// represents individual letters in word
var lettersInWord = [];
// spaces for hidden word
var spaces = 0;
// shows letters guessed and spaces remaining
var lettersAndSpaces = [];
// letters guessed
var lettersGuessed = [];
// audio objects for songs to corresponding word
var energyAudio = new Audio('assets/audio/energy.mp3');
var controllaAudio = new Audio('assets/audio/controlla.mp3');
var hotlineAudio = new Audio('assets/audio/hotline.mp3');
var childsplayAudio = new Audio('assets/audio/childsplay.mp3');
var onedanceAudio = new Audio('assets/audio/onedance.mp3');


// setting variables for wins, losses
var wins = 0;
var losses = 0;
// chances left
var chances = 14;


function startGame() {

	// stop track playing
	controllaAudio.pause();
	energyAudio.pause();
	hotlineAudio.pause();
	onedanceAudio.pause();
	childsplayAudio.pause();

	// resets chance counter
	chances = 14;
	// resets letters guessed
	lettersGuessed = [];
	// resets letters/spaces remaining
	lettersAndSpaces = [];
	// resets hidden spaces in title
	hiddenSpaces = [];

	// call on a random word from the words array
	word = words[Math.floor(Math.random()*words.length)];
		// console.log(word);
	// if word is matching song, play designated song
	for(var i = 0; i < word.length; i++){
		if(word === "energy"){
			energyAudio.play();
		}
		else if(word === "controlla"){
			controllaAudio.play();
		}
		else if(word === "hotline bling"){
			hotlineAudio.play();
		}
		else if(word === "childs play"){
			childsplayAudio.play();
		}
		else if(word === "one dance"){
			onedanceAudio.play();
		}
	};


	// gets all letters in random word
	lettersInWord = word.split("");



	// counts letters in word
	spaces = lettersInWord.length;

	for(var i = 0; i < spaces; i++){
		lettersAndSpaces.push("_");
	} if(i === " "){
		hiddenSpaces.push(" ");
	}

	// console.log(lettersAndSpaces);

	// update HTML to show new counts
	document.getElementById("chances").innerHTML = chances;
	document.getElementById("spaces").innerHTML = hiddenSpaces.join(" ");
	document.getElementById("spaces").innerHTML = lettersAndSpaces.join(" ");
	document.getElementById("lettersGuessed").innerHTML = lettersGuessed.join(" ");
};

// function to find if user's input matches letters in srandom word
function checkLetters(letter) {
	// boolean; is letter in word?
	var letterFound = false;
	// if letter is in word, change boolean to true
	for(var i = 0; i < spaces; i++){
		if(word[i] === letter){
			letterFound = true;
		}
	}
	// if true...
	if(letterFound){
		for(var i = 0; i < spaces; i++){
			if(word[i] === letter){
				// replace space with letter
				lettersAndSpaces[i] = letter;
			}
		}
	}
	// if false...add guessed letter to lettersGuessed array and subtract from total chances
	else{
		lettersGuessed.push(letter);
		chances--;
	}

};


function roundComplete() {
	// update HTML to show new counts
	document.getElementById("chances").innerHTML = chances;
	document.getElementById("spaces").innerHTML = lettersAndSpaces.join(" ");
	document.getElementById("lettersGuessed").innerHTML = lettersGuessed.join(" ");

	// if user matches all letters, add to win score, restart game
	if(lettersInWord.toString() === lettersAndSpaces.toString()){
		wins++;
		// update HTML
		document.getElementById("wins").innerHTML = wins;
		startGame();
	}
	// if user runs out of chances, update loss score and restart game
	else if(chances === 0){
		losses++;
		// update HTML
		document.getElementById("losses").innerHTML = losses;
		startGame();
	}
};

function init () {
	var elem = document.getElementById("start").remove();
	if (elem !== undefined) {
		elem.remove();
	};
	var container = "<h3 id='spaces'></h3>";
	var mobileKeyboard = "<input type='text' id='keyboardInput'>";

	document.getElementById("content").innerHTML = container;
	document.getElementById("keyboard").innerHTML = mobileKeyboard;
	function initKeyboard() {
		return new Promise((resolve) => {
			document.getElementById("keyboard").innerHTML = mobileKeyboard;
			resolve();
		});
	}
	initKeyboard().then(() => {
		document.getElementById("keyboardInput").focus();
		// document.getElementById("keyboardInput").click();
	})
	// setTimeout (function () {
	// 	document.getElementById("keyboardInput").focus();
	// }, 1);
	// document.getElementById("keyboardInput").focus();
	// document.getElementById("keyboardInput").click();


	startGame();
}

// startGame();

document.onkeyup = function(){
	var userguess = String.fromCharCode(event.keyCode).toLowerCase();

	checkLetters(userguess);
	roundComplete();
};

// click event for the start button
// document.getElementById("start").onclick = startGame();