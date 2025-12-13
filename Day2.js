// var result = confirm("click ok or cancel");
// alert("uou clicked " + result);

//operators
//arithmetic operators
// var a = 10+20
// var b = 10-30;
// var c = 10*20;
// var d = 20/5;
// var e = 10%3; //modulus operator
// var f = 2**3; //exponentiation operator
// var g = ++a; //pre-increment
// var h = b--; //post-decrement
// var i = a+=5; //a=a+5
// var j = b-=2; //b=b-2

// console.log("the value of a is " + a);
// console.log("the value of b is " + b);
// console.log("the value of c is " + c);
// console.log("the value of d is " + d);
// console.log("the value of e is " + e);
// console.log("the value of f is " + f);
// console.log("the value of g is " + g);
// console.log("the value of h is " + h);
// console.log("the value of i is " + i);
// console.log("the value of j is " + j);


//comparison operators
// var x = 10;
// var y = 60;
// var p = x > y; //greater than
// var q = x < y; //less than
// var r = x >= y; //greater than or equal to
// var s = x <= y;
// var t = x == y; //equal to
// var u = x != y; //not equal to
// var v = x === y; //strict equal to
// var w = x !== y; //strict not equal to
// console.log("the value of p is " + p);
// console.log("the value of q is " + q);
// console.log("the value of r is " + r);
// console.log("the value of s is " + s);
// console.log("the value of t is " + t);
// console.log("the value of u is " + u);
// console.log("the value of v is " + v);
// console.log("the value of w is " + w);
// console.log(10==10); //true
// console.log(10=="10"); //true
// console.log(10==10.0); //true
// console.log(10===10); //true because both are number type
// console.log(10==="10"); //false because different type number and string
// console.log(10===10.00); //true because both are number type

// console.log(true == 1); //true when boolean true is converted to number 1
// console.log(true === 1); //false because different type boolean and number
// console.log(false == 0); //true
// console.log(false === 0); //false because different type boolean and number
// console.log(null == undefined); //true
// console.log(null === undefined); //false because different type
// console.log(NaN == NaN); //false
// console.log(NaN === NaN); //false
// console.log(true == " ") //false // when string is converted to number becomes 0
// console.log(false == " ") //true // when string is converted to number becomes 0
// console.log(false === " ") //false because different type boolean and string
// console.log(true == "1") //true // when string is converted to number becomes 1
// console.log(true === "1") //false because different type boolean and string
// console.log(" " == 0) //true // when string is converted to number becomes 0
// console.log(" " === 0) //false because different type string and number
// console.log("1" == 1) //true // when string is converted to number becomes 1
// console.log("1" === 1) //false because different type string and number
// console.log(NaN ==" ") // 



    // console.log(typeof(NaN)); //number //when string is converted to number becomes 0
    // console.log(10 < NaN); //false
    // console.log(!NaN); //true //when converted to boolean will be false which is negated to true 
    // console.log(!undefined); //true when converted to boolean    



    //logical operators
    var A = true;
    var B = false;
    var C = A && B; //logical and will be true if both operands are true
    var D = A || B; //logical or will be true if any one operand is true
    var E = !A; //logical not negation 
    //name of operator list give me name of operators
    //ternary operator
    // && and conditional operator
    // || or conditional operator
    // ! not operator
    // ?: conditional operator
    // 



    // contreol statements
    // var age = 125;
    // if(age >= 18){
    //     alert("you are eligible to vote");
    // } else {
    //     alert("you are not eligible to vote");
    // }




    // var age = 25;
    // if(age < 18){
    //     alert("you are a minor");
    // } else if(age >= 18 && age < 60){
    //     alert("you are an adult");
    // }
    // else {
    //     alert("you are a senior citizen");
    // }



   // loops
   // for loop
//    for(var i=1; i<=5; i++){
//        console.log("the value of i is " + i);
//    } 
//     // while loop
//     var j = 1;
//     while(j <= 5){
//         console.log("the value of j is " + j);
//         j++;
//     }
//     // do while loop test the condition after executing the loop body atleast once 
//     var k = 1;
//     do{
//         console.log("the value of k is " + k);
//         k++;
//     } while(k <= 5);

