// requiring Letter module exported from letter.js
var Letter = require("./letter.js");

// constructor function for creating Word objects
var Word = function() {
    // this.letters will hold all letter objects that comprise the word
    this.letters = [];
    // method that displays all the letters as a word.
    this.displayWord = () => {
        let word = ""
        for (let i=0; i < this.letters.length; i++){
            word += this.letters[i] + " ";
        }
        return(word);
    };
    // method to check if letter in contained in the word
    this.chkLtr = (ch) => {
        for (let i=0; i < this.letters.length; i++){
            this.letters[i].chkLtr(ch);
        }
    }
    // method to add a word as an array letter contructors
    this.addWord = (word) => {
        for (let i=0; i < word.length; i++) {
            this.letters.push(new Letter(word[i]));
            if ( word[i] === " ") {
                this.letters[i].ltrGuessed = true;
            }

        }
    }
};

// var d = new Letter("d");
// var o = new Letter("o");
// var g = new Letter("g");

// var dog = new Word();

// dog.letters.push(d);
// dog.letters.push(o);
// dog.letters.push(g);

// console.log(dog.displayWord());

// dog.chkLtr("d");

// console.log(dog.displayWord());
  
// exporting Word constructor. We will require it in index.js
module.exports = Word;
  
