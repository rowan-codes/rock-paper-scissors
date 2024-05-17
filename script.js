function getComputerChoice(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    let randomInt = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    switch (randomInt) {
        case 1:
        computerChoice = 'rock';
        break;
 
        case 2:
        computerChoice = 'paper';
        break;
 
        case 3:
        computerChoice = 'scissors';
        break;
     }
 return computerChoice;
 }
 
 function getHumanChoice() {
    let humanInput = window.prompt('Rock, paper, or scissors?');
    if (humanInput != null) {
        if (humanInput.toLowerCase == 'rock' || 'paper' || 'scissors') {
            let humanChoice = humanInput.toLowerCase();
            return humanChoice;
        } 
        else {
            console.log('Valid answers are rock, paper, or scissors.');
            getHumanChoice();
            return
        }
    }
    else {
        return
    }
}
 
 /* initializing variables */
 let humanScore = 0;
 let computerScore = 0;
 let roundTotal = 0;
 
 function humanWon() {
    humanScore++;
    console.log('You won that round!');
    return humanScore;
 }
 
 function computerWon() {
    computerScore++;
    console.log('The computer won that round.');
    return computerScore;
 }
 
 function playRound (humanChoice, computerChoice) {
    roundTotal++;
    console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}.`);
    calculateRoundWinner(humanChoice, computerChoice);
    return;
 }
 
 function calculateRoundWinner(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log('Draw!');
        return;
    } 
     else if (((humanChoice == 'rock') && (computerChoice == 'scissors')) || ((humanChoice == 'scissors') && (computerChoice == 'paper')) || ((humanChoice == 'paper') && (computerChoice == 'rock'))) {
        humanWon();
        return;
    }
     else {
        computerWon();
        return;
    }
}
 
 function announceWinner(humanScore, computerScore) {
    if (humanScore == computerScore) {
        console.log(`Wow, it is somehow still a draw! You both got ${humanScore}.`);
        return;
    } 
    else if (humanScore > computerScore) {
        console.log(`You won! Congratulations. Your score was ${humanScore} and theirs was ${computerScore}.`);
        return;
    } 
    else {
        console.log(`Aw, the computer beat you. Their score was ${computerScore} and yours was only ${humanScore}. Never mind.`);
        return;
    }
 }
 
 /* play best of 5 rounds */
 for (let roundTotal = 0; roundTotal < 5; roundTotal++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice(1, 3);
    playRound(humanSelection, computerSelection);
 }
 
 /* finish game */
 announceWinner(humanScore, computerScore);
 