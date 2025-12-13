// function hello(name){
// return "Hello " + name;
// }
// console.log(hello("Alice"));
// console.log(hello());//undefined
// //default parameters
// function hello1(name="Guest"){
//     return "Hello " + name;
//     }
//     console.log(hello1("Alice"));
//     console.log(hello1());//Guest


// Assignment: Create a function that adds two numbers with default parameters.
// function add(a=10,b=20){
//     return a + b;
// }
// console.log(add(5,15));//20
// console.log(add(5));//25
// console.log(add());//30




// function add(a=10,b){// b is undefined it should be right side parameter also should have default value
//     return a + b;
// }
// console.log(add(5,15));//20
// console.log(add(5));//NaN
// console.log(add());//NaN 



// function add(a,b=20){// a is undefined
//     return a + b;
// }
// console.log(add(5,15));//20
// console.log(add(5));//25
// console.log(add());//NaN  a is mandatory here



//Rest Parameters is used to represent an indefinite number of arguments as an array.
// function sum(...numbers){
//     console.log(numbers);// array of numbers
// }
// sum(1,2,3);//[1,2,3]
// sum(5,10,15,20,25);//[5,10,15,20,25]


// function display(x,...n){
//     console.log(x);// first argument
//     console.log(n);// array of rest arguments
// }
// display("Hello",1,2,3,4,5);// x="Hello", n=[1,2,3,4,5]
// display("World",10,20);// x="World", n=[10,20]



// rest with default parameters
// function display(x,y="developer",...n){
//     console.log(x); // first argument
//     console.log(y); // second argument or default value
//     console.log(n); // array of rest arguments
// }
// display("Alice","engineer",1,2,3);// x="Alice", y="engineer", n=[1,2,3]
// display("John");// x="John", y="developer", n=[]
// display("anu"," abc",20);// x="anu", y=10, n=[20]
// display("xyz",undefined,5,10);// x="xyz", y="developer", n=[5,10]
// display("pqr",null,15);// x="pqr", y=null, n=[15]



//callback function is a function passed as an argument to another function which is then colled back inside the outer
//  function to complete some kind of routine or action.

// function Calculator(a,b,callback){// callback function as parameter  
//     return callback(a,b);
// }
// function add(x,y){ // callback function itself returns sum of x and y
//     return x + y;
// }
// function subtract(x,y){ // callback function itself returns difference of x and y
//     return x - y;
// }
// function multiply(x,y){ // callback function itself returns product of x and y
//     return x * y;
// }
// function divide(x,y){// callback function itself returns division of x and y    
//     return x / y;
// }
// console.log(Calculator(5,10,add));//15
// console.log(Calculator(5,10,multiply));//50
// console.log(Calculator(10,5,subtract));//5
// console.log(Calculator(10,5,divide));//2



//callback funtion with anoniman function
// function done(){  
// console.log("done")
// }
// setTimeout(done,1000);
// console.log("are gyxx")
// setTimeout(()=> {
//     console.log("js is going on");
// },1000);
// console.log("java alredy done")
// setTimeout(()=> {
//     console.log("Funtion is going on");
// },1000);
// console.log("java alredy done")

//collback hell 


// IIFE()

// ( function (){
//     console.log("hello world");
// })();

// without funtion
// (()=>{
//     console.log('dev');
// })();

// console.log("hello world");


// function hello(name , change){
//     return "hello"+change(name);
// }
// function toUpper(str){
//     return str.toUpperCase();
// }
// function tolower(str){
//     return str.toLowerCase();
// }
// console.log(hello("dev",toUpper))// DEV
// console.log(hello("ABC",tolower))//abc

// function hell() {
//     var n = "dev";
//     console.log(n);
    
// }
// //console.log(n);// it cant be use outside the funtion
// hell();



//var
// function hello(){
//     var n = "dev";
//     console.log(n);
//     if(true){
//         var age = 30;
//     }
//     console.log(age)
// }
// hello();


//let
// function hello(){
//     let n = "dev";
//     console.log(n);
//     if(true){
//         let age = 30;
//     }
//     //console.log(age)// error
// }
// hello();


// const 
// function hello(){
//     let n = "dev";
//     console.log(n);
//     if(true){
//         const age = 30;
//         age = 300; // error
//     }
//     //console.log(age)// error
// }
// hello();

// hosting behaviours

// console.log(x);
// var x=20;  // undidened



// console.log(x);
// let x = 50;//DefualtPrameters.js:196 Uncaught ReferenceError: Cannot access 'x' before initialization




// redeclaid 

// var name1 = "dev";
// var nmae1 = "raj";
// console.log(nmae1)//raj


// let name1 = "dev";
// name1 = "raj" // allowed
// let name1 = "rak"; // error
// console.log(name1);



// const n = 1
// const n = 2;// error
// n = 20; // also erro
// console.log(n);



