// console.log("frist");
// setTimeout(()=>{
//     console.log("Second");
// },2000);

// console.log("thrid");

// var a =10;
// let b = 0;
// setTimeout(()=>{
//     b = 20;
// },2000);
// console.log("sum is ",(a+b));


//promiss


console.log("Start")
var a =10;
let b = 0;
let waitingData = new Promise( (resolve , reject)=>{
setTimeout(()=>{
    resolve(20);
},1000)
})
waitingData.then((data)=>{
    b=data;
    console.log("sum is ",(a+b));
}).catch(()=>{console.log("some error is there")})
console.log("Done")
