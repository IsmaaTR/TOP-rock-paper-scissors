// Class variables
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // Generate a random number between 0 and 2 
    const number = getRandomInt(3);

    // Depending on the number, return 'rock', 'paper', or 'scissors'
    switch (number) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getHumanChoice() {
    // Ask the player for their turn
    const choice = prompt('Please choose rock, paper, or scissors');
    
    // Return the choice if it is valid
    if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        alert('Invalid choice. Please choose rock, paper, or scissors');
        return getHumanChoice();
    }

    return choice;
}

function playRound(humanChoice, computerChoice) {
    // Determine the winner
    if (humanChoice === computerChoice) {
        console.log('It\'s a tie!');
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        switch (humanChoice) {
            case 'rock':
                console.log('You win! Rock beats scissors.');
                break;
            case 'paper':
                console.log('You win! Paper beats rock.');
                break;
            case 'scissors':
                console.log('You win! Scissors beats paper.');
                break;
        }
        humanScore++;
    } else {
        switch (humanChoice) {
            case 'rock':
                console.log('You loose! Paper beats rock.');
                break;
            case 'paper':
                console.log('You loose! Scissors beats paper.');
                break;
            case 'scissors':
                console.log('You loose! Rock beats scissors.');
                break;
        }
        computerScore++;
    }
}

function playGame() {
    // Play best of 5
    while (humanScore < 3 && computerScore < 3) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    //Announce the winner
    if (humanScore > computerScore) {
        alert('You win the game!');
    } else {
        alert('You loose the game!');
    }

    // Reset the scores
    humanScore = 0;
    computerScore = 0;
}