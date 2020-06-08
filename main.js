/*******************
 * YOUR CODE HERE! *
 *******************/

function yell(exclaim){
  return exclaim + '!';
}
function getFirstCharacter(fChar){
  return fChar[0];
}
function getLastCharacter(lChar){
  return lChar.charAt(lChar.length-1);
}
function getOneCharacter(sam, num){
  return sam[num]
}
function getTwoCharacters(str, char, num){
  return str[char] + str[num]
}
function makeCapitalized(word){
  return word.toUpperCase();
}
function yellLouder(word){
  return word.toUpperCase() + "!!!";
}
function getInitials(name){
  return name[0] + '.'+ name[name.indexOf(' ') + 1] + '.'
}





/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof yell === 'undefined') {
  yell = undefined;
}

if (typeof getFirstCharacter === 'undefined') {
  getFirstCharacter = undefined;
}

if (typeof getLastCharacter === 'undefined') {
  getLastCharacter = undefined;
}

if (typeof getOneCharacter === 'undefined') {
  getOneCharacter = undefined;
}

if (typeof getTwoCharacters === 'undefined') {
  getTwoCharacters = undefined;
}

if (typeof makeCapitalized === 'undefined') {
  makeCapitalized = undefined;
}

if (typeof yellLouder === 'undefined') {
  yellLouder = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}


module.exports = {
  yell,
  getFirstCharacter,
  getLastCharacter,
  getOneCharacter,
  getTwoCharacters,
  makeCapitalized,
  yellLouder,
  getInitials,
};
