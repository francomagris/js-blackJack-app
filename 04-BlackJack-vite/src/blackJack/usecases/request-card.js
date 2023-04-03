/**
 * Request a card from the deck
 * @returns {String} return the card
 */
export const requestCard = (deck = []) =>{
    if(deck.length > 0){
        const card = deck.pop();
        return card;
    }
    else{
        throw "No hay cartas en el mazo, presione Nuevo Juego";
    }
}