//Notes
//(Ternary operation) condition ? exprIfTrue : exprIfFalse

//Declare Variables
var flag = true;
//var start = "document.getElementById";

//Functions
function myFunction() {
    //let start = document.getElementById;
    document.getElementById("itsbutton").innerHTML = flag ? "Hello" : "Press Me";
    flag = !flag;
}

function changeColor(){

    document.getElementById("colorb").style.backgroundColor = flag ? rgb(84, 94, 83) : "lavender";
    flag = !flag;

}