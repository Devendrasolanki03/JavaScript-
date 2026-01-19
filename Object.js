// var student = {
//     id:101,
//     name: "dev",
//     salary : 3000
// }
// console.log(student)
// console.log(student['name']);
// console.log(student.salary);



// var student = {

// }
// // var employee = new Object();


// student['firstname'] = "dev"
// student.lastname = 'padukon'
// console.log(student)
// console.log(student.firstname);
// console.log(student.lastname)


// var student = {
//     id : 1,
//     name : 'dev',
//     salary :554


// }
// for(x in student){
//     console.log(student[x])
// }

// var student=[
//     {
//         id : 1,
//     name : 'dev',
//      salary :554
//     },
//        {
//         id : 2,
//     name : 'devraj',
//      salary :55455
//     },
//        {
//         id : 3,
//     name : 'ravi',
//      salary :54454
//     }

// ]
// // // console.log(student)
// // console.log(student[0])

// for (var students of student)
//     {
//      console.log(students)
// }





// aray inside the object
// var student =
//     {
//         id : 1,
//     name : 'dev',
//      salary :554,
//      marks : [1,2,34]
//     }
//      console.log(student)
// var student = {
//      id : 1,
//     name : 'dev',
//      salary :554,
//      display: function(){
//         console.log("this is display")
//         console.log(this.id + " and "+this.name)
//      }

// }
// student.display()



// function show (){
//     console.log("this is show funtion")
//        console.log("this is display")
//         console.log(this.id + " and "+this.name)

// }

// var student = {
//      id : 1,
//     name : 'dev',
//      salary :554,
//      display:show
// }
// student.display()



// var student = {
//      id : 1,
//     name : 'dev',
//      salary :554,
//      show (){
//     console.log("this is show funtion")
//        console.log("this is display")
//         console.log(this.id + " and "+this.name)

// }
// }
// student.show()


// var student = {
//      id : 1,
//     name : 'dev',
//      salary :554,
//     display : () =>{
//     console.log("this is show funtion")
//        console.log("this is display")
//         console.log(student.id + " and "+student.name)

// }
// }
// student.display();


// var movies = [
//     {name:"dev",iswatech:true,isHit:true},
//     {name:"pushpa",iswatech:false,isHit:false}
// ]

// movies.forEach(function(movie){
//     result="I"
//     if (movie.iswatech) {
//         result = result + " watched ";
//     } else {
//         result = result + " not seen "
//     }
//     result = result+movie.name + "  add movies is"
//     if (movie.isHit)
//         {
//             result = result+ " Hit "
//     } else {
//         result = result+" flop "
//     }
//     console.log(result)
// })



// var student = new Object();
// student.id=101;
// student.name="dev";
// console.log(student)

// student.name="ravi";
// console.log(student)

// student.age=30;
// console.log(student)



// var student1 = new Object();
// student1.id=101;
// student1.name="dev";
// console.log(student1)


// var student2 = new Object();
// student2.age=11;
// student2.salary=54444554
// console.log(student2)


// let obj = {...student1,...student2}
// console.log(obj)
// console.log(Object.keys(obj))// keys
// console.log(Object.keys(obj).length) // length of keys
// console.log(Object.values(obj))// values
// console.log(Object.entries(obj))

// let obj1 = {
//     id:1,
//     name:"dev",

// }
// // Object.freeze(obj1)
// Object.seal(obj1)
// console.log(obj1)
// obj1.name="ravi"
// console.log(obj1)

// let student = {
//     name:'dev',
//     address:{
//         city:"indore",
//         pin:455521
//     }
// }
// Object.freeze(student)
// student.age=30;
// console.log(student)
// student.address.state="MP";
// console.log(student)
// console.log(student.address.city)
// let student = {
//     name:'dev',
//     address:{
//         city:"indore",
//         pin:455521
//     }
// }


// let student1 = {
//     name:'dev',
//     address:{
//         city:"indore",
//         pin:455521
//     }
// }

// let s1 = student1;
// console.log(student===student1)//false
// console.log(s1==student1)// ture

// let x = [23]
// let y = [23]

// console.log(typeof(x)
// )
// console.log(x==y) // false



// assginment
// 1.
// An array holds food order objects with dishName, isDelivered, and isVegetarian.

// Write a message for each order.

// If it’s vegetarian and delivered, print: "Your vegetarian dish [dishName] has been delivered."

