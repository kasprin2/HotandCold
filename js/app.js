// creating variable for the randomNumber
var randomNumber = 0;

var counter = 0;

$(document).ready(function() {
	// calling the function randomizeNumber();  / creating a random number for the page
	randomizeNumber();
	
	/*--- Display information modal box ---*/
  	$(".what").click(function() {
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function() {
  		$(".overlay").fadeOut(1000);
  	});

  	$('.new').click(function() {
  		restart();
		counter = 0;
		randomizeNumber();
  		});

	// convert string to number, list guess, add in counter, compare, output
	$("#guessButton").click(function(e) {
		e.preventDefault();
		// converting string to number
		input = $("#userGuess").val();
		parseInt(input);
		// validate if input is blank or not a number. If either one below is true nothing else below function will be executed (return) and "Enter a number" will be listed.
		if (!input || isNaN(input)) {
			$('#feedback').text("Enter a number");
			return;
		}
		// list number in <li>
		$('#guessList').append("<li class='guess'>" + input + "</li>");
		// calling the response function to compare input and randomNumber (see var difference) and display feedback
		respond();
		// returning the userGuess input section to blank
		$("#userGuess").val('');
		// guess count
		count();
	});
});

function randomizeNumber() {
	randomNumber = 1 + Math.floor(Math.random() * 100);
	console.log("randomNumber: " + randomNumber);
}

function respond() {
	var difference = Math.abs(randomNumber - input);
	
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

function count() {
			counter += 1;
  			$('#count').text(counter);
};

function restart() {
	$('#feedback').text('Make your Guess!');
	$('li.guess').remove();
	$('#count').text('0');
};


