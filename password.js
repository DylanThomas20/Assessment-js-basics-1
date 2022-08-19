
let password = "Password123"


//Conditional statement that check if the password is
//at least 10 characters wrong and
//contains at least one letter and one number
//if true set each to true

//if the password meets the contstraints log a success message.

//if the password doesn't meet the constraints log a failure message.

// if (!/[^a-zA-Z]/.test(password)){
//     console.log('true')
// } else {
//     console.log('false')
// }

let character = false
let num = false
let uppercase = false
let passwordLength = false
let spaceCheck = false

//if statement that checks if the password length is 5 characters or more and less than 20

if(password.length <= 20 && password.length >= 5){
    passwordLength = true
}

for (let i = 0; i < password.length; i++){

//if statement that checks if there is atleast one character
    if (!/[^a-zA-Z]/.test(password.charAt(i))){
        character = true
     }

//if statement that checks if there is atleast one uppercase
    if (!/[^A-Z]/.test(password.charAt(i))){
        uppercase = true
     }   

//if statement that checks if there is atleast one number     
    if (!/[^0-9]/.test(password.charAt(i))){
        num = true
     }  
//if statement that checks if there are any spaces in the password     
    if (!/[^ ]/.test(password.charAt(i))){
        spaceCheck = true
     }  
}

//if statement that checks every condition for if a password works or not
if (character === true && uppercase === true && num === true && passwordLength === true && spaceCheck===false){
        console.log("Password was accepted")
    } else {
        console.log("This password doesn't work")
    }
