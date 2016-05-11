/*
document.getElementById("wins").innerHTML = "Wins:";
document.getElementById("guessesLeft").innerHTML = "Guesses left:";
document.getElementById("lettersGuessed").innerHTML = "Letters guessed:";>
*/


//Object containing the words to be guessed
var game = {
        words: ["helvetica", "comic sans", "courier", "impact", "arial","times new roman","webdings","wingdings"],
        wins: 0,
        guessesLeft: 10, 
        fontStyle: ["", "'Comic Sans MS', cursive, sans-serif","Courier, monospace","Impact, Charcoal, sans-serif","'Arial Black', Gadget, sans-serif","'Times New Roman', Times, serif","Webdings, sans-serif","'Zapf Dingbats', sans-serif"]
    }
    //Declaring txt as global
var blanks = "___";
var j = 0;
var dashes="";
var alreadyGuessed = "";
var el = document.getElementById('wordBeingGuessed')
    //Function to change startBox visbility to hidden
function hide() {
    document.getElementById('startBox').setAttribute('style', 'visibility:hidden');
}




//Hides startBox
document.onkeydown = function(event) {
        hide();
    } 
//finds size of an object
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
//function to rewrite the html blanks as the correct length
function replaceBlanks(count, ch) {
    blanks = "";
    for (var i = 0; i < count; i++) {
        blanks += ch;
    }
    document.getElementById("wordBeingGuessed").innerHTML = blanks;
}

function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
}

function takeGuess() {
	replaceBlanks(game.words[j].length, "_");
    document.onkeyup = function(event) {
        var userLetter = String.fromCharCode(event.keyCode).toLowerCase();
        for (var i = 0;i < game.words[j].length; i++) {
        	if(game.words[j].charAt(i)==" "){
        	blanks = setCharAt(blanks, i, " ");
        	}

            else if (userLetter == game.words[j].charAt(i)) {
                blanks = setCharAt(blanks, i, userLetter);
                document.getElementById("wordBeingGuessed").innerHTML = blanks;

        	}

        	if(blanks == game.words[j]){
  				setTimeout(function(){document.getElementById('wordBeingGuessed').innerHTML = "";}, 1000);
        		//document.getElementById("").innerHTML = dashes;
        		j++;
        		game.wins++;
        		document.getElementById('wins').innerHTML = "Wins: " + game.wins;
        		setTimeout(function(){replaceBlanks(game.words[j].length, "_");},1000);
        		setTimeout(function(){el.style.fontFamily = game.fontStyle[j];},1000);
        		document.getElementById("lettersGuessed").innerHTML = "";
        		
        	}
    }
    	//if the letter is not in the word, place userLetter in lettersGuessed
    	if(blanks.indexOf(userLetter) == -1){
    		alreadyGuessed+=userLetter;

    		if(alreadyGuessed.indexOf(userLetter) != -1){
    			document.getElementById("lettersGuessed").innerHTML += userLetter;
    			//alert(alreadyGuessed);
    		};
    	}





}

}


/*for (var key in game) {
  if (game.hasOwnProperty(key)) {
    repeatChar(game[key].length,"_ ");
    alert(txt);
  }
}*/
/*for(j = 1;j<Object.size(game);j++){
replaceBlanks(game[j].length, "_");
takeGuess();

}*/

takeGuess();