// If not delivered, print: "Your [dishName] is still being prepared."
// const orders = [
//   { dishName: "Paneer Butter Masala", isDelivered: true, isVegetarian: true },
//   { dishName: "Chicken Biryani", isDelivered: false, isVegetarian: false },
//   { dishName: "Veg Fried Rice", isDelivered: true, isVegetarian: true }
// ];

// orders.forEach(order => {
//   if (order.isVegetarian && order.isDelivered) {
//     console.log(`Your vegetarian dish ${order.dishName} has been delivered.`);
//   } else {
//     console.log(`Your ${order.dishName} is still being prepared.`);
//   }
// });




//02
// 2.
//  Travel Plans
// An array of trip plans with properties: destination, isBooked, isInternational.
// For each destination, log if it’s booked and whether it’s international or domestic.

// Format the output like: "Trip to [destination] is [booked/not booked] and it's an [international/domestic] trip."
// const trips = [
//   { destination: "Paris", isBooked: true, isInternational: true },
//   { destination: "Goa", isBooked: false, isInternational: false },
//   { destination: "Dubai", isBooked: true, isInternational: true }
// ];

// trips.forEach(trip => {
//   const bookingStatus = trip.isBooked ? "booked" : "not booked";
//   const tripType = trip.isInternational ? "international" : "domestic";

//   console.log(`Trip to ${trip.destination} is ${bookingStatus} and it's an ${tripType} trip.`);
// });


// 03
// 3.

// You’re managing a job application tracker with jobTitle, isApplied, and isRemote.

// Questions:

// Loop through jobs and print the application status.

// Include remote/in-office info in the message.

// Example: "Applied for remote role: Developer" or "Haven’t applied for the in-office role: Designer
// const jobs = [
//   { jobTitle: "Developer", isApplied: true, isRemote: true },
//   { jobTitle: "Designer", isApplied: false, isRemote: false },
//   { jobTitle: "Tester", isApplied: true, isRemote: false }
// ];

// jobs.forEach(job => {
//   const workType = job.isRemote ? "remote" : "in-office";

//   if (job.isApplied) {
//     console.log(`Applied for ${workType} role: ${job.jobTitle}`);
//   } else {
//     console.log(`Haven’t applied for the ${workType} role: ${job.jobTitle}`);
//   }
// });



//04
// 4.
// A librarian wants to manage the details of books in a library using JavaScript. The system should use only objects, not classes or nested objects. The librarian must be able to perform basic operations such as viewing, searching, and analyzing books in the inventory.

// Create 5 book objects with the following properties:

// title (string)

// author (string)

// isbn (string)

// price (number)

// Store these objects in an array called books.

// Apply a 10% discount to each book where the original price is greater than ₹500.

// Provide a menu-driven system using prompt() to:

// View all books (with updated prices)

// Search a book by title

// Display the most expensive book

// Show all books by a specific author

// Count the number of books above a given price

// Display the total inventory value

// Exit the application
// const books = [
//   { title: "JavaScript Basics", author: "John Doe", isbn: "ISBN001", price: 650 },
//   { title: "Advanced Java", author: "James Gosling", isbn: "ISBN002", price: 850 },
//   { title: "Python Guide", author: "Guido van Rossum", isbn: "ISBN003", price: 450 },
//   { title: "Web Development", author: "John Doe", isbn: "ISBN004", price: 700 },
//   { title: "Data Structures", author: "Mark Allen", isbn: "ISBN005", price: 500 }
// ];


// books.forEach(book => {
//   if (book.price > 500) {
//     book.price = book.price * 0.9;
//   }
// });



// let choice;

// do {
//   choice = prompt(
//     "Library Menu:\n" +
//     "1. View all books\n" +
//     "2. Search book by title\n" +
//     "3. Display most expensive book\n" +
//     "4. Show books by author\n" +
//     "5. Count books above a price\n" +
//     "6. Display total inventory value\n" +
//     "7. Exit\n\n" +
//     "Enter your choice:"
//   );

//   switch (choice) {

//     case "1":
//       books.forEach(book => {
//         console.log(`${book.title} | ${book.author} | ₹${book.price}`);
//       });
//       break;

//     case "2":
//       const titleSearch = prompt("Enter book title:");
//       const foundBook = books.find(book => book.title.toLowerCase() === titleSearch.toLowerCase());

//       if (foundBook) {
//         console.log(`Found: ${foundBook.title} by ${foundBook.author} - ₹${foundBook.price}`);
//       } else {
//         console.log("Book not found");
//       }
//       break;

