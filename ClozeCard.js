// * Create a new file named `ClozeCard.js`:
//   * This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.:
//     `module.exports = ClozeCard;`
//   * The constructor should accept two arguments: `text` and `cloze`.
//   * The constructed object should have a `cloze` property that contains _only_ the cloze-deleted portion of the text.
//   * The constructed object should have a `partial` property that contains _only_ the partial text.
//   * The constructed object should have a `fullText` property that contains _only_ the full text.
//   * The constructor should throw or log an error when the cloze deletion does _not_ appear in the input text.
//   * Use prototypes to attach these methods, wherever possible.

//====================EXAMPLE============================

// var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
// console.log(firstPresidentCloze.cloze);
// // "George Washington"

// console.log(firstPresidentCloze.partial);
// // " ... was the first president of the United States."

// console.log(firstPresidentCloze.fullText);
// // "George Washington was the first president of the United States."


// var brokenCloze = new ClozeCard("This doesn't work", "oops");
// // Should throw or log an error because "oops" doesn't appear in "This doesn't work"

var BasicCard = require("./BasicCard");

// var myCards = [];

var ClozeCard = function(text, cloze){
	if(!(this instanceof ClozeCard)){
		return new ClozeCard(text, cloze);
	}
	// this.myCards = [];
	this.text = text,
	this.cloze = cloze,
	this.partial = text.replace(cloze, "....");
	this.IsCloze = function(){
		if(this.text.indexOf(this.cloze) >= 0){
			this.partial = text.replace(cloze, "....");

		}else{
			this.text = "Your cloze text is not present in your full text";
			this.cloze = "Fix your error";
			this.partial = "Sorry text not available";
		}
	}
}

ClozeCard.prototype.newCard = function(alpha, beta){
	var newCard = new BasicCard(alpha, beta);
	console.log("LINE 53!!");
}

module.exports = ClozeCard;

// var cardTwo = new ClozeCard("One plus one equals two", "One");
// var cardThree = new ClozeCard("Caity is my wife", "Caity");

// cardTwo.newCard(cardTwo.partial, cardTwo.cloze);
// cardThree.newCard(cardThree.partial, cardThree.cloze);


// var front = cardTwo.myCards[0];
// console.log(front.front);

