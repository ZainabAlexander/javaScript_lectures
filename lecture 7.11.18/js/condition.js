// What is a condition?

// Suppose we want to write a program that makes a user enter a number and then displays a message.
// if the number is positive. Here is the corresponding algorithm.

/*======= enter a number
if the number is positive 
Display Message =======*/

// The message should display only if the number is positive: this means it is subject to its condition.

// the if statement 

// var number = Number (prompt("Enter a number:"));
// if (number > 0) {
//     console.log (number + " is positive");
// }


// var number = Number (prompt("Enter a number:"));
// if (number < 0) {
//     console.log (number + " is negative");
// }

//Basic Syntax

// if  (condition) {
//  statements executed when the condition is true
//   }

// The pair of opening and closing braces defines what is a called a block of code associated with an if statement.
//this statement represents a test. If can result in the following: "of the condition is true then execute and the instructions contained in the code block"

// Conditions

// A condition is an expression the evaluates whether something is true or false. when the vale of a condition is true, 
// we say this condition is satisfied

// We have a already studied numbers and strings. Two types of data in JavaScript. Booleans are another type.
// This type has to possible values : true and false     0 and 1  

// Any expression that produces a boolean value.
// (either true or false) can be used as a condition  in an if statement. if the value of this expression is true
// the code block associated with its execution.

// Boolean expressions can be created using the comparison operators

// === equal to
// !== Not equal to
// < less than
// <= less than or equal to
// > Greater than
// >= Greater or equal to


// var age = Number (prompt("Enter your age:"));
// if (age <= 12) {
//     console.log (" you can't watch the horror movie , go to sleep");
// }


// Alternative conditions

// You'll often want to have tour code execute one way when something is true and another way when something is false.

    // var number = Number (prompt("Enter a number:"));
    // if (number > 0) {
    //     console.log (number + " is positive");
    // } else {
    //     console.log (number + " is negative");
    // }

    //Nesting Conditions

    // You go next - level and display a specific message if the entered number is zero. Use else if for a second conditional. See this example, which has a positive test case , negative test case and a last resort of the number being zero:

    // var number = Number(prompt("Enter a number"));
    // if (number > 0 ) {
    //     console.log(number + " is positive");
    // }
    // else if (number < 0) {
    //     console.log(number + " is negative");
    // }
    // else{
    //     console.log(number + " is zero");
    // }

    //Task
    // Build a program or write a program that helps students decide what to wear based on the weather using the if statement else and if else statement sunny cloudy rainy windy snowy



    var weather = (prompt("what is the weather today?"));

    if (weather === "sunny" ) {
        console.log(" wear a shorts and a tee");
    }
    else if  (weather === "cloudy") {
        console.log(" wear a jacket and long pants");
    }
    else if  (weather === "snowy") {
        console.log(" stay in doors");
    }
    else if  (weather === "windy") {
        console.log(" windbreaker vibes");
    }

    else {
        console.log("not a valid weather type")
    }
