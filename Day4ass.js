// print alternates in array
var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
var result = [];    
for (var i = 0; i < arr.length; i += 2) {
    result.push(arr[i]);
}
console.log("Alternate elements in the array: " + result);// output [10,30,50,70,90]


// liner search
//without function
var arr = [5, 10, 15, 20, 25, 30];
var target = 20;
var foundIndex = -1; // Initialize with -1 to indicate not found
for (var i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        foundIndex = i;
        break; // Exit the loop once the target is found
    }   
}
if (foundIndex !== -1) {
    console.log("Element " + target + " found at index: " + foundIndex);
} else {
    console.log("Element " + target + " not found in the array.");
}



// larget element in array
var arr = [12, 45, 7, 89, 23, 56];
var largest = arr[0];
for (var i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}
console.log("Largest element in the array is: " + largest);// output 89




// second largest element in array
var arr = [12, 45, 7, 89, 23, 56];
var largest = -Infinity;
var secondLargest = -Infinity;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
    }
    else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
    }
}
console.log("Second largest element in the array is: " + secondLargest);// output 56




// remove duplicates from sorted array
var arr = [10, 20, 20, 30, 30, 30, 40, 50, 50];
var uniqueArr = [];
for (var i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i] !== arr[i - 1]) {
        uniqueArr.push(arr[i]);
    }
}
console.log("Array after removing duplicates: " + uniqueArr);// output [10,20,30,40,50]


// generate all subarray
var arr = [1, 2, 3];
var subarrays = [];
for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr.length; j++) {
        var subarray = [];
        for (var k = i; k <= j; k++) {
            subarray.push(arr[k]);
        }
        subarrays.push(subarray);
    }
}
console.log("All possible subarrays: ");
console.log(subarrays);// output [[1],[1,2],[1,2,3],[2],[2,3],[3]]


// reverse an array
var arr = [10, 20, 30, 40, 50];
var reversedArr = [];
for (var i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
}

console.log("Reversed array: " + reversedArr);// output [50,40,30,20,10]


// rotate an Array
var arr = [1, 2, 3, 4, 5];
var k = 2;
k = k % arr.length; // In case k is greater than array length
var rotatedArr = [];
for (var i = arr.length - k; i < arr.length; i++) {
    rotatedArr.push(arr[i]);
}
for (var i = 0; i < arr.length - k; i++) {
    rotatedArr.push(arr[i]);
}
console.log("Array after rotation: " + rotatedArr);// output [4,5,1,2,3]
// 


