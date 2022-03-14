
// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// Variable Declaration 

var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var length = 0;

var specialCharacters= [ "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", " ' ", " ", ' " ', "\\" ];

var userChoice = [];


// Declaring the function 

function generatePassword () {

var length= prompt (
  "How long would you like your password to be? Please note, it must be between 8 - 128 characters"
);

if (JSON.parse(length )< 8 || JSON.parse(length) > 128) {
alert ("Please try again! The password must contain a minimum of 8 characters and a maximum of 128 characters");

}else if ( length >= 8 || length <= 128) { }
  
var lowercaseLetters= confirm ("Would you like to include lower case characters in your password? Select yes or no");
if (lowercaseLetters === true){
userChoice==userChoice.concat(lowercaseLetters)}


var uppercaseLetters = confirm ("Would you like to include upper case characters in your password? select yes or no"); 
if (uppercaseLetters === true){
  userChoice==userChoice.concat(uppercaseLetters)}

var specialCharacters= confirm ("Would you like to include special characters in your password?select yes or no");
if (specialCharacters === true){
  userChoice==userChoice.concat(specialCharacters)}

var number = confirm ("Would you like to include numbers in your password?select yes or no");
if (number === true){
  userChoice==userChoice.concat(number)}


// Option if neither of the minimum password requirements are selected 
else if (
    lowercaseLetters ===false &&
    uppercaseLetters ===false &&
    specialCharacters ===false &&
    number ===false) 
  {
 alert ("Please note, the password must include at least one of the following: an upper case letter, a lower case letter, special character or number in order to be valid "); 
  }

  var finalPw 
  var charSet = userChoice; 
  for ( var i =0, n=charSet.length; i< JSON.parse (length); i++ ) {
    finalPw+=charSet[Math.floor (Math.random (  )*n)]

  }

return finalPw 

} 


