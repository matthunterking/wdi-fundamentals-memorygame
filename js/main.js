console.log("Up and running");
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
	suit: "diamnonds",
	cardImage: "images/king-of-diamons.png"
}
];
//console.log("User flipped" + cardTwo);
//console.log("User flipped" + cardFour);
var cardsInPlay = [];
var checkForMatch = function() {
//document.setAttribute('src', this.cards[cardsId].cardImage);
if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You've found a match!");
}
else {
	alert("Sorry, try again.");
}
};
var flipCard = function() {
	cardId = this.getAttribute('data-id');
console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
cardsInPlay.push (cards[cardId].rank);
//console.log(cards[cardId].cardImage);
//console.log(cards[cardId].suit);
this.setAttribute('src', cards[cardId].cardImage);
if (cardsInPlay.length === 2) {
	checkForMatch();
	cardsInplay = [];
}
};
var createBoard = function (){
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}
createBoard();


//if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
//alert("You found a match!");
//	}
//	else {
//		alert("Sorry, try again");
//	}
//}	
