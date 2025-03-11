let messageEl = document.getElementById('message-prompt');
const cardPickEl = document.getElementById('card-el');
const sumEl = document.getElementById('sum-el');
const playersNameEl = document.getElementById('player-name');

let isAlive = false;
let message = "";
let hasBlackjack = false;
let cards = [];
let sum = 0;
let player = {
    name : prompt("Enter your name", "Happy"),
    chips: 0
}

playersNameEl.textContent = player.name + ": $ "

const getRandomNumber = () =>{
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10){
        return 10
    }else if(randomNumber === 11){
        return 11
    }else{
        return randomNumber
    }
}

const startGame = () =>{
    isAlive = true
    let firstCard = getRandomNumber();
    let secondCard = getRandomNumber();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame()
    player.chips = 100
    playersNameEl.textContent = player.name + ": $ " + player.chips
}

const renderGame = () =>{
    cardPickEl.textContent = "Cards: ";
    for (let index = 0; index < cards.length; index++) {
        cardPickEl.textContent += cards[index] + " ";
    }

    sumEl.textContent = "Sum: " + sum;
    if( sum <= 20){
        message = "Draw a new card";
        messageColor();
        isAlive = true;
    }else if ( sum === 21){
        message = "You have a Blackjack! Refresh the game";
        messageColor();
        hasBlackjack = true;
    }else{
        message = "You're out of the game";
        messageColor();
        isAlive = false;
    }
    messageEl.textContent = message; 
}

const newCard = () =>{
    if (isAlive === true && hasBlackjack === false){
        let card = getRandomNumber();
        sum += card;
        cards.push(card)
        renderGame()
        player.chips += Math.floor(Math.random()* 200) + 100;
        playersNameEl.textContent = player.name + ": $ " + player.chips
    }
}

const messageColor = () =>{
    if (message === "Draw a new card"){
       messageEl.style.color = "orange";
    }else if( message === "You have a Blackjack! Refresh the game"){
        messageEl.style.color = "#90EE90";
    }else if( message === "You're out of the game"){
        messageEl.style.color = "red"
    }else{
        messageEl.style.color = "white"   
    }
}


