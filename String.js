console.log("this is String ");

// let s1 = "hello";
// console.log(s1)

// let s2 = "hello";
// console.log(s1==s2)
// console.log(s1===s2)


// let s3 = new String("hello");
// console.log(s3);
// console.log(typeof(s3))

// let s4 = new String("hello");
// console.log(s4);
// console.log(s3==s4)
// console.log(s3===s4)

// let s1 = "hello";
// s1[0] = "w";
// console.log(s1)


// let x =10;
// let y = 20;//templeales litrollors
// let str = `value of x is ${x} and value of y is ${y} and sum is ${x+y}`;
// console.log(str)



// let str = `hello every one
//                          how life going on`;
//                             console.log(str)

// let address = `122.
//                 street goa
//                 city goa`;
// console.log(address)                                            



// let str = "  hello  every  one ";
// console.log(str.length);
// console.log(str.charAt(2));
// console.log(str.substring(1,5))

// console.log(str.trim());
// console.log(str.trimStart())
// console.log(str.trimEnd())

// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str.indexOf('o'))// if chreactor not found it -1
// console.log(str.lastIndexOf('o'))
// console.log(str.includes('one'))

// let str1 = str.slice(-4);
// console.log(str1)
// console.log(str.substring(-4))


// console.log(str)
// let s =  str.replace('one','java');
// console.log(s);

// let s2 = str.replaceAll('o',"@");
// console.log(s2)

// let str = "hello guzz is very one";

// // let arr = str.split(" ");
// // console.log(arr)
// // console.log(arr.length);
// // arr = arr.join('-');
// // console.log(arr);

// // let rev = str.split(" ").reverse().join(" ")
// // console.log(rev)

// let rev = str.split(" ").map(x =>x.split("").reverse().join("")).join(" ");
// console.log(rev)


// 1.
// Count the number of words in a sentence using String.

// Input
// Enter a sentence: Java is a versatile languag
// Output:
// Number of words: 5
// let str = "Java is a versatile language";
// let out = str.split(" ");
// console.log(out.length)
// // 2.==================================================
// Find the length of a string without using the length() method.
// Input:
// Enter a string: HelloWorld
// Output:
// Length of the string: 10

// let str = "HelloWorld";
// let output =str.split("");
// console.log(output);
// console.log(output.length)

// 3.  ====================================================
// Reverse every second word in a sentence using StringBuilder.
// Input:
// Enter a sentence: Java is very interesting
// Output:
// Modified sentence: Java si very gnitseretni
// let str = "Java is very interesting";
// let word = str.split(" ");

// for (let i = 0; i < word.length; i++) {
//     if (i % 2 !== 0) {
//         word[i] = word[i].split("").reverse().join("");
//     }
// }
// console.log(word.join(" "));


// 4.===========================================================
//  Convert each character of a string to its ASCII value using String.
// Input:
// Enter a string: ABC
// Output:
// ASCII values: 65 66 67
// let str = "ABC";
// let words = str.split("");
// let num = [];
// for (let i = 0; i < words.length; i++) {
//     num.push(words[i].charCodeAt(0));
// }
// console.log("ASCII values:", num.join(" "));



// 5. ==================================
// Find the character that occurs the most in a string.
// Input:
// Enter a string: success
// Output:
// Most frequent character: s (3 times)
// let str = "success";
// let chars = str.split("");
// let maxChar = "";
// let maxCount = 0;

// for (let i = 0; i < chars.length; i++) {
//     let count = 0;
//     for (let j = 0; j < chars.length; j++) {
//         if (chars[i] === chars[j]) {
//             count++;
//         }
//     }
//     if (count > maxCount) {
//         maxCount = count;
//         maxChar = chars[i];
//     }
// }
// console.log(`Most frequent character: ${maxChar} (${maxCount} times)`);


// 1 . Replace all occurrences of a character in a string with another character.
// Input: Original String: "banana"
// Replace 'a' with 'o'
// Expected Output: "bonono"
// let str = "banana";
// console.log(str.replaceAll("a","o"))

//======================================================
// 2. Write a program to find the first non-repeated character in a string using StringBuffer or StringBuilder.
// input :"swiss"
// output :The first non-repeated character is: "w"
// Explanation: The program uses StringBuffer to track character counts and returns the first character that occurs only once in the string.
// let str = "swiss"
// let word = str.split("");
// var most = "";

// for (let i = 0; i< word.length; i++) {
//     for (let j = 0; j < word.length; j++) {
//        if (word[i] !=word[j]) {
//         console.log(word)
        
//        }
        
//     }
//}

/* 3. Remove all duplicate characters from a string and return the modified string using StringBuilder.

// input :"programming"
// output: "progamin"
 

var str = prompt("Enter a string:");
var result = "";

for (var i = 0; i < str.length; i++) {
    if (!result.includes(str[i])) {
        result += str[i];  
    }
}*/


/*
Write a program to remove all digits from a string and return the modified string using StringBuilder.

input : "J4av1a P2rogramming"
output: "Java Programming"



var str = prompt("Enter a string:");
var result = "";

for (var i = 0; i < str.length; i++) {
    if (!(str[i]>=0 && str[i]<=9)) {
        result += str[i];  
    }
}
document.write("Modified string: " + result);
/*
5. Write a program to find the shortest word in a sentence using String.

input :"Java is fun and powerful"
output: Shortest word: "is"
*/
// var str = prompt("Enter a sentence:");
// var words = str.split(" ");
// var shortest = words[0];

// for (var i = 1; i < words.length; i++) {
//     if (words[i].length < shortest.length) {
//         shortest = words[i];
//     }
// }

// document.write('Shortest word: "' + shortest + '"');
