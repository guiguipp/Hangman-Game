// Arrays
const htmlArray =[a, abbr, address, area, article, aside, audio, b, base, bdi, bdo, blockquote, body, br, button, canvas, caption, cite, code, col, colgroup, dd, datalist, del, details, dfn, dialog, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, head, header, hr, html, i, iframe, img, input, ins, kbd, label, legend, li, link, main, map, mark, menu, menuitem, meta, meter, nav, noscript, object, ol, optgroup, option, output, p, param, picture, pre, progress, q, rp, rt, ruby, s, samp, script, section, select, small, source, span, strong, style, sub, summary, sup, table, tbody, td, template, textarea, tfoot, th, thead, time, title, tr, track, u, ul, video, wbr];
const cssArray = [cssCharset, cssFontface, cssFontfeaturevalues, cssImport, cssKeyframes, cssMedia, cssAligncontent, cssAlignitems, cssAlignself, cssAll, cssAnimation, cssAnimationdelay, cssAnimationdirection, cssAnimationduration, cssAnimationfillmode, cssAnimationiterationcount, cssAnimationname, cssAnimationplaystate, cssAnimationtimingfunction, cssBackfacevisibility, cssBackground, cssBackgroundblendmode, cssBackgroundattachment, cssBackgroundclip, cssBackgroundcolor, cssBackgroundimage, cssBackgroundorigin, cssBackgroundposition, cssBackgroundrepeat, cssBackgroundsize, cssBorder, cssBorderbottom, cssBorderbottomcolor, cssBorderbottomleftradius, cssBorderbottomrightradius, cssBorderbottomstyle, cssBorderbottomwidth, cssBordercollapse, cssBordercolor, cssBorderimage, cssBorderimageoutset, cssBorderimagerepeat, cssBorderimageslice, cssBorderimagesource, cssBorderimagewidth, cssBorderleft, cssBorderleftcolor, cssBorderleftstyle, cssBorderleftwidth, cssBorderradius, cssBorderright, cssBorderrightcolor, cssBorderrightstyle, cssBorderrightwidth, cssBorderspacing, cssBorderstyle, cssBordertop, cssBordertopcolor, cssBordertopleftradius, cssBordertoprightradius, cssBordertopstyle, cssBordertopwidth, cssBorderwidth, cssBottom, cssBoxdecorationbreak, cssBoxshadow, cssBoxsizing, cssBreakafter, cssBreakbefore, cssBreakinside, cssCaptionside, cssCaretcolor, cssClear, cssClip, cssColor, cssColumncount, cssColumnfill, cssColumngap, cssColumnrule, cssColumnrulecolor, cssColumnrulestyle, cssColumnrulewidth, cssColumnspan, cssColumnwidth, cssColumns, cssContent, cssCounterincrement, cssCounterreset, cssCursor, cssDirection, cssDisplay, cssEmptycells, cssFilter, cssFlex, cssFlexbasis, cssFlexdirection, cssFlexflow, cssFlexgrow, cssFlexshrink, cssFlexwrap, cssFloat, cssFont, cssFontfamily, cssFontfeaturesettings,cssFontkerning, cssFontlanguageoverride, cssFontsize, cssFontsizeadjust, cssFontstretch, cssFontstyle, cssFontsynthesis, cssFontvariant, cssFontvariantalternates, cssFontvariantcaps, cssFontvarianteastasian, cssFontvariantligatures, cssFontvariantnumeric, cssFontvariantposition, cssFontweight, cssGrid, cssGridarea, cssGridautocolumns, cssGridautoflow, cssGridautorows, cssGridcolumn, cssGridcolumnend, cssGridcolumngap, cssGridcolumnstart, cssGridgap, cssGridrow, cssGridrowend, cssGridrowgap, cssGridrowstart, cssGridtemplate, cssGridtemplateareas, cssGridtemplatecolumns, cssGridtemplaterows, cssHangingpunctuation, cssHeight, cssHyphens, cssImageorientation, cssImagerendering, cssImageresolution, cssJustifycontent, cssLeft, cssLetterspacing, cssLinebreak, cssLineheight, cssListstyle, cssListstyleimage, cssListstyleposition, cssListstyletype, cssMargin, cssMarginbottom, cssMarginright, cssMarginleft, cssMargintop, cssMaxheight, cssMaxwidth, cssMinheight, cssMinwidth, cssObjectfit, cssObjectposition, cssOpacity, cssOrder, cssOrphans, cssOutline, cssOutlinecolor, cssOutlineoffset, cssOutlinestyle, cssOutlinewidth, cssOverflow, cssOverflowwrap, cssOverflowx, cssOverflowy, cssPadding, cssPaddingbottom, cssPaddingleft, cssPaddingright, cssPaddingtop, cssPagebreakafter, cssPagebreakbefore, cssPagebreakinside, cssPerspective, cssPerspectiveorigin, cssPosition, cssQuotes, cssResize, cssRight, cssTabsize, cssTablelayout, cssTextalign, cssTextalignlast, cssTextcombineupright, cssTextdecorationcolor, cssTextdecoration, cssTextdecorationline, cssTextdecorationstyle, cssTextindent, cssTextjustify, cssTextorientation, cssTextoverflow, cssTextshadow, cssTexttransform, cssTextunderlineposition, cssTop, cssTransform, cssTransformorigin, cssTransformstyle, cssTransition, cssTransitiondelay, cssTransitionduration, cssTransitionproperty, cssTransitiontimingfunction, cssUnicodebidi, cssUserselect, cssVerticalalign, cssVisibility, cssWhitespace, cssWidows, cssWidth, cssWordbreak, cssWordspacing, cssWordwrap, cssZindex];

