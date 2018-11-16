

// LOOP/ LOOPING...

// While LOOP.

// A while loop lets you repeat code while a certain condition is true.

console.log("start of program");
// just guidelines for where the program starts
// let number = 1;
// while( number <= 1000) {
//     console.log(number);
//     number++;
// }
console.log ("end of program");
// just guidelines for where the program ends

// Basic Syntax

/*=  while(condition) {
    //code to run while the condition is true
}
=*/

// Before each loop iteration, the condition in parentheses is evaluated to determine whether it is true or not.
// the code associated with a loop is called its body!

// If the condition is true, the code in the while loop's body runs. Afterward, the condition is re-evaluated to see if it is still true or not. The cycle continues!

// If the condition is false, the code in the loop stops running or doesn't run.


//** For LOOP **//

// You will often need to write loops with conditions that are based on what happens in the loop body.
// like our example. JavaScript offers another loop type to account for this : the for loop.

/* ===== 
for(initialization; condition; final-expression) {
    //code to run when condition is true
}

=====*/

// This is a little more complicated than a while loop syntax:

//  Initialization only happens once, when the code first kicks off

// the condition is evaluated once before the loop runs each time. it is is true, the code runs. if not the code doesn't run.

// The final expression is evaluated after the loop runs each time. It is often used to update a counter variable as we saw in the while loop example.

for (var counter=1 ; counter <=5; counter++) {
    console.log(counter);
}

/* Which loop should i use? */

let letter ="";
while (letter !== "X") {
    letter =prompt ("type any letter or X to exit:");
    console.log(letter);
}

