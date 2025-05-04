// 1.Synchronus 
// Syncronus means the execution of code Step by step , it does not wait unit the previous code will not be compleleted 

// console.log("the value of a is :")
// let a = 3; 
// console.log(a);
// let m = 34;
// console.log("the value of m is :");
// console.log(m);

// 2.Asynchronus 
// Asynchronus means the execution of code not in step by step , 

// console.log("Asyschornous")

// function hello(){
//     console.log("print");
// }

// setTimeout(hello, 5000);

// function b(){
//     console.log("settimeout");
// }

// setInterval(b, 2000);

// const operation = (a,b,calculation)=>{
//     return calculation(a,b);
// }

// const add = (a,b)=>{
//     return a+b;
// }

//  const s = operation(3,4,add);
//  console.log(s);


// CallBack function 
// When a function pass in another function as a Parameter 
//1
// const opeation = (a,b)=>{
//     return (a,b);
// }

// const sum = (a,b,opeation)=>{
//      return a+b;
// }

// const sub = (a,b,opeartion)=>{
//     return a-b;
// }

// console.log(sum(3,4));
// console.log("the substraction is :", sub(5,6));


// //2 Asynchronus 
// const hello = ()=>{
//     console.log("hello");
// }

// setTimeout(hello,2000);


// Async and await 
// async function always returns a promise.
// async function fun(){
// coding of lines 
// -
// '
// -
// -
// '
// coding of lines  
//}


// notes 
// 1. Async function always return a promise 
// 2. 
// async function hello() {
//    console.log("hello");
// }


// function api(){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         console.log("Weather data");
//         resolve();
//        },2000)
//     })
// }

// async function getApi(){
//     await api();
//     await api();
// }



