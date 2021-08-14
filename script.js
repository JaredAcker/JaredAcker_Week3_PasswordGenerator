// Assignment Code
var generateBtn = document.querySelector("#generate");

// variables for password length, lowercase letters, uppercase letters, numbers, special characters and user choices.
var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoices;

// lowerCase variable is equal to the entire alphabet in lower case.
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// making a function to upper case lower cased letters.
var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};

upperCase = lowerCase.map(toUpper);

// making a variable for numbers 0-9

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// making a variable for special characters

var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "`", "~", "[", "{", "]", "}", "|", ";", ":", "'", ",", "<", ".", ">", "/", "?"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// making a start function
function generatePassword () {
  passwordLength = prompt("How many characters is your password going to be? 8-128");

  console.log("Password Length" + passwordLength);

  if(!passwordLength) {
    alert("Required value");

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt ("Choose between 8-128");
    console.log("Password length" + passwordLength);

// confirming in the prompt that the password will contain the variables for lower and upper case letters, numbers and special characters.
  } else {
    confirmLower = confirm("Will this contain lower case letters?");
    console.log("Lower Case" + confirmLower);
    confirmUpper = confirm("Will this contain upper case letters?");
    console.log("Upper Case" + confirmUpper);
    confirmNumber = confirm("Will this contain numbers?");
    console.log("Number" + confirmNumber);
    confirmSpecial = confirm("Will this contain special characters?");
    console.log("Special Characters" + confirmSpecial);

  };

// user is alerted if criteria isn't selected
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    userChoices = alert("Choose criteria");
  
  } else if ()

}