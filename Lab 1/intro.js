
var mathLib = require("./myMath");

function init() {
    console.log("Intro");


    var res = mathLib.sum(21, 21);
    console.log("Result: " +res);

    var smaller = mathLib.smaller(845, 1453);
    console.log("Result: " + smaller);

    var greater = mathLib.greater(10, 9, 17);
    console.log("Result: " + greater);

    var multiply = mathLib.multiply(43,123);
    console.log("Result: "+ multiply);

    var divide = mathLib.divide(1,2);
    console.log("Result: "+ divide);

    var e = mathLib.isEven(99);
    console.log("Result: "+ e);

    var o = mathLib.isOdd(99);
    console.log("Result: "+o);
}



init();