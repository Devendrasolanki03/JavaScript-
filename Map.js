// let usermap = new Map();
// usermap.set("name", "dev");
// usermap.set(1, "id");
// usermap.set(true, "active");
// console.log(usermap);

// console.log(usermap.get(1));
// console.log(usermap.has(1));
// console.log(usermap.delete(true));
// console.log(usermap);
// // console.log(usermap.clear())
// console.log(usermap.size);

// for (const [key, value] of usermap) {
//     console.log(key, value)

// }
// set 

// let set = new Set();

// set.add(1);
// set.add("dev");
// set.add(true)
// set.add(true);
// set.add(1)
// console.log(set)
// console.log(set.has(1))
// console.log(set.size)
// console.log(set.delete(true));

// for (const value of set) {
//     console.log(value)

// }






// let arr = [1, 55, 4, 1, 6, 4, 3];

// let uniqe = [...new Set(arr)]
// console.log(uniqe)


// weak map is same as map but only object as key and not iterable 
// weakmap garbadge collector work here like if no reference to object then it will be deleted from memory
// keypoint are weakmap is not iterable and only object as key
// weakset only object as value and not iterable


let weakmap = new WeakMap();
let obj1 = { name: "dev" };
let obj2 = { id: 1 };
weakmap.set(obj1, "object one");
weakmap.set(obj2, "object two");
console.log(weakmap);


// looping not possible
// for (const [key, value] of weakmap) {
//     console.log(key, value)

// }// error because weakmap is not iterable