//     case "3":
//       let expensiveBook = books[0];

//       books.forEach(book => {
//         if (book.price > expensiveBook.price) {
//           expensiveBook = book;
//         }
//       });

//       console.log(`Most Expensive Book: ${expensiveBook.title} - ₹${expensiveBook.price}`);
//       break;

//     case "4":
//       const authorName = prompt("Enter author name:");
//       const authorBooks = books.filter(book => book.author.toLowerCase() === authorName.toLowerCase());

//       if (authorBooks.length > 0) {
//         authorBooks.forEach(book => console.log(book.title));
//       } else {
//         console.log("No books found for this author");
//       }
//       break;

//     case "5":
//       const priceLimit = Number(prompt("Enter price:"));
//       const count = books.filter(book => book.price > priceLimit).length;
//       console.log(`Books above ₹${priceLimit}: ${count}`);
//       break;

//     case "6":
//       const totalValue = books.reduce((sum, book) => sum + book.price, 0);
//       console.log(`Total Inventory Value: ₹${totalValue}`);
//       break;

//     case "7":
//       console.log("Exiting Library System...");
//       break;

//     default:
//       console.log("Invalid choice");
//   }

// } while (choice !== "7");



// //explain object and its all methods
// let person = {
//     name: "dev",
//     age: 22,
//     city: "hyd"
// };
// console.log(Object.keys(person));// return array of keys
// console.log(Object.values(person));// return array of values
// console.log(Object.entries(person));   // return array of key value pairs
// console.log(Object.fromEntries([["name", "dev"], ["age", 22], ["city", "hyd"]])); // convert array of key value pairs to object
// console.log(Object.assign({ country: "india" }, person));// merge objects
// console.log(Object.freeze(person));// will freeze the object
// person.age = 23; // will not change because object is freezed
// console.log(person);// { name: 'dev', age: 22, city: 'hyd' }
// console.log(Object.freeze(person));// will freeze the object
// console.log(Object.seal(person));
// person.city = "banglore";
// person.country = "india"; // will not add because object is sealed
// console.log(person);

// console.log(Object.getOwnPropertyDescriptors(person));
// console.log(Object.getOwnPropertyNames(person));
// console.log(Object.getOwnPropertySymbols(person)); // if symbol properties are there then it will return otherwise empty array
// console.log(Object.isExtensible(person)); // false because object is sealed
// console.log(Object.isFrozen(person)); // true because object is freezed
// console.log(Object.isSealed(person)); // true because object is sealed
// console.log(Object.preventExtensions(person)); // will prevent further extensions to object
// person.state = "telangana"; // will not add because object is not extensible
// console.log(person);
// console.log(Object.prototype.toString.call(person));
// console.log(Object.prototype.hasOwnProperty.call(person, "name"));
// console.log(Object.prototype.isPrototypeOf.call({}, person)); // false because person is not prototype of {}
// console.log(Object.prototype.propertyIsEnumerable.call(person, "name")); // true because name is enumerable property
// console.log(Object.prototype.valueOf.call(person));
// console.log(Object.create(person)); // create new object with person as prototype




// const user = {
//     name: "Devendra",
//     role: "Java Developer",
//     experience: 1
// };

// console.log(Object.keys(user)); // it will return array of keys
// console.log(Object.values(user)); // it will return array of values
// console.log(Object.entries(user)); // it will return array of key value pairs
// console.log(Object.fromEntries([["name", "Devendra"], ["role", "Java Developer"], ["experience", 1]])); // it will convert array of key value pairs to object
// console.log(Object.assign({ location: "India" }, user)); // it will merge two objects
// Object.freeze(user); // it will freeze the object
// user.experience = 2; // it will not change the value because object is freezed
// console.log(user); // { name: 'Devendra', role: 'Java Developer', experience: 1 }


// Object.seal(user); // it will seal the object
// user.role = "Senior Java Developer"; // it will change the value because object is sealed
// user.location = "India"; // it will not add new property because object is sealed
// console.log(user); // { name: 'Devendra', role: 'Senior Java Developer', experience: 1 }


// hasOwnProperty
// console.log(user.hasOwnProperty("name")); // true it checks if the property exists in the object
// console.log(user.hasOwnProperty("location")); // false


// create
// const newUser = Object.create(user); // it will create new object with user as prototype
// console.log(newUser); // {}
// console.log(newUser.name); // Devendra
// console.log(newUser.role); // Java Developer


