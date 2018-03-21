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
let deck = document.getElementsByClassName('deck');
let card = document.getElementsByClassName('card');
let star = document.getElementsByClassName('fa-star');
let restart = document.getElementsByClassName('restart');
let moves = document.getElementsByClassName('move')[0];
let movesCount = moves.innerText;
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
deck.addEventListener('click',function(){
  console.log('card selected');
});

card.addEventListener('click',function(){
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
function cardFlip(){
/*
li.card selected then it is assigned a class of "card open show"
  li.classList.add(open show);

li.card rotate => part of the CSS code 'transform: rotateY(0)' .open
*/
};

function cardsMatch(){
/*
create two empty variables

when one card is selected store i class value in first variable
when second card is selected store i class in second variables
compare if first and second variable have the same value return true
if they do not match then return false

if both variable match then they keep their newly assigned "card open show" class
if they don't match reset each card class to "card"

*/

};

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
