
/**
 * Get the value of the card
 * @param {String} card 
 * @returns {Integer} the value of the card. If the card is an A return 11, if is an other special card ()return 10
 */
export const getValueCard = ( card ) => {
    if(!card || card === "") throw Exception('Invalid argument passed in getValueCard. You must pas a card value')
    const value = card.substring(0, card.length - 1 );
    return ( isNaN(value) ) ? 
                (value === 'A' ) ? 11 : 10 
            : value * 1;   
}