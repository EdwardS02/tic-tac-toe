// Access all the button elements and save them to a single array variable. 

let btnArray = Array.from(document.getElementsByTagName('button'));
let turnElement = document.getElementById('turn');
let yourTurn = "X";

// Use a for loop to add event listeners to every button in the variable mentioned above. 
for (var i = 0; i < btnArray.length; i++) {
    btnArray[i].addEventListener('click', updateBtn);
}

// Create a function which checks the innerText property of every button to determine if there is a winner. 
function winLose() {
    let b1 = document.getElementById("b1").innerText;
    let b2 = document.getElementById("b2").innerText;
    let b3 = document.getElementById("b3").innerText;
    let b4 = document.getElementById("b4").innerText;
    let b5 = document.getElementById("b5").innerText;
    let b6 = document.getElementById("b6").innerText;
    let b7 = document.getElementById("b7").innerText;
    let b8 = document.getElementById("b8").innerText;
    let b9 = document.getElementById("b9").innerText;


    if (b1 !== '' && b1 === b2 && b2 === b3){ // Horizontal wins
        return true;
    } else if (b4 !== '' && b4 === b5 && b5 === b6){
        return true;
    } else if (b7 !== '' && b7 === b8 && b8 === b9){
        return true;
    } else if (b1 !== '' && b1 === b4 && b4 === b7){ // Vertical wins
        return true;
    } else if (b2 !== '' && b2 === b5 && b5 === b8){
        return true;
    } else if (b3 !== '' && b3 === b6 && b6 === b9){
        return true;
    } else if (b1 !== '' && b1 === b5 && b5 === b9){ // Diagonal wins
        return true;
    } else if (b3 !== '' && b3 === b5 && b5 === b7){
         return true;
    } else {
        return false; // No winner
    }
}

// The text of the button that was clicked should update to display that player's symbol.
function updateBtn(event) {
    let btn = event.target;
    btn.innerText = yourTurn;

    // Remove the event listener attached to that button using the removeEventListener() method. 
    btn.removeEventListener('click', updateBtn);

    
    if (winLose()) {
        turnElement.innerText = yourTurn + " wins!";
        // Disable all buttons to prevent further clicks after a win
        for (var i = 0; i < btnArray.length; i++) {
            btnArray[i].removeEventListener('click', updateBtn);
        }
    } else if (btnArray.every(btn => btn.innerText !== '')) {
        // Check if there is a tie
        turnElement.innerText = "Tie!";
    } else if (yourTurn == "X"){
        yourTurn = "O";
        turnElement.innerText = "O's turn"
    } else {
        yourTurn = "X";
        turnElement.innerText = "X's turn"
    }
    }


