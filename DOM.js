console.log("Dom page ")
//Event


// function massage(){
//     alert("welcome in js")
//     alert("we are in event")
// }
// // function pageload(){
// //     alert("page loaded scuesscfully")
// // }

// // function imageload()
// // {
// //     alert("image loaded scuesscfully")
// // }


// function mouseover(){
//     alert("welcome to infobenas")
// }


// function out(){
//     alert("fir milege ")
// }


// function pagesize(){
//     alert("on resize we ")
//}



// function testSelect(){
//     alert("select not allowed")
// }


// function upper(){
//     alert("upper is colled")

//     var x = document.getElementById("fname")
//     x.value = x.value.toUpperCase();
// }
// function lower(){
//     alert("lower is colled")

//     var x = document.getElementById("lname")
//     x.value = x.value.toLowerCase();
// }

 

// function onfouces(){
//     alert("on is runnig ")
// }

// var x =document.getElementsByTagName("h1")
// console.log(x)
// for(var y of x){
//     console.log(y.innerText)
// }


// var x = document.getElementById("a")
// console.log(x.innerText)

// var x = document.getElementsByName("n1")
// console.log(x)
// for (var y of x) {
//     console.log(y.innerText)
// }



// var x  =document.querySelector(".n1")
// console.log(x.innerHTML)


// var x  =document.querySelector("#b")
//  console.log(x.innerHTML)


// var x  =document.querySelectorAll(".n1")
// console.log(x[0].innerHTML)
// console.log(x[1].innerHTML)
// console.log(x.length)



// var y = document.getElementById("p1")
// console.log(y)
// console.log(x.innerHTML)


// var x = document.getElementById("p1")
// x.innerText = "<b> dnkkfng  </b>"


// set attribute 


// function update(){
//     var x = document.getElementById("img1");
//     x.setAttribute("src","DSC_9229.JPG");
//     console.log(x.getAttribute("src"));
//     x.setAttribute("width","80px")
//     x.setAttribute("height","50px")
// }





//A1
// function update(){
//     var x = document.getElementById("a1");
//     x.setAttribute("target","_blank");
//     x.setAttribute("href","https://google.com")

// }


//A2

// function update(){
//     document.body.style.backgroundColor ="red";

// }


//A3
// var y= false;
// function update(){
//     if (y) {
//          document.body.style.backgroundColor ="red";
//     }
//     else{
//           document.body.style.backgroundColor ="blue";
//     }
//     y=!y;
// }



//A3
// function validate(){
//      alert("dekooooooooooooo")
    // var x = document.getElementById("A3");
    // console.log(x)

    // var v =document.getElementById("A3").Value;
    // console.log(v)



    //A3
//     var massage ;
//     if(document.getElementById("i1").value.length>5){
//         massage="good length"

//     }
//     else{
//         massage="poor length"
//     }
//     document.getElementById("s1").innerText=massage;
// }


// A4
// function addnode(){
//     let divelement = document.createElement("div")
//     console.log(divelement)
//     divelement.textContent="this is new created one"
//     document.body.appendChild(divelement);


//     let r = document.getElementById('main');
//     document.body.removeChild(r)


// }


//A5

// let p1 = document.createElement("p");
// p1.textContent="this is new pragraph"

// let v = document.getElementById("i1");
//  document.body.insertBefore(p1,v)
// document.body.appendChild(p1)
// document.body.insertBefore(v,p1)


//A6

// const p = document.getElementById("parent")
// const old = document.getElementById("old");

// const new1 = document.createElement("p");
// new1.textContent="new World";
// p.replaceChild(new1,old);

// console.log("helllo")
// //A7
// var p = document.createElement("p");
// var para = document.createTextNode("helooooooo gyzz");
// p.append(para);
// document.body.appendChild(p);
// p.setAttribute("id","i1");
// console.log(document.getElementById("i1").innerText)



//A8


// var d = document.createElement("button")
// d.innerText="click"
// document.getElementById("d1").append(d)
// // document.getElementById("d1").prepend(d)

// // document.getElementById("d1").after(d)

// var hh = document.createDocumentFragment("h1")
// hh.innerText="welcome"

// document.querySelector("body").prepend(hh)
// console.log(hh)


//A9
// var d = document.createElement("button")
// d.innerText="click"
// document.body.append(d);
// d.addEventListener("click",function(){
//     alert("button is clicked")
// })


//A10

