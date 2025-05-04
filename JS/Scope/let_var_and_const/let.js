//difference between let / var / const 

// var -- it is redeclared or inizilation 
// It is globally used 
// but is not used for functional scope // Beacuse var is not a functional scope variable 
// let -- it don't be redeclared or can be inizilation 
// const --- we can not redecalred or not reinilized 
// both are locally used 

var a = "harsh";
// let b = 123;
const c = "@123";
d = 2;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// use second times 

var a = "happy";
// console.log(a);

// b = 234; // let we can not reinizasation 
// console.log(b);

const e = 4;
// console.log(d);

// we can not redelaced not reinization 

// console.table([a],[b],[c],[d]);

// Scope:

// Scope is the assebility of variable, object and function that can be used in part of code 
// a>. Functional Scope:

// --------------------------------*****************************************------------------------------------------------
// var sum = 12;  // Global scope
// const f1 = function(a,b){
//     var sum = a+b;       // Function scope 
//     console.log(sum);
// }
// f1(2,3);
// console.log(sum);

// b>. Block Scope
// Varible declared inside a block of code that can be access only in scope 
//  {
//     var s = 25;
    
// } 
// console.log(s);

let b = 10;
if (true) {
  let b = 20; // different variable!
  console.log(b); // 20
}
console.log(b); 

// Note: Var are global scope variable and let and const are block varaible 

// ------------------------------*********************************************--------------------------------------------------
// c>. Lexical scope 

// Lexical Scope:
// Lexical scope  variable define outside a Function that can be accesible inside another function define vaiable decalartion 

// console.log(l);

var l = 10;

// TDZ : 
 // Temporal Dead Zone is the time since let vaiable was hosted till the variable has initilized , this time period is also know as 
 //Temporal Dead Zone (TDZ)
 
  
// var s = 10;
// const ab = function(){
//     console.log(s);
//     var z =5;
// }

// ab();

// console.log(z);


// Summary: