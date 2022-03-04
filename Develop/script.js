
// Assignment Code
var generateBtn = document.querySelector("#generate");




// Questions to prompt the user 

How long would you like your password to be? The password must be between 8 and 128 characters

 Would you like to include lowercase letters?
 
 Would you like to include uppercase letters?
 
 Would you like to include numbers?
 
 Would you like to include any special characters?






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
