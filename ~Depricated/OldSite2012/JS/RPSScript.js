var setTally = function(resultSet) {
	if(resultSet === "win") {
		var playerTally = document.getElementById('playerTally').value;
		var newPlayerTally = parseInt(playerTally,10) + 1;
		document.getElementById('playerTally').value = newPlayerTally;
	}
	else if(resultSet === "lose") {
		var computerTally = document.getElementById('computerTally').value;
		var newComputerTally = parseInt(computerTally,10) + 1;
		document.getElementById('computerTally').value = newComputerTally;
	}
	else if(resultSet === "draw") {
		var drawTally = document.getElementById('drawTally').value;
		var newDrawTally = parseInt(drawTally,10) + 1;
		document.getElementById('drawTally').value = newDrawTally;
	}
	
	var gamesTally = document.getElementById('gamesTally').value;
	var newGamesTally = parseInt(gamesTally,10) + 1;
	document.getElementById('gamesTally').value = newGamesTally;
	
	return resultSet
}

var determineResult = function(player) {
	var choices = ["rock","paper","scissors"];
	var computer = choices[Math.floor(Math.random()*3)];
	var result = "";
	
	var win = "Your "+player+" beats "+computer+". You win";
	var lose = "Your "+player+" loses to "+computer+". You lose";
	var draw = "A draw: "+player+" on "+computer;
	
	if(player === "rock"){
		if(computer === "scissors") {result = win; setTally("win");}
		else if(computer === "paper") {result = lose; setTally("lose");}
		else if(computer === "rock") {result = draw; setTally("draw");}
	}
	else if(player === "paper"){
		if(computer === "rock") {result = win; setTally("win");}
		else if(computer === "scissors") {result = lose; setTally("lose");}
		else if(computer === "paper") {result = draw; setTally("draw");}
	}
	else if(player === "scissors"){
		if(computer === "paper") {result = win; setTally("win");}
		else if(computer === "rock") {result = lose; setTally("lose");}
		else if(computer === "scissors") {result = draw; setTally("draw");}
	}
	
	//$('playerArea') = player;
	//$('computerArea') = computer;
	//$('#resultArea') = result;
	
	document.getElementById('playerOutput').value = player;
	document.getElementById('computerOutput').value = computer;
	document.getElementById('resultOutput').value = result;
	
	return result;
}

var reset = function() {
	document.getElementById('playerOutput').value = "";
	document.getElementById('computerOutput').value = "";
	document.getElementById('resultOutput').value = "";
	document.getElementById('playerTally').value = "0";
	document.getElementById('computerTally').value = "0";
	document.getElementById('drawTally').value = "0";
	document.getElementById('gamesTally').value = "0";
}