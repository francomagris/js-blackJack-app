import _ from 'underscore';

/**
 * 
 * @returns {Array<String>} new unorder Deck
 */
export const createDeck = () => {
    let deck = [];
    let specialCards = ['A', 'K', 'Q', 'J']
    for(let i = 2; i <= 10; i++){
        deck.push(i + 'C');
        deck.push(i + 'D');
        deck.push(i + 'H');
        deck.push(i + 'S');
    }

    for(var special of specialCards){
        deck.push(special + 'C');
        deck.push(special + 'D');
        deck.push(special + 'H');
        deck.push(special + 'S');
    }

    deck = _.shuffle(deck);
    //btnStop.disabled = true;
    return deck;
}