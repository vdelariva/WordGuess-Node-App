var Letter = function (ltr) {
    this.ltr = ltr;
    this.blankLtr = "_";
    this.ltrGuessed = false;
    this.toString = () => {
        if (this.ltrGuessed){
            return this.ltr;
        }
        else {
            return this.blankLtr;
        }
    };
    this.chkLtr = (ch) => {
        if (this.ltr === ch) {
            this.ltrGuessed = true;
            return true;
        }
        else {
            return false;
        }
    };

}
// var alpha = new Letter ("a");

// console.log(alpha + "");
// console.log(alpha.chkLtr("d"));

// console.log(alpha.chkLtr("a"));
// console.log(alpha + "");

// exporting Letter constructor
module.exports = Letter;
