import {addCardToView, changePlayersScore, computerGame, createDeck, 
        getValueCard, requestCard, resetCardsView, resetScoreView } from "./usecases/index.js";

(() =>{
    'use strict'
    let deck = createDeck();
    let  playerScore = 0;

    // html references
    const btnRequestCard = document.querySelector('#btnRequestCard'),
          btnStop = document.querySelector('#btnStop'),
          btnNewGame = document.querySelector('#btnNewGame');

    
    /**
     * Change the disabled value of button "Pedir Carta" and "Detener"
     * @param {boolean} btnRequestCard if true disabled "Pedir Carta" button, else enabled
     * @param {boolean} btnStop if true disabled "Detener" button, else enabled
     */
    const disabledButtonsHandler = (btnRcValue, btnStopValue) => {
        btnRequestCard.disabled = btnRcValue;
        btnStop.disabled = btnStopValue;
    }

    
// Events Listeners

    // Button "Pedir Carta"
    btnRequestCard.addEventListener('click', () =>{
        const card = requestCard(deck);
        playerScore += getValueCard(card); 
        changePlayersScore(playerScore, 1);

        addCardToView(card, 1);       
        btnStop.disabled = false;

        // Verify if player score is 21 or more
        if(playerScore > 21){
            console.error("Te pasaste!");
            disabledButtonsHandler(true, true);
            computerGame(deck, playerScore);
        }
        if(playerScore == 21){
            console.info("Llegaste a 21!!")
            disabledButtonsHandler(true, true);
            computerGame(deck, playerScore);
        }
    });

    // Button "Detener"
    btnStop.addEventListener('click', () =>{
        disabledButtonsHandler(true, true);
        computerGame(deck, playerScore);
    });

    btnNewGame.addEventListener('click', () =>{    
        playerScore = 0;        
        deck = createDeck();
        resetCardsView();
        resetScoreView();
        disabledButtonsHandler(false, true);
    });

}) ();
