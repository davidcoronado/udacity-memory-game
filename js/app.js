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
/*
* This is a list of variables used to store data for the Memory Game
*/
let deck = document.querySelectorAll('.deck'); //This finds the class that represent the UL class that stores the Deck
let cardSelected; //This represents the card that has been selected in the deck[i].addEventListener Event Listener
let openCards = []; //This stores all of the cards that have been selected
let matchCount = 0; //This stores the variable that counts the number of matched cards
let cardClicked = []; //This stores the number of times a cards has been selected for the deck[i].addEventListener Event Listner
let moves = document.querySelector('.moves'); //This represents the class that shows the user the number of cards they have selected
let star = document.querySelectorAll('.fa-star'); // This represents all of the Star Icon in the page
let firstStar = star[0]; //This represents the first Star Icon on the page
let secondStar = star[1]; //This represents the second Star Icon on the page
let thirdStar = star[2]; //This represents the third Star Icon on the page
let secondsTimer = 0; //This stores the variable for the seconds for the timerStopWatch Function
let minutesTimer = 0; //This stores the variable for the minutes for the timerStopWatch Function
let timer = document.querySelectorAll('.timer'); //This represents the timer class that shows the Timer Count
let seconds = document.querySelectorAll('.seconds'); //This represents the seconds class that shows the Timer second count
let minutes = document.querySelectorAll('.minutes'); //This represents the minutes class that shoes the Timer minutes count
let firstTimeCardClick = false; //This variable is used a way to know if the timerStopWatch Function should be reset.
let deckOfCards = [ 'fa fa-anchor','fa fa-bolt', 'fa fa-cube','fa fa-anchor',
  'fa fa-leaf','fa fa-bicycle','fa fa-diamond','fa fa-bomb',
  'fa fa-leaf','fa fa-bomb','fa fa-bolt','fa fa-bicycle',
  'fa fa-paper-plane-o','fa fa-cube', 'fa fa-paper-plane-o', 'fa fa-diamond'
]; //This variable is used to store the Cards Icon Class <i class=""> each time the cards are shuffled
let restart = document.querySelector('.restart'); //This represents the Restart varialbe for the Restart icon used to reset the (shuffle) deck of cards
let cardValues = document.querySelectorAll('.deck .fa'); //Selects all <i class="">
let matchingCardz = document.querySelectorAll('.deck li'); //select all cards className in the deck
let totalTime = []; //stores the value of the timer

//List of EventListeners

/*
* This EventListener is triggered each time a card from the .deck is selected. Once a card selected a series of funcations are called
* which check if the cards match, more than two cards have been selected, check if the Timer needs to be turned on, etc. Please see
* functions for more details about each function that is called.
*/
for(var i = 0; i < deck.length; i++){
    deck[i].addEventListener('click', function(event){
      if (openCards.length > 1 ){
        return;
      }
      cardSelected = event.target;
      if (openCards[0] === cardSelected){
        console.log("card had already been selected")
        return;
      }
      cardClicked++;
      if (firstTimeCardClick === false){
          firstTimeCardClick = true;
          matchCount = 0;
          setTimeout(timerStopWatch,1000);
          console.log("timer turned on")
      };
      console.log('card Selected');
      cardFlip(cardSelected);
      cardsOpened(cardSelected);
      if(openCards.length > 1) {
        console.log("all cards match");
        cardsMatch();
      }
      cardClickedTotal();
      starRating(cardClicked);
})};


/*
* This EventListener is activated when the Reset icon is selected and the game is reset.
*/
restart.addEventListener('click', function(){
  resetCards();
  matchCount = 8;
  for(var o = 0; o < matchingCardz.length; o++){
  matchingCardz[o].className = "card"
  }
  timerReset();
  movesReset();
  starRatingReset();
  firstTimeCardClick = false;
});



//List of Functions

/*
* This function reset the Timer to time stamp to zero
*/
function timerReset(){
  timer[0].textContent = "Timer 0:00";
};

/*
* This function reset the Moves count to zero ("0")
*/
function movesReset(){
  moves.textContent = "0";
};

/*
* This function reset the three Stars back to full
*/
function starRatingReset(){
  firstStar.classList = "fa fa-star";
  secondStar.classList = "fa fa-star";
  thirdStar.classList = "fa fa-star";
  cardClicked = 0;
};

