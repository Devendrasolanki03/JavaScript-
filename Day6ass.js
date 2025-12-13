// in js QNO 1.
// You are tasked with developing SmartCart, a smart grocery shopping assistant using JavaScript functions.
//  This assistant will help users manage their cart, calculate total prices, check for healthy items, and suggest better alternatives.

// You must implement the required features using different types of functions and related concepts in JavaScript.

// 1. Add Items to Cart
// Write a function declaration named addToCart(cart, item) that adds a new item  to the shopping cart array and returns the updated cart.

// 2. Remove Items from Cart
// Use a function expression named removeFromCart(cart, itemName) to remove an item from the cart based on its name and return the updated cart.

// 3. Check Healthy Items
// Define an arrow function isHealthy(itemName) that checks whether the item is present in a predefined list of healthy items.

// 4. Calculate Total with Tax
// Create a function calculateTotal(cart, taxRate = 0.05) that calculates the total cost of items in the cart including a default 5% tax.

// 5. Apply Discount
// Write a function applyDiscount(total, discount = 0.1) that applies a discount to the total cost. The default discount is 10%.

// 6. Add Multiple Items
// Implement a function addBulkItems(cart, ...items) that uses rest parameters to add multiple items to the cart in a single call.
// function addToCart(cart, item) {
//     cart.push(item);
//     return cart;
// }

// // -------------------- 2. Remove Items from Cart (Function Expression) --------------------
// const removeFromCart = function (cart, itemName) {
//     return cart.filter(item => item.name !== itemName);
// };

// // -------------------- 3. Check Healthy Items (Arrow Function) --------------------
// const healthyItems = ["apple", "banana", "broccoli", "carrot", "oats"];

// const isHealthy = (itemName) => healthyItems.includes(itemName.toLowerCase());

// // -------------------- 4. Calculate Total with Tax --------------------
// function calculateTotal(cart, taxRate = 0.05) {
//     let subtotal = cart.reduce((sum, item) => sum + item.price, 0);
//     return subtotal + (subtotal * taxRate);
// }

// // -------------------- 5. Apply Discount --------------------
// function applyDiscount(total, discount = 0.1) {
//     return total - (total * discount);
// }

// // -------------------- 6. Add Multiple Items (Rest Parameters) --------------------
// function addBulkItems(cart, ...items) {
//     cart.push(...items);
//     return cart;
// }


//02
// You're developing TuneTrack, a smart music playlist manager that helps users manage their favorite tracks. Users can add or remove songs, check if songs are trending, calculate the total duration of songs, apply skip-time, and more. Implement each of the following features using appropriate JavaScript function types and concepts.

// 1. Add Song to Playlist
// Write a function declaration named addToPlaylist(playlist, songName) that adds a song name (string) to the playlist array and returns the updated playlist.

// 2. Remove Song from Playlist
// Use a function expression named removeFromPlaylist(playlist, songName) to remove a song by its name from the playlist and return the updated array.

// 3. Check Trending Songs
// Define an arrow function isTrending(songName) that checks whether a given song is in a predefined list of trending songs.

// 4. Calculate Total Duration
// Write a function calculateDuration(durations, speed = 1) that takes an array of song durations (in minutes) and returns the total time to listen, adjusted for playback speed (default is normal speed: 1x).

// 5. Add Multiple Songs
// Create a function addBulkSongs(playlist, ...songs) using rest parameters to add multiple songs to the playlist at once and return the updated playlist.
// -------------------- 1. Add Song to Playlist --------------------
// function addToPlaylist(playlist, songName) {
//     playlist.push(songName);
//     return playlist;
// }

// // -------------------- 2. Remove Song from Playlist --------------------
// const removeFromPlaylist = function (playlist, songName) {
//     return playlist.filter(song => song !== songName);
// };

// // -------------------- 3. Check Trending Songs --------------------
// const trendingSongs = ["Blinding Lights", "Shape of You", "Believer"];

// const isTrending = (songName) => trendingSongs.includes(songName);

// // -------------------- 4. Calculate Total Duration --------------------
// function calculateDuration(durations, speed = 1) {
//     let total = durations.reduce((sum, time) => sum + time, 0);
//     return total / speed;
// }

// // -------------------- 5. Add Multiple Songs --------------------
// function addBulkSongs(playlist, ...songs) {
//     playlist.push(...songs);
//     return playlist;
// }

// //03
// // -------------------- 1. Add Level Score --------------------
// function addScore(scores, newScore) {
//     scores.push(newScore);
//     return scores;
// }

// // -------------------- 2. Remove Specific Score --------------------
// const removeScore = function (scores, scoreToRemove) {
//     return scores.filter(score => score !== scoreToRemove);
// };

// // -------------------- 3. Check if High Score --------------------
// const isHighScore = (score) => score >= 80;

// // -------------------- 4. Calculate Total Score --------------------
// function calculateTotalScore(scores) {
//     return scores.reduce((total, score) => total + score, 0);
// }

// // -------------------- 5. Apply Bonus to Each Score --------------------
// function applyBonus(scores, bonus = 5) {
//     return scores.map(score => score + bonus);
// }

// // -------------------- 6. Add Multiple Scores at Once --------------------
// function addMultipleScores(scores, ...newScores) {
//     scores.push(...newScores);
//     return scores;
// }


// //04
// // Attendance list (array of strings)

// // You are a teacher managing the attendance list for your classroom. You want to develop a simple JavaScript program to handle student names efficiently. 
// // The system should use an array of strings to store the names of students. You do not want to use objects or classes—just arrays and functions.

