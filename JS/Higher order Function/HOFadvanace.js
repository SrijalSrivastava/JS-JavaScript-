const a = [1,2,3,4,5];

//1 ForEach
// const ForEach  = a.forEach(()=>{
//     return a+1;
// })

// console.log(ForEach);

//2.Map
// const map = a.map((e)=>{
//     return e+a;
// },3)
// console.log(map);

//3. Filter
// const filter = a.filter((e)=>{
//     return e>2;
// });

// console.log(filter);

//4>.reduce function 
const res = a.reduce((arr,curr)=>{
    console.log(arr,curr);
    return arr+curr;
},6);

console.log(res);

