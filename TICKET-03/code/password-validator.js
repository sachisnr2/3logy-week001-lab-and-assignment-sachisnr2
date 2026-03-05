//Ticket 03 Assignemnt
//Check if password is at least 8 characters long
 //Check if password contains a number
 //Check if password contains an uppercase letter
 
// Password to check
let password = "SecurePass9";

// Password Conditions
let hasMinLength = password.length >= 8;
let hasNumber = /[0-9]/.test(password);
let hasUppercase = /[A-Z]/.test(password);

// Password Validations
if (hasMinLength && hasNumber && hasUppercase) {
    console.log("Password is valid");
} else {
    console.log("Password is invalid");

    if (!hasMinLength) {
        console.log("Missing requirement: At least 8 characters");
    }

    if (!hasNumber) {
        console.log("Missing requirement: Must contain a number");
    }

    if (!hasUppercase) {
        console.log("Missing requirement: Must contain an uppercase letter");
    }
}