// variable needed in the global scope
// Arrays
const htmlArray =[a, abbr, address, area, article, aside, audio, b, base, bdi, bdo, blockquote, body, br, button, canvas, caption, cite, code, col, colgroup, dd, datalist, del, details, dfn, dialog, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, head, header, hr, html, i, iframe, img, input, ins, kbd, label, legend, li, link, main, map, mark, menu, menuitem, meta, meter, nav, noscript, object, ol, optgroup, option, output, p, param, picture, pre, progress, q, rp, rt, ruby, s, samp, script, section, select, small, source, span, strong, style, sub, summary, sup, table, tbody, td, template, textarea, tfoot, th, thead, time, title, tr, track, u, ul, video, wbr];
const cssArray = [cssCharset, cssFontface, cssFontfeaturevalues, cssImport, cssKeyframes, cssMedia, cssAligncontent, cssAlignitems, cssAlignself, cssAll, cssAnimation, cssAnimationdelay, cssAnimationdirection, cssAnimationduration, cssAnimationfillmode, cssAnimationiterationcount, cssAnimationname, cssAnimationplaystate, cssAnimationtimingfunction, cssBackfacevisibility, cssBackground, cssBackgroundblendmode, cssBackgroundattachment, cssBackgroundclip, cssBackgroundcolor, cssBackgroundimage, cssBackgroundorigin, cssBackgroundposition, cssBackgroundrepeat, cssBackgroundsize, cssBorder, cssBorderbottom, cssBorderbottomcolor, cssBorderbottomleftradius, cssBorderbottomrightradius, cssBorderbottomstyle, cssBorderbottomwidth, cssBordercollapse, cssBordercolor, cssBorderimage, cssBorderimageoutset, cssBorderimagerepeat, cssBorderimageslice, cssBorderimagesource, cssBorderimagewidth, cssBorderleft, cssBorderleftcolor, cssBorderleftstyle, cssBorderleftwidth, cssBorderradius, cssBorderright, cssBorderrightcolor, cssBorderrightstyle, cssBorderrightwidth, cssBorderspacing, cssBorderstyle, cssBordertop, cssBordertopcolor, cssBordertopleftradius, cssBordertoprightradius, cssBordertopstyle, cssBordertopwidth, cssBorderwidth, cssBottom, cssBoxdecorationbreak, cssBoxshadow, cssBoxsizing, cssBreakafter, cssBreakbefore, cssBreakinside, cssCaptionside, cssCaretcolor, cssClear, cssClip, cssColor, cssColumncount, cssColumnfill, cssColumngap, cssColumnrule, cssColumnrulecolor, cssColumnrulestyle, cssColumnrulewidth, cssColumnspan, cssColumnwidth, cssColumns, cssContent, cssCounterincrement, cssCounterreset, cssCursor, cssDirection, cssDisplay, cssEmptycells, cssFilter, cssFlex, cssFlexbasis, cssFlexdirection, cssFlexflow, cssFlexgrow, cssFlexshrink, cssFlexwrap, cssFloat, cssFont, cssFontfamily, cssFontfeaturesettings,cssFontkerning, cssFontlanguageoverride, cssFontsize, cssFontsizeadjust, cssFontstretch, cssFontstyle, cssFontsynthesis, cssFontvariant, cssFontvariantalternates, cssFontvariantcaps, cssFontvarianteastasian, cssFontvariantligatures, cssFontvariantnumeric, cssFontvariantposition, cssFontweight, cssGrid, cssGridarea, cssGridautocolumns, cssGridautoflow, cssGridautorows, cssGridcolumn, cssGridcolumnend, cssGridcolumngap, cssGridcolumnstart, cssGridgap, cssGridrow, cssGridrowend, cssGridrowgap, cssGridrowstart, cssGridtemplate, cssGridtemplateareas, cssGridtemplatecolumns, cssGridtemplaterows, cssHangingpunctuation, cssHeight, cssHyphens, cssImageorientation, cssImagerendering, cssImageresolution, cssJustifycontent, cssLeft, cssLetterspacing, cssLinebreak, cssLineheight, cssListstyle, cssListstyleimage, cssListstyleposition, cssListstyletype, cssMargin, cssMarginbottom, cssMarginright, cssMarginleft, cssMargintop, cssMaxheight, cssMaxwidth, cssMinheight, cssMinwidth, cssObjectfit, cssObjectposition, cssOpacity, cssOrder, cssOrphans, cssOutline, cssOutlinecolor, cssOutlineoffset, cssOutlinestyle, cssOutlinewidth, cssOverflow, cssOverflowwrap, cssOverflowx, cssOverflowy, cssPadding, cssPaddingbottom, cssPaddingleft, cssPaddingright, cssPaddingtop, cssPagebreakafter, cssPagebreakbefore, cssPagebreakinside, cssPerspective, cssPerspectiveorigin, cssPosition, cssQuotes, cssResize, cssRight, cssTabsize, cssTablelayout, cssTextalign, cssTextalignlast, cssTextcombineupright, cssTextdecorationcolor, cssTextdecoration, cssTextdecorationline, cssTextdecorationstyle, cssTextindent, cssTextjustify, cssTextorientation, cssTextoverflow, cssTextshadow, cssTexttransform, cssTextunderlineposition, cssTop, cssTransform, cssTransformorigin, cssTransformstyle, cssTransition, cssTransitiondelay, cssTransitionduration, cssTransitionproperty, cssTransitiontimingfunction, cssUnicodebidi, cssUserselect, cssVerticalalign, cssVisibility, cssWhitespace, cssWidows, cssWidth, cssWordbreak, cssWordspacing, cssWordwrap, cssZindex];
// Allowed Characters array
const allowedChar= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","-"];
// Performance comment arrays
const kudos = ["","Bravo","Well, that for sure looked easy", "Easy enough, huh?","GRrrreat","That one was a no-brainer...","Really?","Think you can do this again?","You are beating the Matrix!","Achievement unlocked: GOD LEVEL!!","Wow, you have to be a TA, aren't you?","...Parker, is it you?","STOP THIS, I'M BEAT!!!"]
const sucker = ["Oops, sorry about that", "Hmm... that one was not obvious, try again!","I am sending you a picture of a kitty, for your trouble...","Were you paying attention?","Ok, wanna cry?","Ready to give up?","You have to be good at something else, right...?","Really?", "I expected better. I am soooo disappointed","Should I dumb it down for you?","Here is a hing: the next one is not something you know. Because, well, you don't know much obviously..."]

