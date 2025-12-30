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
// console.log("Start")
// var a =10;
// let b = 0;
// let waitingData = new Promise( (resolve , reject)=>{
// setTimeout(()=>{
//     resolve(20);
// },1000)
// })
// waitingData.then((data)=>{
//     b=data;
//     console.log("sum is ",(a+b));
// }).catch(()=>{console.log("some error is there")})
// console.log("Done")


//02
// console.log("Start")
// let promiss1 = new Promise( (resolve , reject)=>{
// let flag = true;
// if(flag){
//     resolve();
// }
// else{
//     reject();
// }
// })
// console.log("some work here")
// promiss1.then(()=>{
//    console.log("promise  is resolve ")
// }).catch(()=>{console.log("some error is there")})
// console.log("Done")


// 03
// function getData(id){
//     setTimeout(()=>{
//         console.log(" data ",id)
//     },2000)
// }
// getData(1);
// getData(2);
// getData(3)


//04 callback hell
// function getData(id, next) {
//     setTimeout(() => {
//         console.log(" data ", id)
//         if (next) {
//             next();
//         }
//     }, 2000)
// }
// getData(1, () => {
//     getData(2, () => {
//         getData(3)
//     })
// });


// 05 promise chaining
// function getData(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", id);
//             resolve("success");
//         }, 2000);
//     });
// }
// console.log("waiting for data 1");
// getData(1)
//     .then((result) => {
//         console.log(result);
//         console.log("waiting for data 2");
//         return getData(2);
//     })
//     .then((result) => {
//         console.log(result);
//         console.log("waiting for data 3");
//         return getData(3);
//     })
//     .then((result) => {
//         console.log(result);
//         console.log("all data received");
//     })
//     .catch((error) => {
//         console.log("error:", error);
//     });

// async  06
// async function hello() {
//     console.log("heloooooooooo")

// }
// console.log(hello())


//07
// function getApp() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("getting data");
//             resolve(200);
//         }, 2000);
//     });
// }
// async function getData() {
//     await getApp();
//     await getApp();
// }
// getData();



//08
function getApp(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(" data ",id);
            resolve("scucess");
        }, 2000);
    });
}
async function getData() {
    console.log("geting data 1")
    await getApp(1);
     console.log("geting data 2")
    await getApp(2);
    console.log("getting data 3 ")
    await getApp(3);
}
getData();



