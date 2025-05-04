// 1.for of loop 
// This concept is apply only for in Array
// This is not apply in object  

// const a = [1,2,3,4,5,7];
//  for (const x of a) {
//   console.log(x);
//  }

// 2.for in loop 
// It is apply both in  object as well as Array  
// *>.for object 

    // const object = {
    // js:"javascript",
    // c: "C++ or c#",
    // rb:"ruby",
    // py:"python"
    //  }

    // for(const key in object){
    //  console.log(`${key} is the key of ${object.js}`);
    //  }

// *>.for Array 
// It is giving in Array also 
//  const g = [1,3,4,5,6,7];
//  for(const y in g){
//    // console.log(g[5]);
//  }

// 4>.Higher order function 
// ForEach loop 
// const coding = ["python" , "java" , "ruby" , "c++" , "JS"];

//  // 1 ways 
// coding.forEach((item)=>{
// //console.log(item);
// })

//2 ways 
//  coding.forEach(function(element){
//    console.log(element);
//  })

//3 ways 
// function greet(elemenet){
//    console.log(elemenet)
// }

// coding.forEach(greet);
// const san = [1,2,3,4,5];

// const p = san.forEach((e) =>{
//      // console.log(e);
//        return e;
// })

//console.log(p);

// const student = [
//    {name:"srijal",
//     age: 12,
//     class: 1   
//    },
//    {
//       name:"rohan",
//       age: 14,
//       class:1
//    },
//    {
//       name:"mohan",
//       age: 15,
//       class:2
//    },
//    {
//       name:"kriti",
//       age:16,
//       class:2
//    }
// ]

// const n = student.filter((bk)=>{
//    return bk.class === 2;
// })

// console.log(n);

//filter
//   const s = san.filter((e) => e>3);
//   console.log(s);


// map 
// const m = san.map((e)=>{
//    return e+1;
// })

// console.log(m);

// Chaining 

// const arr = [1,2,3,4,5,6];
// const tfunction = arr.map((i)=>{
//    return i+2;
// }).map((j)=>{
//    return j*10;
// }).filter((k)=>{
//    return k>40;
// })
// console.log("the finction is :",tfunction);

//reduce 
// const arr = [1,2,3,4];
// let total = arr.reduce(function(acc,currval){
//    console.log(`the value of acc is ${acc} and the value of currval is ${currval}`)
//    return acc+currval;
// },0);

// console.log(total);
// const arr = [1,2,3,4];
// let total = arr.reduce((acc,currval)=>{
//     return acc+currval;
// },2);
// console.log(total);

// const a = [1,2,3,4,5,6,7];

// for(x of a){
//     console.log(x);
// }