var keyName; // name of the key hit
var validChar;  // valid key: name of the key if it's in the array of allowedChar
var numGuesses; // number of guesses the player will be allowed
var attemptedGuesses= []; // all the non redundant guesses so far
var losses = 0; // counting total wins
var wins = 0; // counting total losses
var gameTally = 0; // counting games
var gameWon = false; // has the game been won yet?
var riddle // riddle is the name of the randomized object
var remainingGuesses = numGuesses;
var maskedWord;


// Reset the game (to allow multiple consecutive games)
function resetGame() {
    remainingGuesses = numGuesses;
    gameStarted = false;

    // random Arrays
    let randomHtml = htmlArray[Math.floor(Math.random()*htmlArray.length)];
    let randomCss = cssArray[Math.floor(Math.random()*cssArray.length)];

    // Clear array of attempted guesses
    attemptedGuesses = [];
    // setting the masked word
    let riddle = randomHtml.name; // riddle is the name of the randomized object
    let maskedWord = [];
    for (let i = 0; i < riddle.length; i++) {
        maskedWord[i] = " _ ";
    }

    let wordToGuess = riddle.split("");

    // number guesses allowed assigned to variable numGuesses (if word too small: less guesses)
    var numGuesses;
    if (riddle.length < 4) {
        numGuesses = riddle.length + 2;
    } 
    else {
        numGuesses = riddle.length + 5;
    }
    var remainingGuesses = numGuesses;

    // // Build the guessing word and clear it out
    // for (var i = 0; i < selectableWords[currentWordIndex].length; i++) {
    //     guessingWord.push("_");
    // }
    // Hide game over and win images/text
    // document.getElementById("pressKeyTryAgain").style.cssText= "display: none";
    // document.getElementById("gameover-image").style.cssText = "display: none";
    // document.getElementById("youwin-image").style.cssText = "display: none";

    // Show display
    updateGameStats();
};

