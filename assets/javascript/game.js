// // window.onload = function(){

		var words = ["hotline bling", "controlla", "one dance", 
		"practice", "come thru", "worst behavior", "know yourself", 
		"diamonds dancing", "jumpman", "childs play", "too good", 
		"pop style", "fake love", "over", "back to back", "summer sixteen", 
		"successful", "doing it wrong"];

		var wins = 0;
		var chances = 10;



// 		var wins;  // stored wins
// 		var chances; // chances
// 		var spaces; // number of spaces "-"
// 		var guesses; // stored letters guessed

		// var showWins = document.getElementbyId("myWins");
		// var showChances = document.getElementbyId("myChances");
		// var showGuesses = document.getElementbyId("myGuesses");

		var word = words[Math.floor(Math.random()*words.length)];
			console.log(word);

		var answerArray = [];
			for (var i = 0; i < word.length; i++){
				console.log(answerArray[i] = "_" );

			}
		var remainingLetters = word.length;

		document.onkeyup = function(){
			var userguess = String.fromCharCode(event.keyCode).toLowerCase();
			alert("Guess");

		// var html = "<p>Press any key to start!</p>" + 
		// 	"<p>wins: " + wins + "</p>" +
		// 	"<p>chances left: " + chances left + "</p>" +
		// 	"<p>letters guessed: " + letters guessed + "</p>" ;




}


