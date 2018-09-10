var cards = [
{
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
},
{
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
},
{
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
 },
{
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
},
{
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
},
{
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
},
{
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
},
{
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
}
];


var cardOne = cards[0];
var cardTwo = cards[1];

var cardsInPlay = [];
cardsInPlay.push(cards[cardId].rank);

   
var cardsMatch = function () {
    if (cardsInPlay.length === 2 && cardOne === cardTwo){
        return alert("You found a match!")
    } else { 
        return alert("Sorry, try again!")
    }
};




var checkForMatch = function() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!")
    } else {
        console.log("Sorry, try again.")
        }
};

var flipCard = function() {
    var cardId = this.getAttribute('data-id');
    this.setAttribute('src', cards[cardId].cardImage);
    
/*    
    if () 
    {
    ;
    }
    else (){
        ;
    }   
};
*/

  
checkForMatch();



console.log("User flipped " + cards[cards[cardId].rank]);
console.log("User flipped " + cards[cards[cardId].rank]);
    
console.log(cards[cards[cardId].cardImage]);
console.log(cards[cards[cardId].suit]);




var createBoard = function() {
    
    for (var i = 0; i < cards.length; i++) {
        var createElement = document.createElement('img');
        var cardElement = [
            cardElement.setAttribute('src', 'images/back.png'),
            cardElement.setAttribute('data-id', i),
            cardElement.addEventListener('click', flipCard);
            document.getElementById('game-board').appendChild(cardElement)],
    }
};

createBoard();