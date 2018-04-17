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
let matchCount = 0;
let cardClicked = [];
let moves = document.querySelector('.moves');
let star = document.querySelectorAll('.fa-star');
let firstStar = star[0];
let secondStar = star[1];
let thirdStar = star[2];
let secondsTimer = 0;
let minutesTimer = 0;
let timer = document.querySelectorAll('.timer');
let seconds = document.querySelectorAll('.seconds');
let minutes = document.querySelectorAll('.minutes');
let firstTimeCardClick = false;
let deckOfCards = [ 'fa fa-anchor','fa fa-bolt', 'fa fa-cube','fa fa-anchor',
  'fa fa-leaf','fa fa-bicycle','fa fa-diamond','fa fa-bomb',
  'fa fa-leaf','fa fa-bomb','fa fa-bolt','fa fa-bicycle',
  'fa fa-paper-plane-o','fa fa-cube', 'fa fa-paper-plane-o', 'fa fa-diamond'
];
let restart = document.querySelector('.restart');
let cardValues = document.querySelectorAll('.deck .fa');
let matchingCardz = document.querySelectorAll('.deck li'); //select all cards .className in the deck
let totalTime = [];

//List of EventListeners
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
function timerReset(){
  timer[0].textContent = "Timer 0:00";
};

function movesReset(){
  moves.textContent = "0";
};

function starRatingReset(){
  firstStar.classList = "fa fa-star";
  secondStar.classList = "fa fa-star";
  thirdStar.classList = "fa fa-star";
  cardClicked = 0;
};

function resetCards(){
	shuffle(deckOfCards);
  for(var i = 0; i < cardValues.length; i++){
    cardValues[i].className = deckOfCards[i]
  }
};


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
    setTimeout(matchingCards,1025);
    console.log("cards match");
    return
  } else {
    setTimeout(clearCards, 1025);
    console.log("cards do not match");
    return
  }
};

function cardClickedTotal(){
  moves.textContent = cardClicked;
};

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

function clearCards(){
  //Resets the Class Name back to <li class="card"> from <li class="card open show">
  openCards[0].classList.remove("open");
  openCards[0].classList.remove("show");
  openCards[1].classList.remove("open");
  openCards[1].classList.remove("show");
  //Resets the openCards array back to empty
  openCards = [];
};

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


//If All Cards Match
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


// Timer Function
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
