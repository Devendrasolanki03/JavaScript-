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

