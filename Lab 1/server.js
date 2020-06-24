
console.log("Hello NodeJS");


var name = "Terri";
var lastName = "Woods";
var age = 52;
var found = false;
var average = 12.3211;
if(age < 60){
    console.log("You are still young");
}

else{
    console.log("Sorry, you are getting older");
    
}

//print numbers from 3 - 12, except the 9

for(let i=3; i < 13; i++){
    if(i !=9){
    console.log(i);
    }
}


//arrays

var names = [];
names.push("Terri");
names.push("Nora");
names.push("Gerry");
names.push("Bruin");

console.log(names[0]);//first element

    //List names
//for(var j=0; j< names.length; j++){

    //List names in reverse
for(var j=names.length -1; j >= 0; j--){
    console.log(names[j]); 

}
    






//terminal
//node filename |node server.js
//clear terminal  command is:  cls for visual studio code
//win: CMDR is for using the alternate CMD window


