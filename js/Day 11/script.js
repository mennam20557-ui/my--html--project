//Task 1 game

let PlayerOneChoice = "Rock";
let PlayerTwoChoice = "Rock";

if (PlayerOneChoice === "Rock" && PlayerTwoChoice === "Paper") {
    console.log("Player Two wins!");
} 
else if (PlayerOneChoice === "Paper" && PlayerTwoChoice === "Rock") {
    console.log("Player One wins!");
}
else if (PlayerOneChoice === "Rock" && PlayerTwoChoice === "Scissors") {
    console.log("Player One wins!");
}
else if (PlayerOneChoice === "Scissors" && PlayerTwoChoice === "Rock") {
    console.log("Player Two wins!");
}
else if (PlayerOneChoice === "Paper" && PlayerTwoChoice === "Scissors") {
    console.log("Player Two wins!");
}
else if (PlayerOneChoice === "Scissors" && PlayerTwoChoice === "Paper") {
    console.log("Player One wins!");
}
else if (PlayerOneChoice === PlayerTwoChoice) {
    console.log("It is a tie!");
}






// Task 2
let grade = 85;         
let studentName = "Sara"; 
let isStudent = true;   
let value = null;        
let x;                   


if (grade >= 90) {
    console.log("Excellent");
 } else if (grade >= 80) {
    console.log("Good");
 } else if (grade >= 70) {
    console.log("Average");
 } else if (grade >= 60) {
    console.log("Pass");
 } else {
    console.log("Fail");
 }
