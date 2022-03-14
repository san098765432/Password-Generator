// Variable Declaration 

var generateBtn = document.querySelector("#generate");

var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var length = 0;

var specialCharacters= [ "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", " ' ", " ", ' " ', "\\" ];

var userChoice = [];
var finalPw;


// Declaring the function 

function generatePassword () {

  var length= prompt (
    "How long would you like your password to be? Please note, it must be between 8 - 128 characters"
  );
  
  if (JSON.parse(length )< 8 || JSON.parse(length) > 128 || JSON.parse(length)===NaN) {
  alert ("Please try again! The password must contain a minimum of 8 characters and a maximum of 128 characters");
  generatePassword();
  
  }
    
  var lowercase= confirm ("Would you like to include lower case characters in your password? Select yes or no");
  if (lowercase == true){
  userChoice=userChoice.concat(lowercaseLetters)
  console.log(userChoice)
}
  
  
  var uppercase = confirm ("Would you like to include upper case characters in your password? select yes or no"); 
  if (uppercase == true){
    userChoice=userChoice.concat(uppercaseLetters)
    console.log(userChoice)
  }
  
  var specialChar= confirm ("Would you like to include special characters in your password?select yes or no");
  if (specialChar ==true){
    userChoice=userChoice.concat(specialCharacters)
    console.log(userChoice)
  }
  
  var num = confirm ("Would you like to include numbers in your password?select yes or no");
  if (num == true){
    userChoice=userChoice.concat(number)
    console.log(userChoice)
  }
  
  
  // Option if neither of the minimum password requirements are selected 
   if (
      lowercaseLetters ===false &&
      uppercaseLetters ===false &&
      specialCharacters ===false &&
      number ===false) 
    {
   alert ("Please note, the password must include at least one of the following: an upper case letter, a lower case letter, special character or number in order to be valid "); 
    }
 
  
    var charSet = userChoice; 
    console.log(charSet)

    for (var i=0, n=charSet.length; i< JSON.parse(length); i++ ) {
      
      finalPw += charSet[Math.floor (Math.random()*n)]
      console.log(finalPw, "from inside the for loop")
  
    }
    // console.log(finalPw)
    return finalPw 
  
  } 
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);









