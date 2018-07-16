// requiring Word module exported from word.js
var Word = require("./word.js");
var inquirer = require("inquirer");

var possibleWords = ["florence", "paris", "madrid", "rome", "singapore", "dubai", "new york city", 
"shanghai", "london", "tokyo", "sydney", "toronto", "beijing", "moscow",
"johannesburg", "istanbul", "warsaw", "jakarta", "kuala lumpur", "mexico city",
"hong kong", "chicago", "seoul", "los angeles", "mumbai"]

const maxGuesses = 10;
var numGuesses = maxGuesses;

// Select a random word & add it to Word contructor
var randomWord = new Word();
randomWord.addWord(possibleWords[Math.floor(Math.random()*possibleWords.length)])

console.log(JSON.stringify(randomWord));

console.log(randomWord.displayWord())

inquirer.prompt ([
    {
        type: "input",
        name: "letter",
        message: "Guess a letter!",
        validate: function(ch){
            if (/^[A-Z]$/i.test(ch)) {
                return true;
            }
            return false;
        }

    }
])
.then(function(response) {
   
    // do something
    console.log(`response: ${JSON.stringify(response)}`);
    
});
