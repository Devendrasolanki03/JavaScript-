// 1. Student Grades Analyzer
// Scenario: You are building a system to help teachers analyze student performance.

// Assignment:

// Take an array of student marks: [85, 90, 78, 92, 88, 76]

// Find:

// The highest and lowest marks.

// The average mark.

// List of students who scored above the average.

// var marks = [85, 90, 78, 92, 88, 76];
// var highest =marks[0];
// var lowest = marks[0];
// for(var i = 1; i < marks.length; i++){
//     if(marks[i]>highest){
//         highest = marks[i];
//     }
//     if(marks[i]<lowest){
//         lowest = marks[i];
//     }
// }
// console.log("Highest mark: " + highest);
// console.log("Lowest mark: " + lowest);

//  2. Shopping Cart System
// Scenario: A shopping website stores item prices in an array.
// Assignment:
// Given an array like [299, 499, 150, 250, 100]
// Calculate:
// Total bill
// Total after applying a 10% discount
// List of items costing more than ₹200

// var prices = [299, 499, 150, 250, 100];
// var totalBill = 0;
// for(var i = 0; i < prices.length; i++){
//     totalBill += prices[i];
// }
// console.log("Total bill: ₹" + totalBill);
// var discount = totalBill * 0.10;
// var totalAfterDiscount = totalBill - discount;
// console.log("Total after 10% discount: ₹" + totalAfterDiscount);






//  3. Travel Destination Picker
// Scenario: A travel agency wants to filter popular destinations.

// Assignment:

// Given: ['Paris', 'London', 'Delhi', 'New York', 'Tokyo', 'Delhi']

// Remove duplicates.

// Sort destinations alphabetically.

// Check if a given destination is available in the list.

// var destinations = ['Paris', 'London', 'Delhi', 'New York', 'Tokyo', 'Delhi'];
// var uniqueDestinations = [];
// for(var i = 0; i < destinations.length; i++){
//     if(destinations[i] !== 'Delhi'){
//         uniqueDestinations.push(destinations[i]);
//     }
// }
// uniqueDestinations.sort();
// console.log("Unique sorted destinations: " + uniqueDestinations);
// var checkDestination = 'Tokyo';
// if(uniqueDestinations.includes(checkDestination)){
//     console.log(checkDestination + " is available in the list.");
// } else {
//     console.log(checkDestination + " is not available in the list.");
// }

//  4. Contact List Filter
// Scenario: You’re creating a contact filtering system for a phone.

// Assignment:

// Given an array of contact names: ['Ravi', 'Anjali', 'Raj', 'Ramesh', 'Ankita']

// Create a function to return contacts starting with a specific letter.

// Return the number of contacts starting with the letter 'R'.

// var name = ['Ravi', 'Anjali', 'Raj', 'Ramesh', 'Ankita'];
// function filterContactsByLetter(contacts, letter) {
//     var filteredContacts = [];
//     for (var i = 0; i < contacts.length; i++) {
//         if (contacts[i].startsWith(letter)) {
//             filteredContacts.push(contacts[i]);
//         }
//     }
//     return filteredContacts;
// }
// var contactsStartingWithR = filterContactsByLetter(name, 'R');
// console.log("Contacts starting with 'R': " + contactsStartingWithR);
// console.log("Number of contacts starting with 'R': " + contactsStartingWithR.length);






// 5. Movie Ratings Manager
// Scenario: A movie app stores ratings given by users.

// Assignment:

// Input: [4.5, 3.8, 5.0, 4.2, 3.0, 4.9]

// Find:

// Average rating

// Count how many rated above 4

// Return sorted list of ratings (descending)

// var movieRatings = [4.5, 3.8, 5.0, 4.2, 3.0, 4.9];
// var totalRating = 0;
// var countAbove4 = 0;
// for (var i = 0; i < movieRatings.length; i++) {
//     totalRating += movieRatings[i];
//     if (movieRatings[i] > 4) {
//         countAbove4++;
//     }
// }
// var averageRating = totalRating / movieRatings.length;
// console.log("Average rating: " + averageRating.toFixed(2));
// console.log("Number of ratings above 4: " + countAbove4);








// 6. Restaurant Menu
// Scenario: A restaurant manages its menu items using an array.

// Assignment:

// Menu: ['Burger', 'Pizza', 'Fries', 'Pasta', 'Salad']

// Add a new item 'Soda' to the end.

// Remove 'Fries' from the menu.

// Sort and display the updated menu.
// var menu = ['Burger', 'Pizza', 'Fries', 'Pasta', 'Salad'];
// menu.push('Soda');
// var index = menu.indexOf('Fries');
// if (index !== -1) {
//     menu.splice(index, 1);
// }   
// menu.sort();
// console.log("Updated menu: " + menu);


// 7.
// Scenario: A company wants to clean its employee name list.

// Data:
// let employees = ['Raj', '', 'Anu', null, ' ', 'Ravi', undefined];
// Tasks:

// Remove all falsy or empty-looking values ('', null, undefined, ' ').

// Return a cleaned list.

// Count how many valid entries were originally there.
// var employees = ['Raj', '', 'Anu', null, ' ', 'Ravi', undefined];
// var cleanedEmployees = [];
// var validCount = 0;
// for (var i = 0; i < employees.length; i++) {
//     if (employees[i] && employees[i].trim() !== '') {   
//         cleanedEmployees.push(employees[i]);
//         validCount++;
//     }
// }
// console.log("Cleaned employee list: " + cleanedEmployees);
// console.log("Number of valid entries originally: " + validCount);



// 8.

// Bill Splitter for a Group
// Scenario: A group of friends splits the cost of items.

// let amounts = [120, 340, 150, 90, 200];
// Tasks:
// Find total amount spent.
// Split the bill equally and print each person's share.
// Find who paid the highest and who paid the least.
// var amounts = [120, 340, 150, 90, 200];
// var totalAmount = 0;
// var highest = amounts[0];
// var lowest = amounts[0];
// for (var i = 0; i < amounts.length; i++) {
//     totalAmount += amounts[i];
//     if (amounts[i] > highest) {
//         highest = amounts[i];
//     }
//     if (amounts[i] < lowest) {
//         lowest = amounts[i];
//     }
// }
// var sharePerPerson = totalAmount / amounts.length;
// console.log("Total amount spent: ₹" + totalAmount);
// console.log("Each person's share: ₹" + sharePerPerson.toFixed(2));
// console.log("Highest amount paid: ₹" + highest);
// console.log("Lowest amount paid: ₹" + lowest);





// 9. Frequency Counter Without Map
// Scenario: You're counting how many times each number appears.
// let nums = [4, 5, 6, 4, 6, 7, 4, 6, 5];
// Tasks:
// Display the frequency of each unique number using arrays only.
// Show numbers that appear more than once.


// var nums = [4, 5, 6, 4, 6, 7, 4, 6, 5];
// var uniqueNums = [];
// var frequencies = [];    
// for (var i = 0; i < nums.length; i++) {
//     var index = uniqueNums.indexOf(nums[i]);
//     if (index === -1) {
//         uniqueNums.push(nums[i]);

//         frequencies.push(1);
//     } else {
//         frequencies[index]++;
//     }
// }
// console.log("Frequencies of each unique number:");
// for (var j = 0; j < uniqueNums.length; j++) {
//     console.log(uniqueNums[j] + ": " + frequencies[j]);
// }
// console.log("Numbers that appear more than once:");
// for (var k = 0; k < uniqueNums.length; k++) {
//     if (frequencies[k] > 1) {
//         console.log(uniqueNums[k] + ": " + frequencies[k]);
//     }
// }

