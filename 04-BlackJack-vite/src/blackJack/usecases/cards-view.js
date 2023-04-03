const htmlPlayerCards = document.querySelector('#player-cards'),
      htmlComputerCards = document.querySelector('#computer-cards');

/**
 * Cler cards View
 */
export const resetCardsView = ()=>{
    htmlPlayerCards.innerText = "";
    htmlComputerCards.innerText = "";
}   

/**
 * Show cards in the view
 * @param {String} card 
 * @param {Integer} player 1 = Player, 2 = Computer 
 */
export const addCardToView = (card, player)=>{
    const imgCard = document.createElement('img'); // create tag
    imgCard.src = `assets/cartas/${ card }.png`; // add png to src value 
    imgCard.classList.add('cards'); // add css style
    
    if(player === 1){
        htmlPlayerCards.append(imgCard); // append to htmlPlayerCards
    }
    else{
        htmlComputerCards.append(imgCard); // append to htmlPlayerCards
    }
    
   
}