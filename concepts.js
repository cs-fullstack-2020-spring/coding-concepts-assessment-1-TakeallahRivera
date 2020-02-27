//console.log('Sanity Check');

//Prompting user to enter their name with a variable under the condition that they have to enter a value for this box- used a "while loop" because I want the condition to apply for an unlimited amount of times//
let userName = prompt("What is your name?");
while (userName == "") {
    userName = prompt("What is your name?");
}


//Prompting user to enter their name with a variable under the condition that they have to enter a value for this box- used a "while loop" because I want the condition to apply for an unlimited amount of times//
let userEmail = prompt("What is your email address?");

while(userEmail == "") {
    userEmail = prompt("What is your email address?")

}

//Prompting user to enter their name with a variable under the condition that they have to enter a value for this box- used a "while loop" because I want the condition to apply for an unlimited amount of times//
let userContact = prompt("Please enter a contact message");
while (userContact == "") {
    userContact = prompt("Please enter a contact message");
}

//Stored user input into an array and pushed user input into array//
let contactUserArray = [];
contactUserArray.push(userName);
contactUserArray.push(userEmail);
contactUserArray.push(userContact);

//Printed the length of the 'Contact User Array' to the console//
for(let i = 0; i < contactUserArray.length; i++){
    console.log(contactUserArray[i]);
}

//Asking if the user would like to confirm their information that was input//
//Used "back tics" to create a string//
let userConfirmation = confirm(`You entered\n ${contactUserArray}  \n Would you like to confirm your information?`);

//If it's true that the user would like to confirm- used a "for loop" because the conditions are limited- it's either "true" or "false"


if(userConfirmation == true){
    alert(`Thanks for confirming, ${userName}`);
} 
//If it's true false that the user would like to confirm- used a "for loop" because the conditions are limited- it's either "true" or "false"
if(userConfirmation == false){
    alert(`Maybe next time, ${userName} `);



}

//Tested and code is functional//