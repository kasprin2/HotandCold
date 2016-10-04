//creating variable for the randomNumber
var randomNumber = 0;

//creating the variable for the difference between randomNumber and user's input
//function for difference (response) is below



var count = 0;

$(document).ready(function() {
	//calling the function randomizeNumber();  / creating a random number for the page
	randomizeNumber();
	
	/*--- Display information modal box ---*/
  	$(".what").click(function() {
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function() {
  		$(".overlay").fadeOut(1000);
  	});

	//convert string to number, list guess, add in counter, compare, output
	$("#guessButton").click(function(e) {
		e.preventDefault();
		//converting string to number
		input = $("#userGuess").val();
		parseInt(input);
		//validate if input is blank or not a number. If either one below is true nothing else below function will be executed (return) and "Enter a number" will be listed.
		if (!input || isNaN(input)) {
			$('#feedback').text("Enter a number");
			return;
		}
		//list number in <li>
		$('#guessList li:first').append("<li>" + input + "</li>");
		//calling the response function to compare input and randomNumber (see var difference) and display feedback
		response();
		//returning the userGuess input section to blank
		$("#userGuess").val('');
		//guess count
		counter();
	})
});

function randomizeNumber() {
	randomNumber = 1 + Math.floor(Math.random() * 100);
	console.log("randomNumber: " + randomNumber);
}

function response() {
	console.log(input, "res");
	var difference = Math.abs(randomNumber - input);
	console.log(difference);
	
	if (difference >= 50) {
		$('#feedback').text('Freezing');
	} 
	else if (difference >= 25) {
		$('#feedback').text('Cold');
	} 
	else if (difference >= 10) {
		$('#feedback').text('Warm');
	} 
	else if (difference >= 5) {
		$('#feedback').text('Hot');
	}
	else if (difference >= 1) {
		$('#feedback').text('On Fire!');
	} 
	else if (difference === 0) {
		 $('#feedback').text('Correct, Great Job!');
	}
};

function counter(){
			count += 1;
  			$('#count').text(count);
};

//when page loads, load a new game

//create a random number when a new game is started

//allow a new game to be started without a page refresh

//give user feedback on guess

//supply user with list of guesses supplied so f

//events (1) new game (reload, refresh, hitting new button) random number created

//events (2) user hits submit guess - ensures that guess is a number, 
//converts string to number
//lists number in <li>
//compares number to random number
//based on comparison decides which output to give - hot, cold, colder, hotter, warm, cool, Right On!
