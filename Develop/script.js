
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

let lowercaseLetters ="abcdefghijklmnopqrstuvwxyz";

let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let numbers = "0123456789";

let specialCharacters= "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";




// Calling the function 

function generatePassword() {

let number= prompt (
  "How long would you like your password to be? Please note, it must be between 8 - 128 characters"
);

if (number < 8 || number > 128) {
console.log ('Please try again! The password must contain a minimum of 8 characters and a maximum of 128 characters');
}

else if ( number >= 8 || number <= 128) 
  var lowercaseLetters = confirm("Would you like to include lowerCase characters in your password?");
  if (lowercaseLetters == true) {

  }
  var uppercaseLetters = confirm("Would you like to include upperCase characters in your password?");
  if ( uppercaseLetters == true) {

  }
  var specialCharacters = confirm("Would you like to include specialCharacters in your password?");
  if (specialCharacters == true) {

  }
  var numbers = confirm("Would you like to include numbers in your password?");
  if (numbers == true) {

  }
}





  else (
    !lowercaseLetters ||
    !uppercaseLetters ||
    !specialCharacters ||
    !numbers ) 
  {
    console.log ("Please note, the password must include at least one of the following: an upper case letter, a lower case letter, special character or number in order to be valid ");
  generatePassword"); 
  } 

