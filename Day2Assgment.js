// 1)	WAP to find out the sum of all integer between 100 and 200 which are divisible by 9
    // var sum = 0;
    // for(var i=100; i<=200; i++){
    //     if(i % 9 == 0){
    //         sum += i; // sum = sum + i
    //     }           
    // }
    // console.log("the sum of all integers between 100 and 200 which are divisible by 9 is " + sum);


// 2)	WAP to print Square, Cube and Square Root of all numbers from 1 to N
    // var num = parseInt(prompt("enter a number "))
    // for(var i = 1 ; i<= num;i++){
    //     console.log("square of number is ",i*i);
    //     console.log("cube  of number is ",i*i*i);
       // console.log("square root od ",Math.sqrt(i));
    // }

// 3)	WAP to find out all the leap years between two entered years

// var start = parseInt(prompt("Enter the start year: "));
// var end = parseInt(prompt("Enter the end year: "));

// console.log("Leap years between " + start + " and " + end + ":");

// for (var year = start; year <= end; year++) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         console.log(year);
//     }
// }

// 4)
// 1
// 00
// 111
// 0000
// 11111

// for(var i = 1; i<=5;i++){
//     var pattern = "";
//     for(var j = 1 ; j<=i;j++){
//         if(i % 2 == 0){
//             pattern += "0";
//         }
//         else{
//             pattern += "1";
//         }
//     }
//     console.log(pattern);
// }

// 5)
// A
// AB
// ABC
// ABCD
// ABCDE

// for(var i=1;i<=E;i++){
//     var pattern = "";
//     for(var j = i;j<=E;j++){
//         pattern ++;String.fromCharCode(64 + j);
//     }
//     console.log(pattern);
// }


// 6)
// a
// ab
// abc
// abcd
// abcde
// for(var i=1;i<=5;i++){
//     var pattern = "";
//     for(var j = 1;j<=i;j++){
//         pattern += String.fromCharCode(96 + j);
//     }
//     console.log(pattern);
// }




// 7.
// Write a Java program to find the greatest of three numbers using the ternary (conditional) operator.
// var a = parseFloat(prompt("Enter first number: "));
// var b = parseFloat(prompt("Enter second number: "));
// var c = parseFloat(prompt("Enter third number: "));
// var greatest = (a > b) ? ( (a > c) ? a : c ) : ( (b > c) ? b : c );
// console.log("The greatest number is: " + greatest);
