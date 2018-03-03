// Arrays
const htmlArray =[a, abbr, address, area, article, aside, audio, b, base, bdi, bdo, blockquote, body, br, button, canvas, caption, cite, code, col, colgroup, dd, datalist, del, details, dfn, dialog, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, head, header, hr, html, i, iframe, img, input, ins, kbd, label, legend, li, link, main, map, mark, menu, menuitem, meta, meter, nav, noscript, object, ol, optgroup, option, output, p, param, picture, pre, progress, q, rp, rt, ruby, s, samp, script, section, select, small, source, span, strong, style, sub, summary, sup, table, tbody, td, template, textarea, tfoot, th, thead, time, title, tr, track, u, ul, video, wbr];
const cssArray = [cssCharset, cssFontface, cssFontfeaturevalues, cssImport, cssKeyframes, cssMedia, cssAligncontent, cssAlignitems, cssAlignself, cssAll, cssAnimation, cssAnimationdelay, cssAnimationdirection, cssAnimationduration, cssAnimationfillmode, cssAnimationiterationcount, cssAnimationname, cssAnimationplaystate, cssAnimationtimingfunction, cssBackfacevisibility, cssBackground, cssBackgroundblendmode, cssBackgroundattachment, cssBackgroundclip, cssBackgroundcolor, cssBackgroundimage, cssBackgroundorigin, cssBackgroundposition, cssBackgroundrepeat, cssBackgroundsize, cssBorder, cssBorderbottom, cssBorderbottomcolor, cssBorderbottomleftradius, cssBorderbottomrightradius, cssBorderbottomstyle, cssBorderbottomwidth, cssBordercollapse, cssBordercolor, cssBorderimage, cssBorderimageoutset, cssBorderimagerepeat, cssBorderimageslice, cssBorderimagesource, cssBorderimagewidth, cssBorderleft, cssBorderleftcolor, cssBorderleftstyle, cssBorderleftwidth, cssBorderradius, cssBorderright, cssBorderrightcolor, cssBorderrightstyle, cssBorderrightwidth, cssBorderspacing, cssBorderstyle, cssBordertop, cssBordertopcolor, cssBordertopleftradius, cssBordertoprightradius, cssBordertopstyle, cssBordertopwidth, cssBorderwidth, cssBottom, cssBoxdecorationbreak, cssBoxshadow, cssBoxsizing, cssBreakafter, cssBreakbefore, cssBreakinside, cssCaptionside, cssCaretcolor, cssClear, cssClip, cssColor, cssColumncount, cssColumnfill, cssColumngap, cssColumnrule, cssColumnrulecolor, cssColumnrulestyle, cssColumnrulewidth, cssColumnspan, cssColumnwidth, cssColumns, cssContent, cssCounterincrement, cssCounterreset, cssCursor, cssDirection, cssDisplay, cssEmptycells, cssFilter, cssFlex, cssFlexbasis, cssFlexdirection, cssFlexflow, cssFlexgrow, cssFlexshrink, cssFlexwrap, cssFloat, cssFont, cssFontfamily, cssFontfeaturesettings,cssFontkerning, cssFontlanguageoverride, cssFontsize, cssFontsizeadjust, cssFontstretch, cssFontstyle, cssFontsynthesis, cssFontvariant, cssFontvariantalternates, cssFontvariantcaps, cssFontvarianteastasian, cssFontvariantligatures, cssFontvariantnumeric, cssFontvariantposition, cssFontweight, cssGrid, cssGridarea, cssGridautocolumns, cssGridautoflow, cssGridautorows, cssGridcolumn, cssGridcolumnend, cssGridcolumngap, cssGridcolumnstart, cssGridgap, cssGridrow, cssGridrowend, cssGridrowgap, cssGridrowstart, cssGridtemplate, cssGridtemplateareas, cssGridtemplatecolumns, cssGridtemplaterows, cssHangingpunctuation, cssHeight, cssHyphens, cssImageorientation, cssImagerendering, cssImageresolution, cssJustifycontent, cssLeft, cssLetterspacing, cssLinebreak, cssLineheight, cssListstyle, cssListstyleimage, cssListstyleposition, cssListstyletype, cssMargin, cssMarginbottom, cssMarginright, cssMarginleft, cssMargintop, cssMaxheight, cssMaxwidth, cssMinheight, cssMinwidth, cssObjectfit, cssObjectposition, cssOpacity, cssOrder, cssOrphans, cssOutline, cssOutlinecolor, cssOutlineoffset, cssOutlinestyle, cssOutlinewidth, cssOverflow, cssOverflowwrap, cssOverflowx, cssOverflowy, cssPadding, cssPaddingbottom, cssPaddingleft, cssPaddingright, cssPaddingtop, cssPagebreakafter, cssPagebreakbefore, cssPagebreakinside, cssPerspective, cssPerspectiveorigin, cssPosition, cssQuotes, cssResize, cssRight, cssTabsize, cssTablelayout, cssTextalign, cssTextalignlast, cssTextcombineupright, cssTextdecorationcolor, cssTextdecoration, cssTextdecorationline, cssTextdecorationstyle, cssTextindent, cssTextjustify, cssTextorientation, cssTextoverflow, cssTextshadow, cssTexttransform, cssTextunderlineposition, cssTop, cssTransform, cssTransformorigin, cssTransformstyle, cssTransition, cssTransitiondelay, cssTransitionduration, cssTransitionproperty, cssTransitiontimingfunction, cssUnicodebidi, cssUserselect, cssVerticalalign, cssVisibility, cssWhitespace, cssWidows, cssWidth, cssWordbreak, cssWordspacing, cssWordwrap, cssZindex];

