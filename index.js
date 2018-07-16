// requiring Word module exported from word.js
var Word = require("./word.js");
var inquirer = require("inquirer");
const chalk = require('chalk');  // Change colors on console

var possibleWords = ["florence", "paris", "madrid", "rome", "singapore", "dubai", "new york city", 
"shanghai", "london", "tokyo", "sydney", "toronto", "beijing", "moscow",
"johannesburg", "istanbul", "warsaw", "jakarta", "kuala lumpur", "mexico city",
"hong kong", "chicago", "seoul", "los angeles", "mumbai"]

const maxGuesses = 10;
var numGuesses = maxGuesses;

var randomWord;

resetGame();

// Functions:
//
// Play the word game
function playGame() {
    if (!randomWord.wordFound()) {
        if (numGuesses > 0) {
            getLetter();
        }
        else {
            console.log(chalk.red(`You ran out of guesses. Too bad, you lose!\n`));
            console.log("Next word:")
            resetGame();
        }
    }
    else {
        console.log(chalk.green(`Congratulations, you got it right!\n`));
        console.log("Next word:")
        resetGame();
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
        // Convert letter to lowercase, check if letter is found in the word, if found, let player know they guessed correctly
        if (randomWord.chkLtr(response.letter.toLowerCase())){
            console.log(chalk.green(`\nCorrect!!!\n`));
        }
        else {
            // else decrement the number of remaining guesses, alert player they guessed incorrectly
            numGuesses--
            console.log(chalk.red(`\nIncorrect!!!\n`));
            console.log(`Remaining Guesses: ${numGuesses}\n`);
        }
        console.log(`${randomWord.displayWord()}\n`);
        // Continue playing game
        playGame();
    });
}

// Resets the random word and starts the game

function resetGame() {
    // Select a random word & add it to Word contructor
    randomWord = new Word();
    randomWord.addWord(possibleWords[Math.floor(Math.random()*possibleWords.length)])
    console.log(`\n${randomWord.displayWord()}\n`);
    numGuesses = maxGuesses;
    playGame();
}
