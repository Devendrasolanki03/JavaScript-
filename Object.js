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

let obj1 = {
    id:1,
    name:"dev",

}
Object.freeze(obj1)
obj1.age=50;
console.log(obj1)


delete obj1.name
console.log(obj1)