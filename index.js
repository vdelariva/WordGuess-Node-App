// requiring Word module exported from word.js
var Word = require("./word.js");
var inquirer = require("inquirer");
const chalk = require('chalk');  // Change colors on console

var possibleWords = ["florence", "paris", "madrid", "rome", "singapore", "dubai", "new york city", 
"shanghai", "london", "tokyo", "sydney", "toronto", "beijing", "moscow",
"johannesburg", "istanbul", "warsaw", "jakarta", "kuala lumpur", "mexico city",
"hong kong", "chicago", "seoul", "los angeles", "mumbai"]

const maxGuesses = 3;
var numGuesses = maxGuesses;

// Select a random word & add it to Word contructor
var randomWord = new Word();
getNewWord();
// randomWord.addWord(possibleWords[Math.floor(Math.random()*possibleWords.length)])

console.log(JSON.stringify(randomWord));

console.log(`\n${randomWord.displayWord()}\n`);

playGame();

// Start the word game
function playGame() {
    if (!randomWord.wordFound()) {
        if (numGuesses > 0) {
            getLetter();
        }
        else {
            console.log (chalk.red(`You ran out of guesses. Too bad, you lose!`));
            getNewWord();
            numGuesses = maxGuesses;
        }
    }
    else {
        console.log(chalk.green(`Congratulations, you got it right!`));
        getNewWord();
        numGuesses = maxGuesses;
    }
}

// Prompt user for a letter, check if letter is contained in the random word
function getLetter () {
    inquirer.prompt ([
        {
            type: "input",
            name: "letter",
            message: "Guess a letter!",
            // Valid characters {A-Z, a-z}
            validate: function(ch){
                if (/^[A-Z]$/i.test(ch)) {
                    return true;
                }
                return false;
            }
        }
    ])
    .then(function(response) {
        if (randomWord.chkLtr(response.letter.toLowerCase())){
            console.log(chalk.green(`\nCorrect!!!\n`));
        }
        else {
            numGuesses--
            console.log(chalk.red(`\nIncorrect!!!\n`));
            console.log(`Remaining Guesses: ${numGuesses}\n`);
        }
        console.log(`${randomWord.displayWord()}\n`);

        playGame();
    });
}

// Get a new random word

function getNewWord() {
    randomWord.addWord(possibleWords[Math.floor(Math.random()*possibleWords.length)])
}
