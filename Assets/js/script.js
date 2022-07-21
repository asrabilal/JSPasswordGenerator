
// Defining character length & array variable
var characterlenght = 8;
var myVar = [];

var symbols = ['!','@','#','$','%','^','&','*'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var number = ['1','2','3','4','5','6','7','8','9','0'];

// Generate button var created
var generateBtn = document.querySelector("#generate");

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);

// User input prompts to help create password
function getprompts() {
  myVar = [];

  characterlenght = parseInt(prompt('Choose length of your password (8 - 128 characters) ?'));

   if (isNaN(characterlenght) || characterlenght <8 || characterlenght >128) {
    alert("Chosen password should be at least 8 characters and no more than 128 characters, please try again.");
    return false;
   }
   if (confirm("Would you like lowerCase letters in password?")) {
    myVar = myVar.concat(lowerCase);
   }
   if (confirm("Would you like upperCase letters in password?")) {
    myVar = myVar.concat(upperCase);
   }
   if (confirm("Would you like symbols in password?")) {
    myVar = myVar.concat(symbols);
   }
   if (confirm("Would you like numbers in password?")) {
    myVar = myVar.concat(number);
   } 
   return true;
}

// Writing password
function writePassword() {
  var correctprompts = getprompts();
  var passwordText = document.querySelector("#password");

  if(correctprompts) {
 var keypassword = generatePassword();
     passwordText.value = keypassword;
 }
  else{
    passwordText.value = "";
  }
}

function generatePassword() {
  var password = "";
  for(var i = 0; i < characterlenght; i++) {
    var randomletter = Math.floor(Math.random() * myVar.length);
    password = password + myVar[randomletter];
  }
  return password;
}