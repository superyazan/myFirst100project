//global variables
let pScore = 0;
let cScore = 0;
const buttons = document.querySelectorAll('button');
buttons.forEach(but => 
{
    but.addEventListener('click',game);
})

function game(e) {

    function computerPlay (){
        const choices = ['rock','paper','scissors'];
        const cnumbers = Math.floor(Math.random() * 3);
        let computerChoice = choices[cnumbers];
        return computerChoice;
    }

// start round


function playRound(playerSelection,computerSelection) {
    
    if (playerSelection === computerSelection){
        return 'It is a tie , you get the same';
    }
    else {
        if (playerSelection === 'rock'){
            if (computerSelection === 'scissors'){
                pScore++
                return `u win, rock beats scissors`;

            }
            else {
                cScore++
                return `u lose, rocks never beat paper`;

            }
            
        }
        else if (playerSelection === 'paper'){
            if (computerSelection === 'scissors'){
                cScore++
                return `u lose, paper never beat scissors`;

            }
            else {
                pScore++
                return `u win, paper beats rock`;

            }
        }
        else if (playerSelection === 'scissors'){
            if (computerSelection === 'rock'){
                cScore++
                return `u lose, scissors never beat rock `;

            }
            else {
                pScore++
                return `u win, scissors beats paper `;
            }
        }
        else {
            return `choose only between rock, scissors and paper. and 
            pay attention to misstyping.`

        }

   // call round 

}
}
const playerSelection = e.target.value;
const computerSelection = computerPlay();
document.getElementById('result').innerHTML= (playRound(playerSelection,computerSelection));
document.getElementById('score').innerHTML = (`your score is ${pScore} vs ${cScore} for computer`);
if (pScore === 5  && cScore < 5){
    document.getElementById('btns').innerHTML= 'You win!'
}
else if (pScore < 5 && cScore === 5){
    document.getElementById('btns').innerHTML= 'You lose!'
}    
        
    }




