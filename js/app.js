 /*
  * Udacity Instuctions:
  * Create a list that holds all of your cards
  *
  *
  * Display the cards on the page
  *   - shuffle the list of cards using the provided "shuffle" method below
  *   - loop through each card and create its HTML
  *   - add each card's HTML to the page
  *
  *
  * Set up the event listener for a card. If a card is clicked:
  *  - display the card's symbol (put this functionality in another function that you call from this one)
  *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
  *  - if the list already has another card, check to see if the two cards match
  *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
  *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
  *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
  *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
  */






 // List of Objects
let deck = document.getElementsByClassName('deck');
let card = document.getElementsByClassName('card');
let star = document.getElementsByClassName('fa-star');
let restart = document.getElementsByClassName('restart');
let moves = document.getElementsByClassName('move')[0];
//let movesCount = moves.innerText;
let timer = document.getElementsByClassName('timer')[0];
let timerCount = timer.innerText;

const cardValues = [
     "fa fa-diamond",
     "fa fa-paper-plane-0",
     "fa fa-anchor",
     "fa fa-bolt",
     "fa fa-cube",
     "fa fa-leaf",
     "fa fa-bicycle",
     "fa fa-bomb"
 ]

console.log(deck);
console.log(card);
console.log(star);
console.log(restart);
console.log(moves);
//console.log(movesCount);
console.log(timer);
console.log(timerCount);
console.log(cardValues);



//List of EventListeners
deck.addEventListener('online',function(){
  console.log('card selected');
});

card.addEventListener('online',function(){
  console.log('card selected');
});

star.addEventListener('click',function(){
  console.log('card selected');
});

restart.addEventListener('click',function(){
  console.log('card selected');
});

moves.addEventListener('click',function(){
  console.log('card selected');
});

timer.addEventListener('click',function(){
  console.log('card selected');
});

timerCount.addEventListener('click',function(){
  console.log('timer counter selected');
});






// List of Functions
function cardsMatch(){

};

function cardFlip(){

};

function movesCounter(){

};

function allCardsMatch(){

};

function cardReset(){

};

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
    // Shuffle function from http://stackoverflow.com/a/2450976
}
