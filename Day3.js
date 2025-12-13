// console.log("Day 3 class works");

//arrays in javascript
// var a = ['abc','xyz','www']
// console.log(a[0])
// a[0]="dev"
// console.log(a[0])
// console.log(a)

// var b  = [];
// console.log(b);
// var c = new Array();
// c[0]="dev"
// c[1]="abc"
// c[2]="xyz"
// c[3]=554.4
// console.log(c);
// console.log(b.length);
// console.log(c);,



//var a = [10,20,200,2,60,77,30,40,50]
// a.push(60)
// console.log(a)
//console.log(a.pop())

// a.unshift(5)
// console.log(a);
// console.log(a.unshift(3))
// console.log(a)
// a.shift();
// console.log(a);


// console.log(a.indexOf(20));
// console.log(a.indexOf(500));

// console.log(a)
// x = a.slice(1,5)
// x = a.slice()
// console.log(x)

// var x = [[10,20,30,40,50],['www','abc','xyz']]
// document.write(x[1][2])

// book =[];
// input = prompt("while operation u want to perfrom - add|list|exit")
// while(input != 'exit'){
//     if(input == 'add'){
//         newBook = prompt("Enter new Book")
//         book.push(newBook);
//     }
//     else if(input == 'list'){
//         console.log("list of Book are")
//         console.log(book);
     
//     }
//     else{
//         console.log("invalid option")
//     }
//     input =  prompt("wiche opration")
// }
// console.log("completed")


  // var a = [10,20,200,2,60,77,30,40,50]
// for( i =0;i<a.length;i++){
//     console.log(a[i]);
// }
// console.log("for loop")

// i = 0;
// while(i<a.length){
//     console.log(a[i]);
//     i++;
// }
// console.log("while loop")


// i = 0;
// do {
//     console.log(a[i]);
//     i++;
// } while (i<a.length);
// console.log(" Do  while loop")

//for of
// for (i  of a) {
//     console.log(i)
    
// }

//for of

// var y = ['dev','ravi','anu','shiv','nk']
// for (a of y) {
//     console.log(a);
    
// }

//foreach

// a.forEach(a=>console.log(a));y



// var a = ['dev','ravi','dev','mk']

// function display(y){
//   console.log("********************")
//   console.log(y)
//     console.log("********************")
// }
// a.forEach(display);

// a.forEach(function(y){
//   console.log("********************")
//   console.log(y)
//   console.log("********");
// })


// a.forEach(alert) 
//splice is used to add or remove elements from array
// a.splice(1,2);
// console.log(a);



// a.splice(2,0,'www','abc');// adding elements at index 2  without removing any element
// console.log(a);
// // why java script is called as loosely typed language ?
// // because we can store any type of data in a variable or array without defining data type explicitly 
// a.splice(3,2,'xyz');// removing 2 elements from index 3 and adding 'xyz' at index 3
// console.log(a);// final array after splice operation whre we removed 2 elements and added 1 element

// a.splice(2,0,'hello','hi','welcome');// adding 3 elements at index 2 without removing any element
// console.log(a);
// // final array after all splice operations 


// function rev1(y){
//   for(i=y.length-1;i>=0;i--){ // loop starts from last index to 0 index 
//     console.log(y[i]);
//   }
// }
// var b = [10,20,30,40,50]
// rev1(b); // calling rev1 function with array b where elements are numbers itraversed in reverse order 

// var c = ['dev','ravi','mk','anu']
// rev1(c); // calling rev1 function with array c where elements are strings itraversed in reverse order


//map in javascript 
//  var a = [10,20,30,40,50] // original array 
// var b =a.map(n =>n*2) // new array b created by multiplying each element of array a by 2 using map function
// console.log(b); // displaying new array b
// console.log(a); // displaying original array a to show it remains unchanged



// var a = [1,2,3,4,5,6,7,8,9,10]
// var b = a.map(n => n%2 ==1) // creating new array b where each element indicates if corresponding element in array a is odd (true) or even (false)
// console.log(b); // displaying new array b
// console.log(a); // displaying original array a to show it remains unchanged


// filter in javascript
// filter is used to create a new array with all elements that pass the test implemented by the provided function

// var a = [10,15,20,25,30,35,40,45,50]
// var c = a.filter(n => n % 2 == 0) // creating new array c containing only even numbers from array a using filter function
// console.log(c); // displaying new array c
// console.log(a); // displaying original array a to show it remains unchanged
// var b = a.filter(n => n % 2 == 1) // creating new array b containing only odd numbers from array a using filter function
// console.log(b); // displaying new array b
// console.log(a); // displaying original array a to show it remains unchanged
//Basic Array Methods
//Array length
// Array length
// Array indexOf()
// Array lastIndexOf() 

//Array toString()
// Array valueOf()
// Array fill()
// Array reverse()


//Array at()
//  





// Array join()
// Array pop()
// Array push()
// Array shift()
// Array unshift()
// Array isArray()
// Array delete()
// Array concat()
// Array copyWithin()
// Array flat()
// Array slice()
// Array splice()
// Array toSpliced()



//flat() method in javascript
// var arr = [1, 2, [3, 4], [5, 6]];
// var flattenedArr = arr.flat();
// console.log("Flattened array: " + flattenedArr);// output [1,2,3,4,5,6]  
// var arr = [1, 2, [3, 4, [5, 6]]];
// var flattenedArr = arr.flat(2);
// console.log("Flattened array with depth 2: " + flattenedArr);// output [1,2,3,4,5,6]
