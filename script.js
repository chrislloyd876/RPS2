    
    let humanScore = 0;
    let computerScore = 0;
    
    function getComputerChoice(){
        let computerChoice = Math.random();
        if(computerChoice < 0.33){
            // console.log("rock");
            return "rock";
        }
        else if(computerChoice >= 0.33 && computerChoice <= 0.65){
            // console.log("paper");
            return "paper";
        }
        else{
            // console.log("scissors");
            return "scissors";
        }

    }

    function getHumanChoice(){
        let humanChoice = prompt("Rock, Paper, or Scissors?");
        console.log(humanChoice);
        return humanChoice;
    }

    function playRound(humanSelection, computerSelection){
        let humanPick = humanSelection.toLowerCase();
        
        switch(true){
            case(humanPick == computerSelection):
                console.log(`It's a draw! ${humanPick} and ${computerSelection}!`);
                break;
            case(humanPick == "rock" && computerSelection == "scissors"):
                console.log(`Player wins! ${humanPick} beats ${computerSelection}!`);
                return humanScore++;
                break;
            case(humanPick == "paper" && computerSelection == "rock"):
                console.log(`Player wins! ${humanPick} beats ${computerSelection}!`);
                humanScore++;
                break;
            case(humanPick == "scissors" && computerSelection == "paper"):
                console.log(`Player wins! ${humanPick} beats ${computerSelection}!`);
                return humanScore++;
                break;
            default:
                console.log(`Computer wins! ${computerSelection} beats ${humanPick}!`);
                return computerScore++;
        }
    }

    function playGame(){


        for(i=0;i<5;i++){

            let humanSelection = getHumanChoice();
            let computerSelection = getComputerChoice();
        
            playRound(humanSelection, computerSelection);
        }

        if(humanScore==computerScore){
            console.log("It's a TIE!");
        }
        else if(humanScore > computerScore){
            console.log("Player WINS!");
        }
        else{
            console.log("Player loses!");
        }
    }

    playGame();