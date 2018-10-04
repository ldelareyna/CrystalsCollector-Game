// VARIABLES
// Variable statements are declared for tracking win's, loses, total scores, and random numbers for the player number and points of each jem
 
// This variables is assinged a random number between 19 - 120
var computerNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);

//  These variables are assinged a value of 0
var win = 0;

var lose = 0;

// These variables are assinged a andom number between 1-12
var ruby = Math.floor(Math.random() * (12 - 1 + 1) + 1);

var diamond = Math.floor(Math.random() * (12 - 1 + 1) + 1);

var sapphire = Math.floor(Math.random() * (12 - 1 + 1) + 1);

var emerald = Math.floor(Math.random() * (12 - 1 + 1) + 1);

// This variable is assinged a value of 0 
var totalScore = 0;


// This function is decared to change the value of crystals when invoked. 
function changeCrystalValues() {

	// These variables are given a new random number between 1-12
	ruby = Math.floor(Math.random() * (12 - 1 + 1) + 1);

	diamond = Math.floor(Math.random() * (12 - 1 + 1) + 1);

	sapphire = Math.floor(Math.random() * (12 - 1 + 1) + 1);

	emerald = Math.floor(Math.random() * (12 - 1 + 1) + 1);
}
// FUNCTION
// This function is decraed to execute the funcionality of the game.

function game() {

	// If the conditoin is true then increment win/lose and return it's value to the ID with the selector as it's name.
	// Then return the text content to the ID with the selector as it's name.
	// Assign a new value between 19-120 to the computerNumber variable.
	// Assign the totalScore variable back to 0 and return the new value to the ID with the selector as it's name.
	// Execute the function changeCrystalValues.

	if (totalScore === computerNumber) {

		win++;

		$('#win-counter').text(win);

		$('#win-or-lose').text('You win!');

		computerNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);

		$('#random-number').text(computerNumber);

		totalScore = 0;

		$('#current-score-counter').text(totalScore);

		changeCrystalValues();

	} else if (totalScore > computerNumber) {

		lose++;

		$('#loss-counter').html(lose);

		$('#win-or-lose').text('You lose!');

		computerNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);

		$('#random-number').text(computerNumber);

		totalScore = 0;

		$('#current-score-counter').text(totalScore);

		changeCrystalValues();
	}
}


// jQuery is used to return the value of computerNumber to the tag with the selector as it's ID. 
$('#random-number').text(computerNumber);

// FUNCTIONS
// Here created various on "click" functions which capture the clicks
// Inside each click event is the code that will add 
// the random number that each crystal has been given to the totalScore

// jQuery is used to select the image with the selecotr as it's ID.
// When ever it's clicked the value of the variable is added to the totalScore variable
// Then the new value of the totalScore varibale is returned to the image with the selector as it's ID.
// The function game is executed.

$('#ruby').on('click', function () {

	totalScore += ruby;

	$('#current-score-counter').text(totalScore);

	game();

});


$('#diamond').on('click', function () {

	totalScore += diamond;

	$('#current-score-counter').text(totalScore);

	game();

});


$('#sapphire').on('click', function () {

	totalScore += sapphire;

	$('#current-score-counter').text(totalScore);

	game();

});


$('#emerald').on('click', function () {

	totalScore += emerald;

	$('#current-score-counter').text(totalScore);

	game();

});
