//     // break and continue
//     for(var m=1; m<=10; m++){
//         if(m == 6){
//             break; //exit from the loop
//         }       
//         console.log("the value of m is " + m);
//     }

//     for(var n=1; n<=10; n++){
//         if(n == 6){
//             continue; //skip the current iteration
//         }       
//         console.log("the value of n is " + n);
//     }


// // prime number  that is only divisible by 1 and itself
//     var num = 29;
//     var isPrime = true;
//     if(num <= 1){
//         isPrime = false;
//     } else {
//         for(var i=2; i<=Math.sqrt(num); i++){
//             if(num % i == 0){
//                 isPrime = false;
//                 break;
//             }           

//         }
//     }
//     if(isPrime){
//         console.log(num + " is a prime number");
//     } else {
//         console.log(num + " is not a prime number");
//     }

//   // factorial of a number
// var num = 5;
// var fac = 1;
// for(var i = 1 ; i <= num ; i++){
//     fac = fac * i;
// }
// console.log("the factorial of " + num + " is " + fac);
// // factorial of 5 = 5*4*3*2*1 = 120


// sum of digits of a number
// var number = parseInt(prompt("enter a number to find sum of digits"));
// var sum = 0;
// while(number > 0){
//     var digit = number % 10;
//     sum = sum + digit;
//     number = Math.floor(number / 10);
// }
// console.log("the sum of digits is " + sum);
// // sum of digits of 1234 = 1+2+3+4 = 10

// reverse of a number
// var number = parseInt(prompt("enter a number to reverse"));
// var reverse = 0;
// while(number > 0){
//     var digit = number % 10;
//     reverse = reverse * 10 + digit;
//     number = Math.floor(number / 10);
// }
// console.log("the reverse of the number is " + reverse);
// // reverse of 1234 = 4321


// perfect number that is equal to the sum of its proper divisors  
// var number = 28;
// var sum = 0;
// for(var i=1; i<=number/2; i++){    // proper divisors are less than or equal to number/2    
//     if(number % i == 0){ // i is a divisor if number is divisible by i if remainder is 0 
//         sum += i; // sum = sum + i
//     }
// }
// if(sum == number){
//     console.log(number + " is a perfect number");
// } else {
//     console.log(number + " is not a perfect number");
// }
// // perfect number 6 = 1+2+3 , 28 = 1+2+4+7+14

// console.log("5"+"10")
// console.log("10"-"5")
// console.log("10"*"5")
// console.log("10"/"5")
// console.log("10"%"5")

// var x = 123;
// var sum = 0;
// while(x>0){
//     sum = sum+x%10;
//     x = Math.floor(x/10);

// }
// document.writeln("sum is",sum);

//switch
// var x = parseInt(prompt("enter your choies"))
// switch(x){
//     case 1:
//         document.write("first");
//             break;
//     case 2:
//         document.write("second")
//         break;
        
//     case 3 : 
//     document.write("thrid")  
//     break;
    
//    default:
//     document.write("wrong choies") 
// }


// bitwise operators
// var a = 5; 
// console.log(x<<1); //10
// console.log(x>>1); //2
// console.log(-10 >>> 1); //2147483643
// console.log(~a); //-6

// console.log(3+2+"7") //57 because 3+2=5 then 5+"7"=57 because of left to right evaluation 
// console.log("7"+3+2) //732 because "7"+3="73" then "73"+2="732" because of left to right evaluation


// var x;
// console.log(x); //undefined because x is declared but not initialized

// var x =3;
// console.log(x/0); //NaN not a number
// console.log(0/0); //NaN not a number


// var x = 0;
// console.log(x++); //0 post increment
// console.log(++x); //2 pre increment
// console.log(x--); //2 post decrement
// console.log(--x); //0 pre decrement



console.log(5/0); // 