// Allowed Characters array
allowedChar= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","-"];

// Performance comment arrays
const kudos = ["","Bravo","Well, that for sure looked easy", "Easy enough, huh?","GRrrreat","That one was a no-brainer...","Really?","Think you can do this again?","You are beating the Matrix!","Achievement unlocked: GOD LEVEL!!","Wow, you have to be a TA, aren't you?","...Parker, is it you?","STOP THIS, I'M BEAT!!!"]
const sucker = ["Oops, sorry about that", "Hmm... that one was not obvious, try again!","I am sending you a picture of a kitty, for your trouble...","Were you paying attention?","Ok, wanna cry?","Ready to give up?","You have to be good at something else, right...?","Really?", "I expected better. I am soooo disappointed","Should I dumb it down for you?","Here is a hing: the next one is not something you know. Because, well, you don't know much obviously..."]

// random Arrays
let randomHtml = htmlArray[Math.floor(Math.random()*htmlArray.length)];
let randomCss = cssArray[Math.floor(Math.random()*cssArray.length)];

// show me the name (aka: the word to guess)
let riddle = randomHtml.name;


// Text on main page 
let w3Link = "(click this <" + randomHtml.url + ">link</a> for more information)";
let mysteryRevealed = "The attribute to guess was: \"" + riddle + "\""; 
let victoryMessage = "You have won " + victories + " game(s) so far. " + kudos[victories]; 

// let hiddenChar = " _ "
let maskedWord = [];
for (let i = 0; i < riddle.length; i++) {
    maskedWord[i] = " _ ";
}

// splitting the word to guess into characters in an array
let wordToGuess = riddle.split("");

// counting
var allLegitKeysPressed = [];
var keyName;
var tallyGuesses;

// number guesses allowed assigned to variable numGuesses (if word too small: less guesses)
var numGuesses;
if (riddle.length < 4) {
    numGuesses = riddle.length + 2;
} 
else {
    numGuesses = riddle.length + 5;
}
var remainingGuesses = numGuesses;

document.querySelector("#element_definition").innerHTML= randomHtml.definition
document.querySelector("#word_to_guess").innerHTML= maskedWord.join(" ")
document.querySelector("#num_guesses").innerHTML= numGuesses;
// document.querySelector("#rem_guesses").innerHTML= remainingGuesses;

document.onkeyup = function(event) {
    keyName = event.key;
    // including the function here allows it to run when key is pressed!!
    checkGuessValidity();
    // checkChar();
    guessForTheWin();
    resetGame();
    // counters();
    // checkDuplicate();
    // console.log("value in the local scope " + keyName);
    // Content to populate on main page
    document.querySelector("#element_type").innerHTML= randomHtml.type
    // document.querySelector("#victories").innerHTML= victoryMessage    
    document.querySelector("#element_example").innerHTML= randomHtml.example
    document.querySelector("#guesses").innerHTML= allLegitKeysPressed.join("-")

// document.querySelector("#l_bracket").innerHTML= lBracket
// document.querySelector("#r_bracket").innerHTML= rBracket

}
/* 
******************
THIS IS THE FUNCTION THAT CHECKS IF THE KEY IS A LEGIT CHARACTER ------ GOOD!
******************
*/

var validChar;
// var attemptedGuesses= [];
function checkGuessValidity() {
    for (var j = 0; j<allowedChar.length; j++) {
        if (keyName === allowedChar[j]) {
            // console.log(keyName + " is a valid character")
            validChar = keyName;
            allLegitKeysPressed.push(validChar);
            return validChar;
            // checkChar()
            // checkDuplicate();
            // guessForTheWin();
        }
    }
} 
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
/* 
******************
THIS IS THE FUNCTION TO CHECK IF THE GAME HAS BEEN WON ------ GOOD!
******************
*/

var victories = 0;
var gameWon = false;
function resetGame() {
    for (var i = 0; i < numGuesses; i++) {
        if (wordToGuess.toString() === maskedWord.toString()) {
            gameWon = true;
            victories++;
            // alert("You won this game")
            console.log(kudos[victories])
            document.querySelector("#element_name").innerHTML= mysteryRevealed
            document.querySelector("#element_url").innerHTML= w3Link
            // document.querySelector("#victories").innerHTML= victoryMessage
            break;
        }
    }
}


/* 
******************
THIS IS THE FUNCTION TO CHECK AGAINST EXISTING GUESSES
******************
*/


// let tally = 0;
var duplicate = false;
var nonDuplicateKeys=[];
function checkChar(validChar) {
    for(let i=0;i<numGuesses;i++){
    if (keyName === allLegitKeysPressed[i]) {
            duplicate = true;
            nonDuplicateKeys.push(validChar);
            break;
        }
    }
}
        // else {
            //     duplicate = false;
            //     // alert("It's never gonna work")
            //     // console.log(nonDuplicateKeys)
            // }
        // }
        
        // alert("DUPLICATE")
// or (var j = 0; j<allowedChar.length; j++) {
//     if (keyName === allowedChar[j]) {
//         // console.log(keyName + " is a valid character")
//         validChar = keyName;
//         allLegitKeysPressed.push(validChar);




// else {
//     failedAttempt = failedAttempt + 1;
//     remainingGuesses = numGuesses-failedAttempt;
    // document.querySelector("#num_guesses").innerHTML= numGuesses;
    // document.querySelector("#rem_guesses").innerHTML= remainingGuesses;
// }



// }

//     for (let i=0; i < numGuesses; i++) {
//         if (maskedWord[i] !== "_"){
//             console.log("Game won?")
//         }
//     }
// }

