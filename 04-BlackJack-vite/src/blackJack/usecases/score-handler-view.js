
const htmlPlayerScore = document.querySelector('#payerScore'),
      htmlComputerScore = document.querySelector('#computerScore');

export const resetScoreView = () =>{
    htmlPlayerScore.innerText = 0;
    htmlComputerScore.innerText = 0;
}

/**
 * 
 * @param {Integer} score 
 * @param {Integer} player 1= Player , 2= Computer
 */
export const changePlayersScore= (score, player) =>{
    if(player == 1){
        htmlPlayerScore.innerText = score;
    }
    else{ 
        htmlComputerScore.innerText = score;
    }
}