// class student{
//     constructor(){
//         console.log("this is constructor")
//     }
//     display(){
//         console.log("this is display method")
//     }
// }
// let s1= new student();
// s1.display();




// class student{
//     constructor(name , age){
//         console.log("this is constructor")
//         this.name=name;
//         this.age=age;
//     }
//     display(){
//         console.log("this is display method")
//         console.log("Name:",this.name)
//          console.log("Age:",this.age)
//     }
// }
// let s1= new student("dev",66);
// s1.display();



//  class student{
//     // constructor(){
//     //     console.log("this is defulat")//error
//     // }
//     constructor(name , age){
//         console.log("this is para constructor")
//         this.name=name;
//         this.age=age;
//     }
//     display(){
//         console.log("this is display method")
//         console.log("Name:",this.name)
//          console.log("Age:",this.age)
//     }
// }
// let s1= new student("dev",66);
// s1.display();



class Student {
  constructor(name, age) {
    console.log("this is param constructor");
    this._name = name;   // backing variable
    this._age = age;
  }

  // getter
  get name() {
    return this._name;
  }

  // setter
  set name(value) {
    this._name = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value;
  }
}

// usage
const s1 = new Student("Dev", 24);
console.log(s1.name);   // Dev
console.log(s1.age)
s1.name = "Devendra";
console.log(s1.name);   // Devendra
