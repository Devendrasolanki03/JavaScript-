// var x = [1,2,4,5,6];

// var sum = x.reduce((total, num) => total + num, 0);// 0 is initial value for total  

// console.log("Sum of array elements is: " + sum);


// var product = x.reduce((total, num) => total * num, 1);// 1 is initial value for total  this is because in multiplication we need to start with 1

// console.log("Product of array elements is: " + product);


//  var words = ["Hello", "world", "this", "is", "JavaScript"];// array of words 

//  var sentence = words.reduce((total, word) => total + " " + word);// concatenating words to form a sentence only space is initial value for total 
//     console.log("Constructed sentence: " + sentence);


// // find() method example // it returns the first element that satisfies the provided testing function
//     var numbers = [10, 25, 30, 45, 50];
//     var firstLargeNumber = numbers.find(num => num > 30);// find first number greater than 30 
//     console.log("First number greater than 30: " + firstLargeNumber);// output 45  


 //includes() method example // it checks if an array contains a certain element and returns true or false
    // var fruits = ["apple", "banana", "mango", "orange"];
    // var hasMango = fruits.includes("mango");
    // console.log("Array contains mango: " + hasMango);// output true

    // var hasGrapes = fruits.includes("grapes");
    // console.log("Array contains grapes: " + hasGrapes);// output false
 

    // sort() method example // it sorts the elements of an array in place and returns the sorted array
    // var numbers = [40, 10, 5, 25, 15];
    // numbers.sort((a, b) => a - b);// sorting in ascending order
    // console.log("Sorted numbers in ascending order: " + numbers);// output [5,10,15,25,40]
    // numbers.sort((a, b) => b - a);// sorting in descending order
    // console.log("Sorted numbers in descending order: " + numbers);// output [40,25,15,10,5]

    // var fruits = ["banana", "apple", "orange", "mango"];
    // fruits.sort();// sorting in alphabetical order
    // console.log("Sorted fruits in alphabetical order: " + fruits);// output [apple,banana,mango,orange]
    // fruits.sort((a, b) => b.localeCompare(a));// sorting in reverse alphabetical order
    // console.log("Sorted fruits in reverse alphabetical order: " + fruits);// output [orange,mango,banana,apple]
// 


//reverse() method example // it reverses the order of the elements in an array in place and returns the reversed array
    // var numbers = [10, 20, 30, 40, 50];
    // numbers.reverse();
    // console.log("Reversed numbers: " + numbers);// output [50,40,30,20,10]



 // join() method example // it joins all elements of an array into a string and returns the string
    // var words = ["Hello", "world", "this", "is", "JavaScript"];
    // var sentence = words.join(" ");// joining words with space as separator
    // console.log("Joined sentence: " + sentence);// output "Hello world this is JavaScript"   



// concat() method example // it merges two or more arrays and returns a new array
    // var array1 = [1, 2, 3];
    // var array2 = [4, 5, 6];
    // var mergedArray = array1.concat(array2);
    // console.log("Merged array: " + mergedArray);// output [1,2,3,4,5,6]


 //every() method example // it tests whether all elements in the array pass the test implemented by the provided function
    // var age = [22, 25, 30, 28, 35];
    // var allAdults = age.every(num => num >= 18);
    // console.log("All elements are adults: " + allAdults);// output true 




//   var even = [2,4,16,8,10];
//   var allEven = even.every(num => num % 2 === 0);
//   console.log("All elements are even: " + allEven);// output true     
  
// some() method example // it tests whether at least one element in the array passes the test implemented by the provided function
    // var mixed = [1,3,5,8,7];
    // var hasEven = mixed.some(num => num % 2 === 0);
    // console.log("Array contains at least one even number: " + hasEven);// output true   


    // var age = [15,17,20,22,25];
    // var hasAdult = age.some(num => num >= 18);
    // console.log("Array contains at least one adult: " + hasAdult);// output true

// funtions in javascript 
// function greet(name){
//   console.log("Hello " + name + ", welcome to JavaScript functions!");
// }    
// greet("Dev");// calling greet function with argument "Dev"
// greet("Ravi");// calling greet function with argument "Ravi"