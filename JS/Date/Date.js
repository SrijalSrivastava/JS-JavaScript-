// // Date 
// // 1.
// const mydate = new Date();
// console.log(mydate);
// //Tue Mar 26 2024 01:12:35 GMT+0530 (India Standard Time)
// console.log(mydate.toLocaleString());
// // 26/3/2024, 1:12:35 am
// console.log(mydate.toDateString());
// // 26/3/2024, 1:12:35 am
// console.log(typeof mydate);
// // Object

// // 2.my created date 
// const createdDate = new Date(2023,0,23);
// console.log(createdDate.toDateString());
// // Mon Jan 23 2023
// // We write in the form of DD MM YY 
// const created = new Date("2023-1-3");
// console.log("dg",created.toDateString());
// // Tue Jan 03 2023

// // 3. Time Spam 

// const Timespan = Date.now();
// console.log(Timespan);
// // console.log("time",Timespan.getTime());

// const t = new Date();
// console.log(t);
// console.log("the time is :", t.getMonth() + 1);

// console.log(t.getDay());


const date = new Date();
console.log(date);
console.log(date.getMonth()+1);
console.log(date.getYear());
console.log("the date is : ",date.getMinutes());


// console.log(date.getMonth()+1);
// console.log(date.getDay());
// console.log(date.getTime());



//Summary
//const date = new Date();
//date.getMonth();
//date.getDay();
//date.getDate();
//date.getmintue();
//date.getsec();





