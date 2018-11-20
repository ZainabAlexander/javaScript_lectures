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

//Similary , an object in programming is an entity that has properties. Each property defines a characteristic of the object. A property can be information associated with the object(the color of th open) or action (the pens ability to write).

// What does this have to do with code?

//  Object-oriented programming (OOP for short) is a way to write programs using objects.When using OOP, you write, create, and modifying objects, and the objects make up your programme.

//OOP changes the way a program is written and organized. So far youve been writing function-based code, sometimes called the procedural programming. Now lets discover  how to write object- orientated programming0

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

// The above code defines a variable named pen whose value is an object: you can therefore say pen is an object.This objects has three properties: type, color and brand. Each property has a name and a value and is seperated by a comma,(expect thr last one).

// Getting a value

// After creating the object, you can access the value of its properties using dot notation such as myObject.myProperty.

console.log(pen.type);
console.log(pen.color);
console.log(pen.brand);

// Since you now know hot to access properties you can start combining them with other elements, like strings as part of a sentence.

// Create a sentence using concatination

console.log("I am using a " + pen.type + "pen. The color of my " + pen.type + " pen is " + pen.color + ". The brand that makes my " + pen.color + " " + pen.type + " is " + pen.brand);

// Lets create a cake in JavaScript that has several properties:

let cake = {
    flavour: "chocolate",
    price: "1000 kisses",
    layers: 3 ,
    layer1: "chocolate chip",
    layer2: "chocolate moose",
    layer3: "oreo and chocolate cream",
    icing: "chocolate butter cream",
    decoration: "kitkat fingers",
    occasion: "anniversary"

};
var boyfriend = "Ishmail";

console.log( "I am baking a cake for you" + cake.occasion + " . My cake is going to be a " + cake.flavour + " flavoured cake .  My cake will have " + cake.layers + " layers . The first layer will be a " +  cake.layer1 + " layer. The second layer will be " + cake.layer2 + " flavoured. The third layer will be a " + cake.layer3 + " flavoured layer. Between each layer there will be a layer of " + cake.icing + " and it will also be found around the the cake which will act as a base layer for our " + cake.decoration + ". I am willing to sell this cake to you, " + boyfriend + " for the low price of " + cake.price + " ."
);
// cake is actually for a wedding

cake.occasion = "wedding";

console.log( "I am baking a cake for your " + cake.occasion + " . My cake is going to be a " + cake.flavour + " flavoured cake .  My cake will have " + cake.layers + " layers . The first layer will be a " +  cake.layer1 + " layer. The second layer will be " + cake.layer2 + " flavoured. The third layer will be a " + cake.layer3 + " flavoured layer. Between each layer there will be a layer of " + cake.icing + " and it will also be found around the the cake which will act as a base layer for our " + cake.decoration + ". I am willing to sell this cake to you, " + boyfriend + " for the low price of " + cake.price + " ."
);