// // This tool will help you:

// // Add new students to the attendance list.

// // View the complete list of students.

// // Update a student’s name if there was a spelling mistake.

// // Remove a student from the list if they transferred out.

// // Search for a student to check if they are enrolled.

// // Count the total number of students.

// // Sort the student names alphabetically.

// // Optionally, clear the entire list for a new year.

// // Use functions and an array of strings. Do not use objects.

// // You must read input from the user.

// // Functions to Implement:
// // addStudent(name)

// // Adds the given student name to the list.

// // Prevent duplicate entries.

// // viewStudents()

// // Displays all student names.

// // updateStudent(oldName, newName)

// // Replaces an old name with a new one, if found.

// // deleteStudent(name)

// // Removes a student by name.

// // searchStudent(name)

// // Checks whether the name exists in the list.

// // countStudents()

// // Displays the total number of students.

// // sortStudents()

// // Displays the list sorted in ascending order.

// // clearAllStudents()

// // Empties the list entirely.
// // NOTE: Make it menu driven and read choices from user...
// let students = [];

// // ---------------- FUNCTIONS ----------------

// function addStudent(name) {
//     if (students.includes(name)) {
//         alert("Student already exists!");
//     } else {
//         students.push(name);
//         alert("Student added successfully.");
//     }
// }

// function viewStudents() {
//     if (students.length === 0) {
//         alert("No students in the list.");
//     } else {
//         alert("Students List:\n" + students.join("\n"));
//     }
// }

// function updateStudent(oldName, newName) {
//     let index = students.indexOf(oldName);
//     if (index !== -1) {
//         students[index] = newName;
//         alert("Student name updated.");
//     } else {
//         alert("Student not found.");
//     }
// }

// function deleteStudent(name) {
//     let index = students.indexOf(name);
//     if (index !== -1) {
//         students.splice(index, 1);
//         alert("Student removed.");
//     } else {
//         alert("Student not found.");
//     }
// }

// function searchStudent(name) {
//     alert(students.includes(name) ? "Student found." : "Student not found.");
// }

// function countStudents() {
//     alert("Total students: " + students.length);
// }

// function sortStudents() {
//     students.sort();
//     viewStudents();
// }

// function clearAllStudents() {
//     students = [];
//     alert("All students cleared.");
// }

// // ---------------- MENU ----------------

// while (true) {
//     let choice = prompt(
//         "Student Attendance System\n" +
//         "1. Add Student\n" +
//         "2. View Students\n" +
//         "3. Update Student\n" +
//         "4. Delete Student\n" +
//         "5. Search Student\n" +
//         "6. Count Students\n" +
//         "7. Sort Students\n" +
//         "8. Clear All Students\n" +
//         "9. Exit\n\n" +
//         "Enter your choice:"
//     );

//     switch (choice) {
//         case "1":
//             addStudent(prompt("Enter student name:"));
//             break;
//         case "2":
//             viewStudents();
//             break;
//         case "3":
//             updateStudent(
//                 prompt("Enter old name:"),
//                 prompt("Enter new name:")
//             );
//             break;
//         case "4":
//             deleteStudent(prompt("Enter student name to delete:"));
//             break;
//         case "5":
//             searchStudent(prompt("Enter student name to search:"));
//             break;
//         case "6":
//             countStudents();
//             break;
//         case "7":
//             sortStudents();
//             break;
//         case "8":
//             clearAllStudents();
//             break;
//         case "9":
//             alert("Exiting program.");
//             exit();
//         default:
//             alert("Invalid choice!");
//     }
// }



//05// 2.

// A bank wants to develop a simple system to manage account balances privately. The system should allow users to deposit, withdraw, and check their balance, but direct access to the balance variable must be restricted.

// Create a function createAccount(initialBalance) that returns an object with the following methods:

// deposit(amount)

// withdraw(amount)

// checkBalance()

// The balance variable should not be accessible directly—only via these methods.

// Use closures to retain the balance across function calls.


// function createAccount(initialBalance) {
//     let balance = initialBalance; // private variable

//     return {
//         deposit(amount) {
//             balance += amount;
//             console.log("Deposited:", amount);
//         },
//         withdraw(amount) {
//             if (amount <= balance) {
//                 balance -= amount;
//                 console.log("Withdrawn:", amount);
//             } else {
//                 console.log("Insufficient balance");
//             }
//         },
//         checkBalance() {
//             return balance;
//         }
//     };
// }

// // --------- TEST ---------
// let account = createAccount(1000);
// account.deposit(500);
// account.withdraw(300);
// console.log("Balance:", account.checkBalance());

// // 3.
// // You are asked to build a counter factory where each counter is independent and remembers its own count.

// // Create a function createCounter() that returns an object with:

// // increment()

// // decrement()

// // reset()

// // getValue()

// // Each counter should have its own internal count that persists due to closure.

// // Test it by creating two counters and showing they maintain their own state.
// function createCounter() {
//     let count = 0; // private

//     return {
//         increment() {
//             count++;
//         },
//         decrement() {
//             count--;
//         },
//         reset() {
//             count = 0;
//         },
//         getValue() {
//             return count;
//         }
//     };
// }

// // --------- TEST ---------
// let counter1 = createCounter();
// let counter2 = createCounter();

// counter1.increment();
// counter1.increment();

// counter2.increment();
// counter2.decrement();

// console.log("Counter 1:", counter1.getValue()); // 2
// console.log("Counter 2:", counter2.getValue()); // 0

