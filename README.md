# WordGuess-Node-App

## Description: ##

A different take on the trivia game developed earlier but written in node.js. This app uses the console to interface with the user.

## Implementation ##

Using node.js and various libraries, created a simple word guessing game using the terminal as the user interface.

When the app is initiated, the user is greeted and asked if they would like to play the game. If the user enters 'y', then the game proceeds. If not, then the games ends and the user is returned to the console prompt. A random city name is selected from a predetermined list. The blank city name is displayed with an underscore representing each letter in the name.

The user is prompted to select a letter. If the letter is contained in the city name, the letter is revealed and the user is notified of their correct response. If the letter is not in the city name, the number of allowed guesses is decremented and the user is notified of their incorrect response and the number of remaining guesses.

The user will continue to be prompted for a new letter until the city name is guessed or the user runs out of guesses. The user will be notified if they won or lost the game and prompted if they want to play the game again. If they choose to play again, a new random city name is selected and the game restarts. Otherwise, game over...

## Tools ##

**Libraries**
* inquirer
* chalk

## Developer Notes ##

* Validation: The app will only allow alpha characters to be entered. [A-Z, a-z]
* Used chalk library to allow for pretty colors to be displayed on the console :)
