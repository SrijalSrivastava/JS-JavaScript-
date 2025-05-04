// Pomises 
// A promises is an object representing the eventual completion or failure of an Asynchronous operation and it returing value.
// A promise is an object and has three state 1>. pending 2>.Fullfilled(resolve) 3>. Rejected 

// Promise can be write in different ways
// 1  
// const Prom = new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//            console.log("We are writing code");
//            resolve;
//      },1000);  
// })
// Prom.resolve(()=>{console.log("Promise consumed")});

// //2 
// new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//           console.log("Asyn function 2 is executed");
//           resolve();
//     },1000)
// }).then(()=>{
//     console.log("promise 2 is consume");
// })

// //3-->--
// When data is pass on a resolve 
// const prom2 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("Asyn function will be executed");
//         resolve({name:"Aman",email:"aman@gmail.com"})
//     }, 1000);
// })
// prom2.then((user)=>{
//       console.log(user)
// })

// 4-->--
// const pro3 = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let error = true;
//             if(!error){
//                 console.log("the function is resolve");
//                 resolve();
//             }
//             else{
//                 console.log("the function is Rejected");
//                 reject();
//             }
//         },1000)
// })
// pro3.then(()=>{
//     console.log("the function is execute");
// }).catch((error)=>{
//     console.log("the function is not execute");
// })

// const pr = new Promise((resolve,reject)=>{
//             let l = true;
//             if(!l){
//                 System.out.println("we are solving the problem");
//                 resolve();
//             }
//             else{
//                 console.log("We can not solve the problem");
//                 reject();
//             }
// })
// pr.then(()=>{
//     console.log("the function was executed");
// })
// pr.catch((error)=>{
//     console.log("the function was not executed");
// })
// pr.finally(()=>{
//     console.log("the promise will be resolve and rejected");
// })


// const promise5 = new Promise((resolve,reject)=>{
//      setTimeout(function(){
//         error = true;
//         if(!error){
//             resolve({username: "Javascript", password: "wrong"})
//         }
//         else{
//             reject('ERROR: JS went wrong');
//         }
//      },1000)
// })

// promise5.then(()=>{
//     console.log("This code is execute");
// })
// promise5.catch((error)=>{
//     console.log("This code is not execute");
// })

// Asyn-Await
// Asyn function alwats returns a promise
// // asyn function myfunction(){
//     await promisefunction
//}
// await pauses the execution of its surronding async function util the promise is settled 

// async function hello(){
//    console.log("We are writing the code");
// }
// hello();

//try catch block
// async function consumeFive(){
//     try {
//         const resp = await promise5;
//         console.log(resp);
//        }
//      catch (error) {
//        console.log("error"); 
//     }
// }
// consumeFive();
// //fetch 

// async function getAllUser(){
//     try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/users");
//         //    console.log(res);
//         // let data = res.json();
//         //  console.log(data);
//     } catch (error) {
//         console.log("E:",error);
//     }
// }
// getAllUser();


// new 

// const Pro = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       console.log("hi this is a Async function");
//       resolve()
//     }, 1000)
// })

// Pro.then(()=>{
//    console.log("Promise full-filled")
// })


// const pro = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       console.log("we are solvind")
//       resolve({username:"Anil", email:"anil@gmail.com"})
//     }, 1000)
// })

// pro.then((data)=>{
//    console.log(data)
// })


// const prop = new Promise ((resolve, reject)=>{
//     setTimeout(()=>{
//        console.log("working")
//        const error = true
//        if(error){
//         resolve({username:"Srijal" , age:25})
//        }else{
//          reject('the working is not good some Error')
//        }
//     })
// },1000)

// prop.then((user)=>{
//  console.log(user);
//  return username
// }).then((username)=>{
//  console.log(username);
// }).catch((error)=>{
//    console.log(error);
// });


const prop = new Promise ((resolve, reject)=>{
  setTimeout(()=>{
     console.log("working")
     const error = true;
     if(error){
      resolve({username:"Srijal" , age:25})
     }else{
       reject('the working is not good some Error')
     }
  })
},1000)


 async function consumerpro(){
     try {
      const response = await prop;
      console.log(response.username);
     } catch (error) {
      console.log(error);
     }
     
 }
  
 consumerpro();
 









