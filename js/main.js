console.log("Up and running!");
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardId;
//Check for match funtion
var checkForMatch = function() {}

		if (cardsInPlay[0]===cardsInPlay[1]) {
		alert("You've found a match");}

		else {
			alert("Sorry try again");
		}
	;

//End of check for match
//Flip card function
var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId]);
    cardsInPlay.push(cards[cardId]);
    if (cardsInPlay.length === 2) {
    checkForMatch();
}
};
flipCard(0);
flipCard(1);
//End of flip card function
