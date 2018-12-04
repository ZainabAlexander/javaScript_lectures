// using objects and prototypes create 3 pizzas 
// 1 vegetarian
// halal
// meaty

var Pizza = {
    // initialize the pizza (prototype)
    init: function(type, base,toppings,layers, price,){
        this.type=type;
        this.base=base;
        this.toppings=toppings;
        this.layers= layers;
        this.price=price;
       
    },

    describe: function(){
        var description = "The " + this.type + " has a " + this.base + " base.This pizza has the following toppings " + this.toppings +
        " , has " + this.layers + " layer(s), and costs " + this.price + ".";
        return description;
    }
};

var vegetarian = Object.create(Pizza);
vegetarian.init("vegetarian pizza","thick", "avocado,pineapple,olives,peppers and mushrooms" , 1, "R70",);

var halaal = Object.create(Pizza);
halaal.init("Halaal pizza","stuffed crust", "chicken, cheese, mushrooms and pineapple", 3, "R150",);

var meaty = Object.create(Pizza);
meaty.init("meaty pizza","thick","bacon,sausage,chicken and cheese", 1, "R100",);

console.log(vegetarian.describe());
console.log(halaal.describe());
console.log(meaty.describe());


// Eating of the pizza

var eating ={
    init:function(type,location,utensils,){
        this.type=type;
        this.location=location;
        this.utensils=utensils;
    },
    describe:function(){
        var description = "When i receive my " + this.type + ", I sit down on my " + this.location + ". I open my box of " + this.type + " and grab a slice with my " + this.utensils + " and start eating .";
        return description;
    }
};

var pizza = Object.create(eating);
eating.init("halaal pizza", "couch", "hands",);

console.log(eating.describe());