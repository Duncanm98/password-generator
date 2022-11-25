const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15 // variable to set max length of password
let passElOne = document.getElementById("pass-el-one")
let passElTwo = document.getElementById("pass-el-two")


function testClick(){
    console.log("button clicked")
}

// Function to generate a random letter from the characters const variable.
function generateRandomCharacter() {
    let randomCharacter = Math.floor(Math.random() * characters.length) // 
    return characters[randomCharacter]
}

//Function to generate a random password
function generateRandomPassword(){
    let randomPassword1 = "" // creating a string variable to hold the password
    for (let i = 0; i < passwordLength; i++){ 
        randomPassword1 += generateRandomCharacter()
    } // for loop to create a string of random characters 
    let randomPassword2 = "" // creating a string variable to hold the password
    for (let i = 0; i < passwordLength; i++){ 
        randomPassword2 += generateRandomCharacter()
    } // for loop to create a string of random characters 
    passElOne.textContent = randomPassword1
    passElTwo.textContent = randomPassword2
}