/*
* This function reset the order of the deck of cards
*/
function resetCards(){
	shuffle(deckOfCards);
  for(var i = 0; i < cardValues.length; i++){
    cardValues[i].className = deckOfCards[i]
  }
};

/*
* This function flips the Card over to reveal it's card type
*/
function cardFlip(card){
  card.classList += " open";
  card.classList += " show";
};

/*
* This function saves which cards have been opened
*/
function cardsOpened(card){
  openCards.push(card);
  console.log(openCards);
};

/*
* This function checks if the cards open match. If they match then both cards
* background colors are chnaged from blue to green. If the cards do not match
* then both cards are flipped back over.
*/
function cardsMatch(){
  let cardOne = openCards[0].firstElementChild.className;
  let cardTwo = openCards[1].firstElementChild.className;
  console.log(cardOne);
  console.log(cardTwo);
  if(cardOne === cardTwo){
    setTimeout(matchingCards,1025);
    console.log("cards match");
    return
  } else {
    setTimeout(clearCards, 1025);
    console.log("cards do not match");
    return
  }
};

/*
* This function reset the Timer to time stamp to zero
*/
function cardClickedTotal(){
  moves.textContent = cardClicked;
};

/*
* This function counts the moves of the user and sets the star rating depend on the number of cards clicked
*/
function starRating(x){
  switch (true) {
    case (cardClicked < 16):
      //three stars
      console.log("Less than 8 moves");
      break;
    case (cardClicked > 16 && cardClicked < 20):
      //two stars
      thirdStar.classList = "fa fa-star-o";
      console.log("Less than 14 moves but more than 8 moves");
      break;
    case (cardClicked > 20 && cardClicked < 24):
      //one stars
      secondStar.classList = "fa fa-star-o";
      thirdStar.classList = "fa fa-star-o";
      console.log("Less than 20 moves but more than 13 moves");
      break;
    case (cardClicked > 25):
      //no stars
      firstStar.classList = "fa fa-star-o";
      secondStar.classList = "fa fa-star-o";
      thirdStar.classList = "fa fa-star-o";
      console.log("More than 20 moves")
      break;
  }
  star[3].classList = star[0].className;
  star[4].classList = star[1].className;
  star[5].classList = star[2].className;
};

/*
* This function flips any cards that have been opened back to close.
*/
function clearCards(){
  //Resets the Class Name back to <li class="card"> from <li class="card open show">
  openCards[0].classList.remove("open");
  openCards[0].classList.remove("show");
  openCards[1].classList.remove("open");
  openCards[1].classList.remove("show");
  //Resets the openCards array back to empty
  openCards = [];
};

/*
* This function checks if the two cards that are open match
*/
function matchingCards(){
  matchCount++;
  //Resets the Class Name back to <li class="card"> from <li class="card open show">
  openCards[0].classList.remove("open");
  openCards[0].classList.remove("show");
  openCards[1].classList.remove("open");
  openCards[1].classList.remove("show");
  //Sets the Class Name to <li class="card match">
  openCards[0].classList += " match";
  openCards[1].classList += " match";
  //Resets the openCards array back to empty
  openCards = [];
  if(matchCount === 8 ){
    allCardsMatch();
    console.log("all cards match");
  }
};


/*
* This function pops up a modal if all of the cards in the deck match. It also Resets
* the timer, moves, star rating and the varialbe firstTimeCardClick used to turn on the
* timer for the game.
*/
function allCardsMatch(){
  $('#myModal').modal('show')
  resetCards();
  for(var o = 0; o < matchingCardz.length; o++){
  matchingCardz[o].className = "card"
  }
  timerReset();
  movesReset();
  starRatingReset();
  firstTimeCardClick = false;
};


/*
* This function is the logic behind the Timer. It turns the timer on and off,
* along with printing out the count for the seconds and minutes of the Timer.
*/
function timerStopWatch(){
  if (matchCount === 8){
    totalTime = [minutesTimer,secondsTimer];
    timer[1].textContent = "Timer " + totalTime[0] + ":" + totalTime[1];
    secondsTimer = 0;
    minutesTimer = 0;
    return;
  }
secondsTimer = secondsTimer + 1;
setTimeout(timerStopWatch,1000);
if (secondsTimer === 60) {
  secondsTimer = 0;
  minutesTimer = minutesTimer + 1};
  timer[0].textContent = "Timer " + minutesTimer + ":" + secondsTimer;
};

/*
* This function is the logic in how the deckOfCards array are shuffled
*/
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
