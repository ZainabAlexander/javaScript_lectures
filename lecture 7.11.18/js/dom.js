// modifying documents after they finished  loading-add new content to a page, change the color of an element to reflect a changing state, or remove an element the user does not need anymore..

// interact with your users- whether ticking a box, commenting on a blog post or submit a text form, your users need to be able to communicate with you.. js allows them to do so;

// send and receive data to and from external APIs harness the power of the the thousands of useful APIs that already exist or plug your frontend app into your own custom back end.

// Get access to the DOM

// document.getElementsByTagName()
// document.getElementsByClassName()
// document.querySelector()
// document.getElementById()

// document.getElementById("demo").innerHTML = "Hello World!";
// document.getElementsByClassName("pink").innerHTML.style.backgroundColor="";

// create an html file name index
// create a paragraph with some text describing what document module is
// below the para you must have two buttons one a blue and the second must be red
//  click on the blue button the color should change to blue same with the red


function changeColor(newColor) {
    let btn = document.getElementById('text');
    btn.style.color = newColor;
}
function pink() {
    document.getElementById("text").style.backgroundColor="pink"
    };