// Assignment Code

// var generateBtn = document.querySelector("#generate");
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ".", "?", "+", "-", "_", "=", ";", ":", "<", ">", "~", "{", "}"];
var allCharacterSets = [upperCase, lowerCase, numbers, specialCar]
var length = 0;
var userChoiceUpperCase = false;
var userChoicelowerCase = false;
var userChoiceNumbersCase = false;
var userChoiceSpecial = false;
// Write password to the #password input
// Ask the use for how many chracters.
var generateBtn = document.querySelector("#generate")

function writePassword() {





    var password = generatePassword();

    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    length =
        prompt("please enter you password length from 8 to 128");

    if ((length < 8) || (length > 128)) {
        alert("you need 8 to 128 characters to continue");
        return "";
    }


    userChoiceUpperCase = confirm("Uppercase");
    userChoicelowerCase = confirm("Lowercase");
    userChoiceNumbersCase = confirm("Numbers");
    userChoiceSpecial = confirm("Special Character");

    var userChoices = [userChoiceUpperCase, userChoicelowerCase, userChoiceNumbersCase, userChoiceSpecial];

    console.log(userChoices)

    var characterSetToUse = []

    for (var i = 0; i < userChoices.length; i++) {
        if (userChoices[i] === true) {
            for (var j = 0; j < allCharacterSets[i].length; j++) {
                characterSetToUse.push(allCharacterSets[i][j]);
            }

        }



    }
    var randomPassword = "";

    for (var i = 1; i <= length; i++) {
        var index = Math.floor(Math.random() * characterSetToUse.length);
        randomPassword = randomPassword + characterSetToUse[index];
    }

    return randomPassword;















}


//declare the vaviable

//ask the user how long they want the password to be 8 to 128 character

// verify how many character are inputed
// if pasword length is pasword is less than 8 or greater than 128 alert the user 

// prompt user for uppercase
// var userChoiceUpperCase = confirm() (look up confirm on google for more info)

// prompt user for lowercase 
// var userChoiclowerCase = confirm()

// prompt user for numbers 
// var userChoiceNumbersCase = confirm()

// prompt user for special character
// var userChoiceSpecial = confirm()

// validate that user chose a character selection
// If user choice upper case is false then alret user And userChoiclowerCase false And userChoiceNumbersCase is false And userChoiceSpecialis false

// If parameters are valid generate password
// console.log(Math.random)

// The random password is displayed to user