// Allowed Characters array
allowedChar= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","-"];

// Performance comment arrays
const kudos = ["","Bravo!","Well, that for sure looked easy ;-)", "Easy enough, huh?","GRrrreat!!","That one was a no-brainer...","Really?","Think you can do this again?","You are beating the Matrix!","Achievement unlocked: GOD LEVEL!!","Wow, you have to be a TA, aren't you?","...Parker, is it you?","STOP THIS, I'M BEAT!!!"]
const sucker = ["","Oops, sorry about that", "Hmm... that one was not obvious, try again!","I am sending you a picture of a kitty, for your trouble...","Were you paying attention?","Ok, wanna cry?","Ready to give up?","You have to be good at something else, right...?","Really?", "I expected better. I am soooo disappointed","Should I dumb it down for you?","Here is a hing: the next one is not something you know. Because, well, you don't know much obviously..."]

// var kudosMes;
//  for (let i = 0;i<kudos.length+1;i++){
//      if (i<kudos.length){
//          kudosMes=kudos[i];
//      }
//      if(i=kudos.length) {
//          kudosMes=kudos[kudos.length]
//      }
//      return kudosMes;
//  }

// random Arrays
let randomHtml = htmlArray[Math.floor(Math.random()*htmlArray.length)];
let randomCss = cssArray[Math.floor(Math.random()*cssArray.length)];

// show me the name (aka: the word to guess)
let riddle = randomCss.name;
let previousRiddle=[];


// Text on main page 
let mysteryRevealed = "The attribute to guess was: \"" + riddle + "\""; 


// let hiddenChar = " _ "
let maskedWord = [];
for (let i = 0; i < riddle.length; i++) {
    maskedWord[i] = " _ ";
}

// splitting the word to guess into characters in an array
let wordToGuess = riddle.split("");

// counting
var tallyWins = 0;
var tallyLosses = 0;
var streakWins = 0;
var streakLosses = 0;
var keyName;
var gameWon = false;

// number guesses allowed assigned to variable numGuesses (if word too small: less guesses)
var numGuesses
function allGuesses(){
    if (riddle.length < 4) {
        numGuesses = riddle.length + 2;
    } 
    else {
        numGuesses = riddle.length;
    }
    return numGuesses;
    document.querySelector("#num_guesses").innerHTML= numGuesses;
}
allGuesses()
var remainingGuesses = numGuesses;