// //is() this method checks if two objects are the same
// const user1 = {
//     name: "Devendra",
//     role: "Java Developer",
//     experience: 1
// };
// console.log(Object.is(user, user1)); // false it checks if two objects are same
// const user2 = user;
// console.log(Object.is(user, user2)); // true


// //defineProperty this method is used to define a new property or modify an existing property on an object
// Object.defineProperty(user, "salary", {
//     value: 50000, // value of the property

// });


// class users {
//     #password;
//     constructor(name,password){
//         this.name = name;
//         this.#password = password;
//     }
//     checkPassword(password){
//         return this.#password === password;
//     }
//     abc(){
//         console.log(this.#password); // accessing private field within the class    
//     }
// }
// const u1 = new users("dev","12345");
// u1.abc();
// console.log(u1.name); // dev
// console.log(u1.checkPassword("12345")); // true
// // console.log(u1.#password); // undefined


//findlast() is a method that returns the last element in an array that satisfies a given condition
// it introduced in ES2023 es14
// it resturn the last element that satisfies the condition
// stop  as soon as it finds the last element that satisfies the condition
// if no element satisfies the condition it returns undefined
//


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const lastEven = numbers.findLast(num => num % 2 === 0);
// console.log(lastEven); // 10



// findlastIndex() is a method that returns the index of the last element in an array that satisfies a given condition
// it introduced in ES2023 es14
// it resturn the index of last element that satisfies the condition
// stop  as soon as it finds the last element that satisfies the condition
// if no element satisfies the condition it returns -1

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const lastEvenIndex = numbers.findLastIndex(num => num % 2 === 0);
// console.log(lastEvenIndex); // 9 

// static and non static method in class
// console.log("hello world ");
// static method 
// class Demo {
//     static show() {
//         console.log("staic method");
//     }

// }
// Demo.show();

// non static method
// class Person{
//     constructor(name){
//         this.name=name;
//     }
//     greet(){
//         console.log("hyy",this.name);
//     }
// }
// let p = new Person("dev");
// p.greet()

// static

// class Mathutil {
//     static add(a,b){
//         return a+b;
//     }
// }
// console.log(Mathutil.add(10,20));


//05

// class calculator{
//     static add(a,b){
//         return a+b;
//     }

//     static substreact(a,b){
//         return a-b;
//     }

// }
// console.log(calculator.add(10,20));
// console.log(calculator.substreact(60,50))

// static method are function that are defind on a class  but not are accesable throw instances of a class insted of they colled direclty class it sell
// this method are use full for creating util or function or shared logic does not depend indivical instans 
// non static - a non static are method that bilong to an object of a class it is colled using the object not class uses of non static methood 
// 1 we method use object data
// 2 when behavious of object is deffrent 
// this keyword are used of 
// no acces are to instanc method 


// function prototype is an object in js from which all function inherit comman method and properties 
// 🔸 What is call()?

// The call() method is used to invoke a function immediately and explicitly set the value of this for that function.
// aregument are passed one by one and in this method unlimeted aregument are allowed 
// let person ={
//     name : "dev"
// }
// function showname(city){
//     console.log(this.name + " from   "+city)
// }
// showname.call(person,"indore")

//02
// const atm = {
//     withdraw(amount) {
//         console.log(`${this.name} withdrew ₹${amount}`);
//     }
// };

// const user1 = { name: "Dev" };
// const user2 = { name: "Raj" };

// atm.withdraw.call(user1, 1000);
// atm.withdraw.call(user2, 100);

// apply

// 🔹 What is apply()?

// apply() is used to call a function immediately and explicitly set the value of `this`,
// just like call(). The arguments are passed as an array.
// let person = {
//     name: "anushka"
// };

// function showname(city, country) {
//     console.log(this.name + " from " + city + ", " + country);
// }
// showname.apply(person, ["Indore", "India"]);

// apply() invokes a function immediately, explicitly binds `this`,
// and accepts arguments as an array.

// bind() does not invoke the function immediately.
// It returns a new function with a permanently bound `this` value.
// In this method, `this` does not get lost.
function teach(subject) {
    console.log(this.name + " padhate hai " + subject);
}

let teacher = { name: "Ajay Sir" };

setTimeout(teach, 1000);

let bindbound = teach.bind(teacher, "Java");
setTimeout(bindbound, 1000);

// tostring
// hasownpropertiy
