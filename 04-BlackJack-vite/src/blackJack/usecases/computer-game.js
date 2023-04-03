
import { alertMessage, addCardToView, changePlayersScore, getValueCard, requestCard } from "./index.js";
/**
 * 
 * @param {Array<String>} deck 
 * @param {Integer} playerScore the score that the computer has to superate.
 */
export const computerGame = (deck = [], playerScore) => {
    if(!deck || deck.length === 0) throw Exception('Empty deck. No cards in deck!');
    let computerScore = 0;

    while(computerScore < playerScore){
        const card = requestCard(deck);
        computerScore += getValueCard(card); 
        changePlayersScore(computerScore, 2);
        addCardToView(card, 2);

        if( playerScore > 21 ){
            alertMessage("Te pasaste :(");
            break;
        }

        if( computerScore > 21 ){
            alertMessage("¡¡¡Ganaste!!!");
            break;
        }

        if( computerScore >= playerScore ){
            alertMessage("La casa siempre Gana");
            break;
        }
    }
}      