function resetGame() {
    randomCss = cssArray[Math.floor(Math.random()*cssArray.length)];
    riddle = randomCss.name;
    maskedWord = []; //resets the riddle
    attemptedGuesses = [] //resets the number of guesses after each guessed word
    for (let i = 0; i < riddle.length; i++) { //re-create the riddle
        maskedWord[i] = " _ ";
    }    
    allGuesses()
    document.querySelector("#word_to_guess").innerHTML= maskedWord.join(" ")
    document.querySelector("#num_guesses").innerHTML= numGuesses;
    document.querySelector("#element_definition").innerHTML= randomCss.definition
    document.querySelector("#tally_wins").innerHTML= tallyWins
    document.querySelector("#tally_losses").innerHTML= tallyLosses
    document.querySelector("#element_example").innerHTML= previousRiddle.name // show the response (should be when guessed)
    document.querySelector("#link").innerHTML= "(click this <" + previousRiddle.url + ">link</a> for more information)";
    document.querySelector("#kudos").innerHTML= kudos[streakWins];
    document.querySelector("#suck").innerHTML= sucker[streakLosses];

    
    updateGameStats()
    remainingGuesses = numGuesses;
}

function updateGameStats(){
    gameWon = false;
}


document.querySelector("#element_definition").innerHTML= randomHtml.definition
document.querySelector("#word_to_guess").innerHTML= maskedWord.join(" ")
document.querySelector("#num_guesses").innerHTML= numGuesses;
document.querySelector("#rem_guesses").innerHTML= remainingGuesses;
document.querySelector("#element_type").innerHTML= randomCss.type // tell it's CSS code
document.querySelector("#tally_wins").innerHTML= tallyWins
document.querySelector("#tally_losses").innerHTML= tallyLosses


document.onkeyup = function(event) {
    keyName = event.key;
    for (let i=0; i<remainingGuesses; i++) {
        checkGuessValidity();
        guessForTheWin();
        // gameLost()
        if (maskedWord.indexOf(" _ ")<0) {
            gameWon = true;
            tallyWins++;
            streakWins++;
            streakLosses=0;
            previousRiddle=randomCss;
            resetGame();
            break;
        }
        else {            
            guessForTheWin();
            if(remainingGuesses===0 && gameWon === false) {
                tallyLosses++;
                streakLosses++;
                streakWins=0;
                previousRiddle=randomCss;
                resetGame();
                break;
            }
            }
        }

    
    // Content to populate on main page
    document.querySelector("#rem_guesses").innerHTML= remainingGuesses; // tell how many guesses remain
    document.querySelector("#guesses").innerHTML= attemptedGuesses.join("-") // Show all guesses tried so far
}

/* 
******************
THIS IS THE FUNCTION THAT CHECKS IF THE KEY IS A LEGIT CHARACTER, ADDS IT TO THE ARRAY OF  ------ GOOD!
******************
*/

var validChar;
var attemptedGuesses= [];
function checkGuessValidity() {
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
/* 
******************
THIS IS THE FUNCTION THAT COUNTS THE REMAINING GUESSES
******************
*/

function counter() {
    for (var l = 0; l<wordToGuess.length; l++) {
        if (wordToGuess.indexOf(validChar) <0) {
            remainingGuesses--;
            return remainingGuesses;
            break;
        }
    }
}
    
// } 
/* 
******************
THIS IS THE FUNCTION THAT FILLS THE BLANKS AFTER EACH SUCCESSFUL GUESS ------ GOOD!
******************
*/

var goodGuess;
var failedAttempt = 0;
function guessForTheWin () {
    for (var i = 0; i < riddle.length; i++) {
        if (validChar === riddle[i]) {
            goodGuess = validChar;
            maskedWord.splice(i,1,validChar);
            document.querySelector("#word_to_guess").innerHTML= maskedWord.join(" ")
        }
    }
}

 