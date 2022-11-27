// Assignment code here

// what criteria can be included in the password //
var characrerLength = 8;
var choiceArr = [];

var specialCharArr =['!','@','#','$','%','^','&','*','(',')','{','}','[',']',';',':','','/','<','>','?','"','+',',','-','.','=','~','^','|'];
var lowCassArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','y','z'];
var upperCassArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','Y','Z'];
var numberArr = ['1','2','3','4','5','6','7','8','9','0'];


// Prompts //

function getPrompts(){
  choiceArr = [];
  characrerLength = prompt(" How many characters would you like your password to contain? 8 - 128");
  if(isNaN(characrerLength)|| characrerLength < 8 || characrerLength > 128){
    alert("Character length has to be a number, 8-128 digits. Please try again.");
    return false;
  }
  if (confirm("Would you like lowercase letters in your password?")){
    choiceArr = choiceArr.concat(lowCassArr);
  }
  if (confirm("Would you like upperrcase letters in your password?")){
    choiceArr = choiceArr.concat(upperCassArr);
  }
  if (confirm("Would you like special characters in your password?")){
    choiceArr = choiceArr.concat(specialCharArr);
  }
  if (confirm("Would you like numbers in your password?")){
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;
}

// Generate Password function //

function generatePassword(){
  var password = "";
  for (let i = 0; i < characrerLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password+choiceArr[randomIndex];
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();

  if(correctPrompts) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
