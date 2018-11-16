/* Begin
    get out the sauce pan
    add some oil
    pour mince into it
    cook the mince
    chop the vegetables
    stir- fry the vegetables
    taste- test the vegetables
        if the veggis are good

*/

// same idea more simplified

// begin
/*
    cook mince
    stir fry vegetables
    add fillings
    roll together
*/
//end


// The first version details all the individual actions that make up the cooking process.
// The second breaks down the recipe into broader steps and introduces concepts that could be reused for other dishes as well like cook, stir-fry,add and roll.

// Our code so far has mimicked the first example in the its been very literal, but it is time to start modularizing our example into sub-steps so we can re-use bits and pieces as needed. In Js these sub-steps are called functions!

/*Functions */

// A function is a group of instructions that performs a particular task.

function sayHello(){
    console.log("Hello!");
}

console.log("Start of program");
sayHello();
console.log("End of program");

// Declaring a function

// Creating a function is called declaration.

/*

// Declaring a function called myFunction
function my Function() {
    //Function actions
}

*/

// TASK.

// Able to make a variable a prompt

var name = prompt("Enter your name");

function greetingUser(){
    console.log("Hello " + name );
}
console.log("Start of program");
greetingUser();
console.log("End of program");

// the keyword return indicates that a return value will be given, which is specified immediately after the word.

function sayHello(){
    return "Hello";
}

console.log("Start of program");
let result= sayHello();
console.log(result);
console.log("End of program");

// Declare myFunction
function myFunction() {
    // Calculate return value
    // ...
    return returnValue;
}

// Get return vale from myFunction

 var value = myFunction();
 // ..