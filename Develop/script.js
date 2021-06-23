// Assignment Code
var generateBtn = document.querySelector("#generate"); // connect to button in HTML

// Arrays of possible password characters
var alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "[", "]", "}", ":", ";", "<", ">", ",", ".", "'", "?", "/"];

// Holder arrays
var pwordChar = [];
var guaranteedChararr = [];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input if defined
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  if(password !== undefined){
    passwordText.value = password;
  }
  
  // Reset arrays so a new password can be generated
  pwordChar = [];
  guaranteedChararr = [];
}

// Prompt user for password length and generate password
function generatePassword(){
  var passwordLength = prompt("Length of Password: ", "type a number between 8 and 128");
  
  // Check if password is appropriate length
  if (isNaN(passwordLength)){
    window.alert("Must be a number value!");
  } else if (passwordLength < 8 || passwordLength > 128){
    window.alert("Invalid length. Generate password again.");
  } else {
    window.alert("Your password will be " + passwordLength + " characters long");
    var options = promptCriteria();
    
    // Create password based on user criteria
    var password = [];
    for (var i=options.guaranteedChararr.length; i < passwordLength; i++){
      var index = Math.floor(Math.random() * options.pwordChar.length);
      password[i] = options.pwordChar[index];
    }
    password = password.concat(guaranteedChararr);

    password = password.join("");
    return password;
  }
}

// Prompt user for password criteria and build array of possible values
function promptCriteria(){
  var guaranteedChar;

  /* each statement will push all possible characters into an array and create another array with a 
    guaranteed character to be included in password */
  if (window.confirm("Will your password need lowercase letters?")){
    pwordChar = pwordChar.concat(alphabetLower);
    guaranteedChar = alphabetLower[Math.floor(Math.random() * alphabetLower.length)];
    guaranteedChararr.push(guaranteedChar);
  }
  if (window.confirm("Will your password need uppercase letters?")){
    pwordChar = pwordChar.concat(alphabetUpper);
    guaranteedChar = alphabetUpper[Math.floor(Math.random() * alphabetUpper.length)];
    guaranteedChararr.push(guaranteedChar);
  }
  if (window.confirm("Will you password need at least one numeric value?")){
    pwordChar = pwordChar.concat(numeric);
    guaranteedChar = numeric[Math.floor(Math.random() * numeric.length)];
    guaranteedChararr.push(guaranteedChar);
  }
  if (window.confirm("Will your password need at least one special character?")){
    pwordChar = pwordChar.concat(specChar);
    guaranteedChar = specChar[Math.floor(Math.random() * specChar.length)];
    guaranteedChararr.push(guaranteedChar);
  }
  if (pwordChar.length===0){
    alert("Please choose at least one character type");
    return;
  }

  // Create object to return two values
  var object={
    pwordChar,
    guaranteedChararr
  };

  return object;
}

