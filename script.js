// Assignment Code
var generateBtn = document.querySelector("#generate");

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
   

}







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
