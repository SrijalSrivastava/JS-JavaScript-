// Promise
// Promise is an Object 
// It represent completion or failure of an asysnchrous object , or it respresnts the resulting value 

// There is a 3 state of Promises 
// Pending – The initial state, neither fulfilled nor rejected.
// Fulfilled – The operation completed successfully.
// Rejected – The operation failed.

// Syntax:
// let promise = new Promise(function(resolve, reject) {
//   Do something async
//   if (/* success */) {
//     resolve("Success value");
//   } else {
//     reject("Error message");
//   }
// });