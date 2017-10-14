// * Create a new file named `BasicCard.js`:
//   * This file should define a Node module that exports a constructor for creating basic flashcards, e.g.:
//     `module.exports = BasicCard;
//   * The constructor should accept two arguments: `front` and `back`.
//   * The constructed object should have a `front` property that contains the text on the front of the card.
//   * The constructed object should have a `back` property that contains the text on the back of the card.

//==================EXAMPLE=======================
// var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");
// console.log(firstPresident.front);
// // "Who was the first president of the United States?"

// console.log(firstPresident.back);
// // "George Washington"


var BasicCard = function(front, back){
	if(!(this instanceof BasicCard)){
		return new BasicCard(front, back);
	}
	this.front = front,
	this.back = back
}

module.exports = BasicCard;