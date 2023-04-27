const body = document.querySelector("body");
const rock = document.getElementById("rock"); 
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let youWin = 0;
let youLost = 0;
let itsATie = 0;

const wins = document.getElementById('wins');
wins.textContent = youWin;
const ties = document.getElementById('ties');
ties.textContent = itsATie;
const losses = document.getElementById("losses");
losses.textContent = youLost;



rock.addEventListener('click', responseToClick)
function responseToClick(){

        let computerChoice = generatecomputerChoice();

        if(computerChoice === "scissors"){
            wins.textContent = youWin++;
        } else if(computerChoice === "rock"){
            ties.textContent = itsATie++;
        } else if(computerChoice === "paper"){
            losses.textContent = youLost++;
       }
        console.log(youWin);
        console.log(youLost);
        console.log(itsATie);
 }   

responseToClick();

paper.addEventListener('click', responseToClick1)
function responseToClick1(){

        let computerChoice = generatecomputerChoice();

        if(computerChoice === "scissors"){
            wins.textContent = youWin++;
        } else if(computerChoice === "rock"){
            ties.textContent = itsATie++;
        } else if(computerChoice === "paper"){
            losses.textContent = youLost++;
        }
        
 }  

scissors.addEventListener('click', responseToClick2)
function responseToClick2(){
        let computerChoice = generatecomputerChoice();

        if(computerChoice === "scissors"){
            wins.textContent = youWin++;
        } else if(computerChoice === "rock"){
            ties.textContent = itsATie++;
        } else if(computerChoice === "paper"){
            losses.textContent = youLost++;
        }
 }  

function generatecomputerChoice(){
let randomNumber = Math.floor(Math.random() * 3);

        console.log(randomNumber);
    
        let computerChoice;
    
        if(randomNumber == 0) {
            computerChoice = "scissors"
        } else if(randomNumber == 1) {
            computerChoice = "paper"
        } else if(randomNumber == 2) {
            computerChoice = "rock"
        }
        return computerChoice;
}