//  New content in HTML after each game
function updateGameStats() {
    // let w3Link = "(click this <" + randomHtml.url + ">link</a> for more information)";
    // let mysteryRevealed = "The attribute to guess was: \"" + riddle + "\""; 
    // let victoryMessage = "You have won " + wins + " game(s) so far. " + kudos[wins]; 
    // // document.querySelector("#element_definition").innerHTML= randomHtml.definition //MY
    // // document.querySelector("#word_to_guess").innerHTML= maskedWord.join(" ") //MY
    // document.querySelector("#num_guesses").innerHTML= numGuesses; //MY
    // document.querySelector("#rem_guesses").innerHTML= remainingGuesses; //MY
    
    // document.getElementById("totalWins").innerText = wins; // wins
    
    // document.getElementById("currentWord").innerText = "";  // wins
    // for (var i = 0; i < guessingWord.length; i++) { // wins
        // document.getElementById("currentWord").innerText += guessingWord[i]; // wins
    // } // wins
    // document.getElementById("remainingGuesses").innerText = remainingGuesses; // wins
    // document.getElementById("guessedLetters").innerText = guessedLetters; // wins
    // if(remainingGuesses <= 0) { // wins
    //     document.getElementById("pressKeyTryAgain").style.cssText = "display:block"; // wins
    //     hasFinished = true; // wins
    };

function checkGuessValidity() {
    if (remainingGuesses > 0) {
        if(gameWon !== true) {
            for (var j = 0; j<allowedChar.length; j++) {
                if (keyName === allowedChar[j]) {
                // console.log(keyName + " is a valid character")
                    validChar = keyName;
                    if (attemptedGuesses.indexOf(validChar) <0) {
                        attemptedGuesses.push(validChar);
                        counter();
                    }
                }
            }
        }
    }      
}

updateGameStats();
resetGame();

document.onkeyup = function(event) {
    keyName = event.key;
    checkGuessValidity();
    checkWin();
    if(gameWon) {
        resetGame();
        updateGameStats();
        gameWon = false;
    } else {            
        guessForTheWin();
    }
}
    
    // // Content to populate on main page
    // document.querySelector("#element_type").innerHTML= randomHtml.type
    // // document.querySelector("#victories").innerHTML= victoryMessage    
    // document.querySelector("#rem_guesses").innerHTML= remainingGuesses;
    // document.querySelector("#element_example").innerHTML= randomHtml.example
    // document.querySelector("#guesses").innerHTML= attemptedGuesses.join("-")

// document.querySelector("#l_bracket").innerHTML= lBracket
// document.querySelector("#r_bracket").innerHTML= rBracket


/* 
******************
THIS IS THE FUNCTION THAT CHECKS IF THE KEY IS A LEGIT CHARACTER, ADDS IT TO THE ARRAY OF  ------ GOOD!
******************
*/




// function makeGuess(letter) {
//     if (remainingGuesses > 0) {
//         if (!gameStarted) {
//             gameStarted = true;
//         }

//         // Make sure we didn't use this letter yet
//         if (guessedLetters.indexOf(letter) === -1) {
//             guessedLetters.push(letter);
//             evaluateGuess(letter);
//         }
//     }
    
//     updateDisplay();
//     checkWin();
// };   



/* 
******************
THIS IS THE FUNCTION THAT COUNTS THE REMAINING GUESSES
******************
*/

function counter() {
    for (var l = 0; l<wordToGuess.length; l++) {
        if (wordToGuess.indexOf(validChar) <0) {
            console.log("remainingGuesses before: " + remainingGuesses);
            remainingGuesses--;
            return remainingGuesses;
            break;
            console.log("remainingGuesses after: " + remainingGuesses);
        }
    }
}
    
/* 
******************
THIS IS THE FUNCTION THAT FILLS THE BLANKS AFTER EACH SUCCESSFUL GUESS ------ GOOD!
******************
*/

function guessForTheWin () {
    for (var i = 0; i < riddle.length; i++) {
        if (validChar === riddle[i]) {
            maskedWord.splice(i,1,validChar);
            document.querySelector("#word_to_guess").innerHTML= maskedWord.join(" ")
        }
    }
}
/* 
******************
THIS IS THE FUNCTION TO CHECK IF THE GAME HAS BEEN WON ------ GOOD!
******************
*/

function checkWin() {
    if(maskedWord.indexOf("_")=== -1) {
        wins++;
        gameWon = true;
        }
    }

// function checkWin() {
//     if(maskedWord.indexOf("_") === -1) {
//         document.getElementById("youwin-image").style.cssText = "display: block";
//         document.getElementById("pressKeyTryAgain").style.cssText= "display: block";
//         wins++;
//         hasFinished = true;
//     }
// };

/* THIS IS WORKING SO FAR!!
NEED TO CREATE A LOOPING GAME, AND RESET */