// var zainab = {name:"Zainab", surname:"Alexander", age:"18"};

// console.log( zainab);

// Hot to declare an object:
// var pen{
// color:" black",
// type: "ball point",
// brand: "bic",
// crown: "regular"
//};

// What is an object?

// Think about objects in the non-programming sense,like a pen. A pen can have different ink colors, be manufactured by different people, have a different tip and many other properties.

//Similarly , an object in programming is an entity that has properties. Each property defines a characteristic of the object. A property can be information associated with the object(the color of the open) or action (the pens ability to write).

// What does this have to do with code?

//  Object-oriented programming (OOP for short) is a way to write programs using objects.When using OOP, you write, create, and modifying objects, and the objects make up your programme.

//OOP changes the way a program is written and organized. So far you've been writing function-based code, sometimes called the procedural programming. Now lets discover  how to write object- orientated programming0

// JavaScript and objects

/// Like many other languages, JS involves programming objects so we can say it is an object-orientated language. it provides a number of predefined objects while also letting you create your  own.

// Creating an object
// Here is the JS representation of a blue bic ballpoint pen:

let pen = {
    type: "ballpoint",
    color:"blue",
    brand: "Bic"
}

// Create a new object by setting its properties within a pair of curly brackets{.....};

// The above code defines a variable named pen whose value is an object: you can therefore say pen is an object.This objects has three properties: type, color and brand. Each property has a name and a value and is separated by a comma,(expect the last one).

// Getting a value

// After creating the object, you can access the value of its properties using dot notation such as myObject.myProperty.

console.log(pen.type);
console.log(pen.color);
console.log(pen.brand);

// Since you now know hot to access properties you can start combining them with other elements, like strings as part of a sentence.

// Create a sentence using concatination

console.log("I am using a " + pen.type + "pen. The color of my " + pen.type + " pen is " + pen.color + ". The brand that makes my " + pen.color + " " + pen.type + " is " + pen.brand);

// Lets create a cake in JavaScript that has several properties:

// let cake = {
//     flavour: "chocolate",
//     price: "1000 kisses",
//     layers: 3 ,
//     layer1: "chocolate chip",
//     layer2: "chocolate moose",
//     layer3: "oreo and chocolate cream",
//     icing: "chocolate butter cream",
//     decoration: "kitkat fingers",
//     occasion: "anniversary"

// };
// var boyfriend = "Ishmail";

// console.log( "I am baking a cake for you" + cake.occasion + " . My cake is going to be a " + cake.flavour + " flavoured cake .  My cake will have " + cake.layers + " layers . The first layer will be a " +  cake.layer1 + " layer. The second layer will be " + cake.layer2 + " flavoured. The third layer will be a " + cake.layer3 + " flavoured layer. Between each layer there will be a layer of " + cake.icing + " and it will also be found around the the cake which will act as a base layer for our " + cake.decoration + ". I am willing to sell this cake to you, " + boyfriend + " for the low price of " + cake.price + " ."
// );
// // cake is actually for a wedding

// cake.occasion = "wedding";


// console.log( "I am baking a cake for your " + cake.occasion + " . My cake is going to be a " + cake.flavour + " flavoured cake .  My cake will have " + cake.layers + " layers . The first layer will be a " +  cake.layer1 + " layer. The second layer will be " + cake.layer2 + " flavoured. The third layer will be a " + cake.layer3 + " flavoured layer. Between each layer there will be a layer of " + cake.icing + " and it will also be found around the the cake which will act as a base layer for our " + cake.decoration + ". I am willing to sell this cake to you, " + boyfriend + " for the low price of " + cake.price + " ."
// );


// Methods on Objects

// we had to write lengthy console.log statements each time to show the cake description. There is a cleaner  way to accomplish this.

// in this instance 'cake' is taking from the object.

// Adding a method to an object

// Describe a cake 

// function describe(cake) {
//     var description = "I am baking a cake for your " + cake.occasion + " . My cake is going to be a " + cake.flavour + " flavoured cake .  My cake will have " + cake.layers + " layers . The first layer will be a " +  cake.layer1 + " layer. The second layer will be " + cake.layer2 + " flavoured. The third layer will be a " + cake.layer3 + " flavoured layer. Between each layer there will be a layer of " + cake.icing + " and it will also be found around the the cake which will act as a base layer for our " + cake.decoration + ". I am willing to sell this cake to you, " + boyfriend + " for the low price of " + cake.price + " .";
//     return description;
// }

// console.log(describe(cake));

// The function describe() takes an object as a parameter. We pass it the cake, and it accesses that objects properties and prints them out in that sentence.

// for an alternative approach: creating a describe property that houses a method

let cake = {
    flavour: "chocolate",
    price: "1000 kisses",
    layers: 3 ,
    layer1: "chocolate chip",
    layer2: "chocolate moose",
    layer3: "oreo and chocolate cream",
    icing: "chocolate butter cream",
    decoration: "kitkat fingers",
    occasion: "anniversary",

//  Describe the cake

describe: function () {
    var description = "I am baking a cake for your " + this.occasion + " . My cake is going to be a " + this.flavour + " flavoured cake .  My cake will have " + this.layers + " layers . The first layer will be a " +  this.layer1 + " layer. The second layer will be " + this.layer2 + " flavoured. The third layer will be a " + this.layer3 + " flavoured layer. Between each layer there will be a layer of " + this.icing + " and it will also be found around the the cake which will act as a base layer for our " + this.decoration + ". I am willing to sell this cake to you, for the low price of " + this.price + " .";
    return description;
}
};
console.log(cake.describe());

// The cake is actually for a wedding!
cake.occasion= "wedding";

console.log(cake.describe());

// Now our object has new property available to it describe. the value of this property is a function that returns a test description of the cake.
// A property whose value is a function is called a method

/*===

Remember the parenthesis(), even if they are empty when calling a method!

===*/