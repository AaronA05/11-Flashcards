// # Advanced JavaScript Assignment: Cloze Constructors
// ### Overview
// In this week's assignment, you will create the backend for a basic flashcard application.
// The backend will essentially constitute an API that allows users to create two types of flashcards.
// 1. **Basic** flashcards, which have a front (_"Who was the first president of the United States?"_), and a back (_"George Washington"_).
// 2. **Cloze-Deleted** flashcards, which present _partial_ text (_"... was the first president of the United States."_), 
// and the full text when the user requests it (_"George Washington was the first president of the United States."_)
// #### Cloze Deletions
// A **cloze deletion** is simply a sentence that has had some of its text removed. For example, given the sentence:
// _"George Washington was the first president of the United States."_
// ...We can create a "cloze deletion" by removing the words _"George Washington"_:
// _"... was the first president of the United States."_
// This is useful for building flash card applications that forces users to remember the important part of a sentence, 
// and is [a common device in educational applications](https://en.wikipedia.org/wiki/Cloze_test).
// A flash card built this way has three parts:
// 1. The **full text**. This is the entire sentence users need to remember:  _"George Washington was the first president of the United States."_
// 2. The **cloze deletion**. This is the text we've chosen to remove: _"George Washington"_.
// 3. The **partial text**. This is what we get if we remove the **cloze deletion** from the **full text**: _"... was the first president of the United States._


// The bulk of this assignment is implementing `ClozeCard`. If you build a robust `ClozeCard` implementation, feel free to try your hand at implementing a front-end, as well.
// ### Bonuses
// * Write your constructors such that users can call them with or without the `new` keyword.
//   * Look up scope-safe constructors, and try to implement them. It takes only two additional lines of code.

var ClozeCard = require("./ClozeCard");

var CardDeck = function(name){
  this.name = name;
  this.cards = [];

  this.isClozeCard = function(easy, hard){
    var fTOP = new ClozeCard(easy, hard);
    console.log(fTOP.partial);
    console.log(fTOP.text);
    fTOP.newCard(fTOP.partial, fTOP.text);
  }

}
;

var math = new CardDeck("Math Cards");

math.isClozeCard("Caity is my wife", "Caity");


// console.log(math.cards);

// console.log("LINE 45: " + math.clozeCard.text);








//===================INQUIRER CODE=============

// var inq = require("inquirer");

// inq.prompt([
//   {
//     type: "list",
//     name: "card",
//     message: "What type of card would you like to make?",
//     choices: ["Cloze", "Basic"]
//   }
// ]).then(function(answers){
//   if(answers.card === "Cloze"){
//     inq.prompt([
//     {
//       type: "input",
//       name: "fullText",
//       message: "What is the full sentence for your card?"
//     },
//     {
//       type: "input",
//       name: "clozeText",
//       message: "What is the cloze part of your full sentence?"
//     }
//     ]).then(function(cloze){
//       console.log(cloze.fullText);
//       console.log(cloze.clozeText);
//     });
//   }

//   if(answers.card === "Basic"){
//     console.log("IN BASIC!!");
//   }

// });