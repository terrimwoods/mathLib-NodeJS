module.exports = {
    sum:function(num1, num2){
        return num1 + num2;
    },
    smaller: function(num1, num2){
        //return the smallest(lower)number

        if(num1 < num2){//if you only have one instruction after an if statement you do not need the {}

            return num1;
        }
        /*else{
            return num2;
        }*/  
    },
    greater: function(num1, num2, num3){
        //if num1 is greater than num2 AND num1 is greater than num3, return num1
        if (num1 > num2 && num1 > num3) return num1;
        if(num2 > num1 && num2 > num3) return num2;
        return num3;
    },
    multiply: function(num1, num2){
        return num1 * num2;
    },
    divide: function(num1, num2){
        
        if(num2 == 0){
            console.log("Error, you should not divide by zero");
        
        return 0;
        }

        return num1/num2;
    },
isEven: function(a){
   var res = a % 2; //divide by 2, get the residue(not the result). %modulus (mod) operator

   //if(res == 0) return true;
  // return false; this solution is exactly the same as return res ==0;

   return res == 0;// return either true or false
    //res = num % 2

   //return (num % 2)== 0;
},
isOdd:function(b){
    var res = b % 2;
    
    return res != 0;
}


};