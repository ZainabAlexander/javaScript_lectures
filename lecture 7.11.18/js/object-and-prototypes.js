// objects and prototype

// In addition to its special properties, every JS object has an internal property called prototype.This is a link(known as a referance) to another object. when trying to access a property that does not exist in an object js tries to find this property in the prototype of this object.
 
// var anObject ={
//     a:2
// };

// Create anotherObject using anObject as a prototype

// var anotherObject = Object.create(anObject);

// console.log(anotherObject.a);

// the Javascript statement Object.create() is used to create the object anotherObject based on the prototype object anObject.

// If the prototype of an object does not have a desired property, then research continues in its own prototype until we get to the end of prototype chain. if the property was found in objects, access returns the value undefined.

// var anObject = {
//     a: 2
// };
// Create anotherObject using anObject as a prototype

// var anotherObject = Object.create(anObject);

// console.log(anotherObject.a); // will be 2
// console.log(anotherObject.b); // will be undefined

// This type of relationship between JavaScript objects is called delegation: an object delegates part of its operation to its prototype.

// Cake Prototype

// var Pastry = {
//     type:"",
//     flavor:"",
//     layers:0,
//     price:"",
//     occasion:"",

//     describe: function(){
//         var description = "The " + this.type + " is a " + this.occasion + " pastry, has a " + this.flavor +
//         " flavor, " + this.layers + "layer(s), and costs " + this.price + ".";
//         return description;
//     }
// };

// var muffin = Object.create(Pastry);
// muffin.type= "muffin";
// muffin.flavor= "blueberry";
// muffin.layers= 1;
// muffin.price= "R20";
// muffin.occasion= "breakfast";

// var cake = Object.create(Pastry);
// cake.type="cake";
// cake.flavor= "vanilla";
// cake.layers= 3;
// cake.price= "R310";
// cake.occasion= "birthday";

// console.log(muffin.describe());
// console.log(cake.describe());

// we create an object named Pastry, which brings together the properties common to all the characters. The cake and muffin are a created via Pastry as a prototype, which delegates its features to them.

// The process of creating a pastry is a little repetitive: for each character, you must successively give a value to each character to each of its properties.You can do better by creating an initialization function by declaring the keyword "init" so we can initialize

// var Pastry = {
//     // initialize the pastry
//     init: function(type, flavor, layers, price, occasion){
//         this.type=type;
//         this.flavor=flavor;
//         this.layers= layers;
//         this.price=price;
//         this.occasion=occasion;
//     },

    // describe the pastry
//     describe: function(){
//         var description = "The " + this.type + " is a " + this.occasion + " pastry, has a " + this.flavor +
//         " flavor, " + this.layers + " layer(s), and costs " + this.price + ".";
//         return description;
//     }
// };
//  var muffin = Object.create(Pastry);
//  muffin.init("muffin","blueberry", 1 , "R20", "breakfast",);

//  var cake = Object.create(Pastry);
//  cake.init("cake","sweet vanilla", 3 , "R310", "birthday",);

// console.log(muffin.describe());
// console.log(cake.describe());

// the method init() takes the initial property values of the pastry as parameters.The pastry creation code is therefore reduced to only 2 steps:

// the actual creation, with the Pastry object as a prototype,