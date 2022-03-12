
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

var lowercaseLetters ="abcdefghijklmnopqrstuvwxyz";

var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var number = "0123456789";

var length = "0123456789";

var specialCharacters= "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";




// Calling the function 

function generatePassword () {

var length= prompt (
  "How long would you like your password to be? Please note, it must be between 8 - 128 characters"
);

if (length < 8 || length > 128) {
alert ("Please try again! The password must contain a minimum of 8 characters and a maximum of 128 characters");

}else ( length >= 8 || length <= 128) {
  alert ("Would you like to include lower case characters in your password? Select yes or no");
  if (lowercaseLetters = true || false) 

} var uppercaseLetters = prompt ("Would you like to include upper case characters in your password? select yes or no"); 
  if (uppercaseLetters = true || false)

  var specialCharacters= prompt ("Would you like to include special characters in your password?select yes or no");
  if (specialCharacters = true || false)

  var number = prompt ("Would you like to include numbers in your password?select yes or no");
  if (number = true || false)


// Option if neither of the minimum password requirements are selected 
else (
    !lowercaseLetters ||
    !uppercaseLetters ||
    !specialCharacters ||
    !number ) 
  {
 alert ("Please note, the password must include at least one of the following: an upper case letter, a lower case letter, special character or number in order to be valid "); 
  }
} 