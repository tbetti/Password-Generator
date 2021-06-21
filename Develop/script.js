// Assignment Code
var generateBtn = document.querySelector("#generate"); // connect to button in HTML
var alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "[", "]", "}", ":", ";", "<", ">", ",", ".", "'", "?", "/"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  // This makes it so when you click the button, it
  // runs the writePassword function.  However, you 
  // can't do that right now because the generatePassword
  // function is not defined

// Prompt user for password length
var password = {
  upperCase:[],
  lowerCase: [],
  includeNumber: [],
  includeSpecChar: []
};
function generatePassword(){
  var passwordLength = prompt("Length of Password: ", "type a number between 8 and 128");
  if (passwordLength <= 8 && passwordLength >= 128){
    window.prompt("Invalid length.", "type a number between 8 and 128");
  } else {
    window.alert("Your password will be " + passwordLength + " characters long");
    if (window.confirm("Will your password need lowercase letters?")){
      password.lowerCase.push(alphabetLower);
    }
    if (window.confirm("Will your password need uppercase letters?")){
      password.upperCase.push(alphabetUpper);
    }
    if (window.confirm("Will you password need at least one numeric value?")){
      password.includeNumber.push(numeric);
    }
    if (window.confirm("Will your password need at least one special character?")){
      password.includeSpecChar.push(specChar);
    }
  }
}


console.log(password);
/* Possible functions
  _patterns:
  Math.random().toString(i)


  Notes:
  create array for all options then maybe concat options
  However, I have to make sure they have needed characters
*/
