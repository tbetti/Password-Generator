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

// Prompt user for password length
function generatePassword(){
  var passwordLength = prompt("Length of Password: ", "type a number between 8 and 128");
  if (passwordLength >= 8 && passwordLength <= 128){
    window.alert("Your password will be " + passwordLength + " characters long");
  } else {
    window.prompt("Invalid length.", "type a number between 8 and 128");
  }
}