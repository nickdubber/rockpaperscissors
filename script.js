//global variables
let count = 0;
let wins = 0
let losses = 0



    document.getElementById("nextRound").onclick = function(){
    count++;
    if(count <= 5){ 
    document.getElementById("roundCounterLabel").innerHTML = `Rounds played: ${count}`;
        } else {
            window.location.href="resultpage.html";
            calculateWinz();
    }

function userInput(){
    const value = document.getElementById("inputID").value;
    return value;
}

//generate random computer input
function computerInput(){
    let min  = 1
    let max = 3

let getComputerChoice = Math.floor(Math.random() * 3) + 1;

    if (getComputerChoice === 1) {
        return("Rock")
    } else if (getComputerChoice === 2) {
        return("Paper")
    } else if (getComputerChoice === 3) {
        return("Scissors")
    } else {
        return ("Error")
    }
}

//mix two together and decide winner
let compChoice = computerInput();
let userChoice = userInput();
console.log("user choice " + userChoice)
console.log("comp choice " + compChoice)

//win vs lose logic
function decideWinner(){
if(compChoice === "Rock" && userChoice === "Rock"){
return("tie")
} else if (compChoice === "Rock" && userChoice ==="Paper"){
return("win")
} else if (compChoice === "Rock" && userChoice ==="Scissors"){
    return("lose")
}
else if(compChoice === "Paper" && userChoice === "Rock"){
    return("lose")
}
    
else if (compChoice === "Paper" && userChoice ==="Paper"){
    return("tie")
}
    
else if (compChoice === "Paper" && userChoice ==="Scissors"){
    return("win")
}
    
else if(compChoice === "Scissors" && userChoice ==="Rock"){
    return("win")
}
    
else if (compChoice === "Scissors" && userChoice ==="Paper"){
    return("lose")
}
    
else if (compChoice === "Scissors" && userChoice ==="Scissors"){
    return("tie")
} 
}
//Count user Wins
if (decideWinner() === "win"){
    wins++;
    console.log(wins)
    let showWins = document.getElementById("scoreCountUser").innerHTML = "User score: " + wins
   } 
//Count computer wins
   if (decideWinner() === "lose"){
    losses++;
    console.log(losses)
    let showLosses = document.getElementById("scoreCountComputer").innerHTML = "Computer score: " + losses
   } 
// calculate winner
function calculateWinz(){
if (wins > losses){
    console.log("win")
    return("win")
} else if (wins < losses){
    console.log("lose")
    return("lose")
} else if (wins === losses){
    console.log("draw")
    return("draw")
}
}
calculateWinz();

let globalWinner = calculateWinz();

localStorage.setItem('winner', globalWinner);



//display outcome in HTML
let resultComp = compChoice
let resultUser = userChoice
if (resultComp && resultUser !== "Placeholder"){
let showResult = document.getElementById("outcome").innerHTML = `You selected ${resultUser}. Computer selected ${resultComp}.  You ${decideWinner()} this round.`;
} else {
}

//display image in HTML for outcome
let userImage = document.getElementById("outcomeImageUser").src = `images/${resultUser}.jpg`;
let compImage = document.getElementById("outcomeImageComp").src = `images/${compChoice}.jpg`;
}


    
    

    

