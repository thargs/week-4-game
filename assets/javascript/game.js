$(document).ready(function() {


	var purple, pink, blue, red;
	var wins = 0;
	var losses = 0;
	var targetNumber;
	var userScore;


	function initializeScore() {
		
		targetNumber = 19 + Math.floor(Math.random() * 102);
		
		purple = 1 + Math.floor(Math.random() * 12);
		pink = 1 + Math.floor(Math.random() * 12);
		blue = 1 + Math.floor(Math.random() * 12);
		red = 1 + Math.floor(Math.random() * 12);
		
		userScore = 0;
	
		$("#numberOfWins").html("Wins: " + wins);
		$("#numberOfLosses").html("Losses: " + losses);
		$("#targetNumber").html(targetNumber);
		$("#userScore").html(userScore);
		consoleLogScore();
	}

    
	function winOrLose() {
	
		if (userScore > targetNumber) {
			losses++;
			alert("Sorry you LOST");
			initializeScore();
		}


		if (userScore === targetNumber) {
			wins++;
			alert("YOU WON!");
			initializeScore();
		}
    }
    


	function consoleLogScore() {
		console.log("wins: " + wins + " losses: " + losses);
		console.log("purple: ", purple + " pink: " + pink + " blue: " + blue + " red: " + red);
		console.log("targetNumber: " + targetNumber + " userScore: " + userScore);
		console.log("----------------------------------");

	}



	initializeScore();


	$(".gem").on("click", function() {


		var pressed = $(this).attr("value");
        console.log(pressed);
    
        if (pressed == "purple") {
        	userScore += purple;
        } else if (pressed == "pink") {
        	userScore += pink;
        } else if (pressed == "blue") {
        	userScore += blue;
        } else if (pressed == "red") {
        	userScore += red;
        } else {
        	console.log("error");
        }
   
        $("#userScore").html(userScore);
        consoleLogScore();

        winOrLose();
	});

});
