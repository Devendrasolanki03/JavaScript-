// // Q.1 Peak an element
// // An element is called a peak element if its value is not smaller than the value of its adjacent elements(if they exists).
// // Given an array arr[] of size N, find the index of any one of its peak elements.
// // Note: The generated output will always be 1 if the index that you return is correct. Otherwise output will be 0.
// // Example 1:
// // Input:
// // N = 3
// // arr[] = {1,2,3}
// // Output: 1
// // Explanation: index 2 is 3.
// // It is the peak element as it is 
// // greater than its neighbour 2.
// // Example 2:
// // Input: 
// // N = 2
// // arr[] = {3,4}
// // Output: 1
// // Explanation: 4 (at index 1) is the 
// // peak element as it is greater than 
// // its only neighbour element 3.
// // Constraints:
// // 1 ≤ N ≤ 105
// // 1 ≤ A[] ≤ 106

// var n = Number(prompt("Enter size of array"));
// var arr = [];
// for (var i = 0; i < n; i++) {
//   var element = Number(prompt("Enter element " + (i + 1)));
//   arr.push(element);
// }
// function findPeakElement(arr, n) {
//   if (n === 1) {
//     return 0; // Only one element, which is the peak
//   }
//     if (arr[0] >= arr[1]) {     
//     return 0; // First element is a peak
//   }
//     if (arr[n - 1] >= arr[n - 2]) {
//     return n - 1; // Last element is a peak
//     }
//     for (var i = 1; i < n - 1; i++) {
//     if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) {
//       return i; // Found a peak element
//     }   
//     }
//     return -1; // No peak element found (theoretically shouldn't happen)
// }
// var peakIndex = findPeakElement(arr, n);
// console.log("Index of a peak element is: " + peakIndex);
// // Q.2
// // Given an unsorted array arr[] of size N having both negative and positive integers. The task is place all negative element at the end of array without changing the order of positive element and negative element.

// // Example 1:
// // Input : 
// // N = 8
// // arr[] = {1, -1, 3, 2, -7, -5, 11, 6 }
// // Output : 
// // 1  3  2  11  6  -1  -7  -5

// // Example 2:
// // Input : 
// // N=8
// // arr[] = {-5, 7, -3, -4, 9, 10, -1, 11}
// // Output :
// // 7  9  10  11  -5  -3  -4  -1
// var n = Number(prompt("Enter size of array"));
// var arr = [];
// for (var i = 0; i < n; i++) {
//   var element = Number(prompt("Enter element " + (i + 1)));
//   arr.push(element);
// }
// function rearrangeArray(arr, n) {
//   var positiveArr = [];
//   var negativeArr = [];
//   for (var i = 0; i < n; i++) {
//     if (arr[i] >= 0) {
//       positiveArr.push(arr[i]);
//     }
//     else {
//       negativeArr.push(arr[i]);
//     }
//   }
//   return positiveArr.concat(negativeArr);
// }
// var rearrangedArr = rearrangeArray(arr, n);
// console.log("Rearranged array: " + rearrangedArr);

// // Q.3 Find the Union and Intersaction of two sorted array.
// // Given two arrays a[] and b[] of size n and m respectively. The task is to find union between these two arrays. 
// // Union of the two arrays can be defined as the set containing distinct elements from both the arrays. If there are repetitions, then only one occurrence of element should be printed in the union.
// // Example 1:
// // Input:
// // 5 3
// // 1 2 3 4 5
// // 1 2 3
// // Output: 
// // 5
// // Explanation: 
// // 1, 2, 3, 4 and 5 are the
// // elements which comes in the union set
// // of both arrays. So count is 5.
// // Example 2:
// // Input:
// // 6 2 
// // 85 25 1 32 54 6
// // 85 2 
// // Output: 
// // 7
// // Explanation: 
// // 85, 25, 1, 32, 54, 6, and
// // 2 are the elements which comes in the
// // union set of both arrays. So count is 7.

// var n1 = Number(prompt("Enter size of first array"));
// var arr1 = [];
// for (var i = 0; i < n1; i++) {
//   var element = Number(prompt("Enter element " + (i + 1) + " of first array"));
//   arr1.push(element);
// }
// var n2 = Number(prompt("Enter size of second array"));
// var arr2 = [];

// for (var i = 0; i < n2; i++) {
//   var element = Number(prompt("Enter element " + (i + 1) + " of second array"));
//   arr2.push(element);
// }
// function unionOfArrays(arr1, arr2) {
//   var unionSet = new Set();
//   for (var i = 0; i < arr1.length; i++) {
//     unionSet.add(arr1[i]);
//   }
//   for (var j = 0; j < arr2.length; j++) {
//     unionSet.add(arr2[j]);
//   } 
//   return unionSet.size;
// }
// var unionCount = unionOfArrays(arr1, arr2);
// console.log("Count of union of two arrays: " + unionCount);
// // Q.4
// // Write a program to cyclically rotate array by one.
// // QNO 5
// // Count pair with given sum.
// // Given an array of N integers, and an integer K, find the number of pairs of elements in the array whose sum is equal to K.

// // Example 1:
// // Input:
// // N = 4, K = 6
// // arr[] = {1,5,7,1}
// // Output: 2
// // Explanation: 
// // arr[0] + arr[1] = 1 + 5 = 6 
// // and arr[1] + arr[3] = 5 + 1 = 6.

// // Example 2:
// // Input:
// // N = 4, X = 2
// // arr[] = {1, 1, 1, 1}
// // Output: 6
// // Explanation:
// // Each 1 will produce sum 2 with any 1.

// var n = Number(prompt("Enter size of array"));
// var arr = [];
// for (var i = 0; i < n; i++) {
//   var element = Number(prompt("Enter element " + (i + 1)));
//   arr.push(element);
// }
// var K = Number(prompt("Enter the sum K"));
// function countPairsWithSum(arr, n, K) {
//   var count = 0;
//   for (var i = 0; i < n; i++) {
//     for (var j = i + 1; j < n; j++) {
//       if (arr[i] + arr[j] === K) {
//         count++;
//       }
//     }
//   }
//   return count;
// }
// var pairCount = countPairsWithSum(arr, n, K);
// console.log("Number of pairs with sum " + K + " is: " + pairCount);



