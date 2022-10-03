// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
 if (!max){
  max = min
  min = 0
 }
 var rand = Math.random()
 return Math.floor(min*(1 - rand)+ rand * max)
}
 
function getItems(list) {
return list[randomInt(list.length)]
}

function generatePassword(){

  var userInput = window.prompt("Password Legnth 8 to 128 charecters")

  var passwordLength = parseInt(userInput)

 if (isNaN(passwordLength)){
    window.alert("PLEASE CHOOSE A NUMBER -_-")
    return
}

if (passwordLength < 8 || passwordLength > 128) {
    window.alert(" somethings wrong ")
    return 
}
 
var useNumbers = window.confirm("would you like to use numbers?")
var useLowercase = window.confirm("would you like to use Lowercase?")
var useUppercase = window.confirm("would you like to use Uppercase?")
var useSymbols = window.confirm("would you like to use symbols?")

var numbers = ["0", "1", "2", "3", "4", "5", "6","7", "8","9"]
var symbols = ["+", "!","@","#","$","%"]
var Lowercase = ["a", "b","c", "d","e","f","g","h", "i", "j","k", "l","m","n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]
var Uppercase = ["A", "B","C", "D","E","F","G","H", "I", "J","K", "L","M","N","O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]

var optionsList = []


if (useNumbers === true){
  optionsList.push(numbers)
}
  if (useSymbols === true){
    optionsList.push(symbols)
  }
    if (useLowercase === true){
    optionsList.push(Lowercase)
    }
    if(useUppercase === true){
    optionsList.push(Uppercase) 
    }

    if (optionsList == 0){
      optionsList.push(Lowercase)
    }
     console.log(optionsList)

  
  
     var generatePassword = ""



     for (var i = 0; i< passwordLength; i++){
       var randomItem = getItems(optionsList)
          var randomChar= getItems(randomItem)
       generatePassword += randomChar
     }
       console.log(generatePassword)
        return generatePassword
}







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
