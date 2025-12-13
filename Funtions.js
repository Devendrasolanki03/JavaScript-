// funtions in JavaScript
// funtions are blocks of code designed to perform a particular task. They are executed when "called" or "invoked".
// funtion definition // funtion is defined using the "function" keyword followed by the function name and parentheses ().
// 
// Function Declaration
// function add(){
//     a = 5;
//     b = 10;
//     c = a + b;
// console.log("The sum is: " + c);
// }
// add(); // function call 



// function add(a, b){ // function with parameters
//     c = a + b;
//     console.log("The sum is: " + c);
// }
// add(20, 30); // function call with arguments
// // Function with return value
// function add(a, b){
//     c =a + b;
//     return c;
// }
// var x = add(15, 25); // function call with return value
// console.log("The sum is: " + x);





// var a = prompt("Enter first number: ");
// var b = prompt("Enter second number: ");
// function add(a, b){
//     c = parseInt(a) + parseInt(b);
//     return c;
// }
// var sum = add(a, b);
// console.log("The sum is: " + sum); // function call with return value 

// function add(a){
//     for(var i = 1; i <= 10; i++){
//         a[i]=a[i]*a[i]; 
//     } 
//     return a;  
// }
// var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var arr = add(x);
// console.log(arr);   // 
// add(arr); // function call with array as argument



// function add(a){
//     a = a * a;
// }
// var x = 10;
// add(x);
// console.log(x);  // 10 (because primitive data types are passed by value)ty



// var x =[1, 2, 3, 4, 5];
// console.log(typeof x); // object



// funtion expression
// var add = function(a, b){
//     c = a + b;
//     return c;
// }
// var sum = add(30, 40); // function call
// console.log("The sum is: " + sum);


// var hello = function(){
//     return "are sun rahe hoo";
// }
// function bye (x){  
//     console.log(x());
// }
// bye(hello); // function call with function as argument  


// goodbye = function(){
//     return "bye bye";
// }
// bye(goodbye); // function call with function as argument


// arrow function
// var add = (a, b) => a + b; // arrow function
// var sum = add(50, 60); // function call
// console.log("The sum is: " + sum);


// var sum = (a, b) => {
//     console.log("Calculating the sum..."); // additional statement  
//     return a + b; // arrow function with multiple statements
// }   
// var result = sum(70, 80); // function call
// console.log("The sum is: " + result);


// var name = prompt("enter your name: ");
// var upername = (a) =>{
//     console.log("welome");
//     return a.toUpperCase();

// }
// var x = upername(name);
// console.log(x);



// give perfact number in given array
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
function perfactnum(a){
    for(var i = 1; i < a/2; i++){
        if(i * (i + 1) == a){
            return a;
        }
    }
    

      
}
var result = perfactnum(arr);
console.log("The perfact numbers are: " + result);