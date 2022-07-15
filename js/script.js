let player1 = "X";
let player2 = "O";
let currentPlayer = player1;
let gameEnd = false;
let result = currentPlayer + " wins!";

function playerClick(num, playerSymbol) {
  let buttonID = "#button" + tileID;
  let tileID = "#tile" + num;
  $(buttonID).hide();
  $(tileID).text(playerSymbol);
  
}

//change Player
function changePlayer(playerSymbol) {
  if (currentPlayer === player1){
    currentPlayer = player2;
  } else if (currentPlayer === player2) {
    currentPlayer = player1;
  }
}

//check if Player wins
function playerWon(num1, num2, num3) {
  let tileID1 = "#tile" + num1;
  let tileID2 = "#tile" + num2;
  let tileID3 = "#tile" + num3;
  let mark1 = $(tileID1).text();
  let mark2 = $(tileID2).text();
  let mark3 = $(tileID3).text();
  if (
    currentPlayer === mark1 &&
    currentPlayer === mark2 &&
    currentPlayer === mark3
  ) {
    return true;
    return result;
  } else {
    return false;
  }
  
}

//ways to win
function winCombos() {

//vertical
  if (playerWon(1, 4, 7) && playerWon(2, 5, 8) && playerWon(3, 6, 9)) {
    gameEnd = true;
    return result;
  }
  
//horizontal
  if (playerWon(1, 2, 3) &&  playerWon(4, 5, 6) &&  playerWon(7, 8, 9)) {
    gameEnd = true;  
    return result;
  }

//diagonal
  
  if (playerWon(1, 5, 9) && playerWon(3, 5, 7)) {
    gameEnd = true;
    return result;
  }
  
}

//function calling to change Player
changePlayer(currentPlayer);

function performLogic(buttonNum, tileNum) {
  var button = document.getElementById(buttonNum);
  changePlayer();
}

//button stuff
$("#button1").click(function() {
  performLogic("#button1", "#tile1");
  $("#button1").hide();
  $("#tile1").html(currentPlayer);
});

$("#button2").click(function() {
  performLogic("#button2", "#tile2");
  $("#button2").hide();
  $("#tile2").html(currentPlayer);
});

$("#button3").click(function() {
  performLogic("#button3", "#tile3");
  $("#button3").hide();
  $("#tile3").html(currentPlayer);
});

$("#button4").click(function() {
  performLogic("#button4", "#tile4");
  $("#button4").hide();
  $("#tile4").html(currentPlayer);
});

$("#button5").click(function() {
  performLogic("#button5", "#tile5");
  $("#button5").hide();
  $("#tile5").html(currentPlayer);
});

$("#button6").click(function() {
  performLogic("#button6", "#tile6");
  $("#button6").hide();
  $("#tile6").html(currentPlayer);
});

$("#button7").click(function() {
  performLogic("#button7", "#tile7");
  $("#button7").hide();
  $("#tile7").html(currentPlayer);
});

$("#button8").click(function() {
  performLogic("#button8", "#tile8");
  $("#button8").hide();
  $("#tile8").html(currentPlayer);
});

$("#button9").click(function() {
  performLogic("#button9", "#tile9");
  $("#button9").hide();
  $("#tile9").html(currentPlayer);
});
