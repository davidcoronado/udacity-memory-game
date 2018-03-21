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
  *
  *   Shuffle function from http://stackoverflow.com/a/2450976
  */


 // List of Objects
let deck = document.querySelectorAll('.deck');
let cardSelected;
let openCards = [];
let matchCount = [];

//List of EventListeners
for(var i = 0; 0 < deck.length; i++){
    deck[i].addEventListener('click', function(event){
      cardSelected = event.target;
       console.log('card Selected');
      cardFlip(cardSelected);
      cardsOpened(cardSelected);
      if(openCards.length > 1) {
        cardsMatch();
      }
})};


function cardFlip(card){
  card.classList += " open";
  card.classList += " show";
};

function cardsOpened(card){
  openCards.push(card);
  console.log(openCards);
};

function cardsMatch(){
  let cardOne = openCards[0].firstElementChild.className;
  let cardTwo = openCards[1].firstElementChild.className;
  console.log(cardOne);
  console.log(cardTwo);

  if(cardOne === cardTwo){
    //setMatchingCards();
    matchCount++;
    console.log("cards match");
  } else {
    console.log("cards do not match");
  }
};

function clearCards(){
  //reset the class of cardOne and cardTwo to "card" from "card open show"
}


//List of Functions

/*
create two empty variables

when one card is selected store i class value in first variable
when second card is selected store i class in second variables
compare if first and second variable have the same value return true
if they do not match then return false

if both variable match then they keep their newly assigned "card open show" class
if they don't match reset each card class to "card"

*/



function allCardsMatch(){
/*
if all li.card classes are "card open show" then all of the cards match

*/
};

function movesCounter(){
/*
each click on a card counts as a move

*/
};


function timer(){
/*
when the first card is select on the page start counting the time by minutes and seconds (0:00)
once all of the cards match make the timer to stop
*/
};

function starRating(){
/*
depending on the number of moves give the user a score for example:
 Less than 5 moves === 3 Stars,
 Less than 8 moves and more than 5 moves === 2 Stars,
 Less than 12 moves and more than 8 moves === 1 Star,
 More than 13 moves === 0 Stars
*/
};

function cardReset(){
/*
change all of the li to have a class of "card"
shuffle the positions of each li card in the ul
reset timer to 0:00
reset moves to 0
reset starts to 3 Stars
*/
};


function playNewGame(){
/*

If the users selects play new game then call the follow function,
cardReset();
make card disappear
*/
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
}
