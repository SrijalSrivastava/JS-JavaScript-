var a = "javaScript";
var b = 10;

function letScope(){
      console.log(a,b);
    if(true){
        console.log(a,b);
    }
}

// letScope();
// console.log(a, "  ", b);

//  --->--->--->

// const b = 70;
//  function abc(){
//      const b = 60;
//     console.log("1",b);
//    if(true){
//      let a = 10;
//      const b = 20;
//      var c = 30;
//      console.log("2 is ", b);
// }
// }
// abc();

// 2 block variable gives more priority than outer variable 

//  console.log(c);

// --->--->--->--->--->--->

// const a = "happy";
// function fun(){ 
//      const n = "srijal";
//      if(true){
//       console.log(a);
//        let b = 3
//      console.log(n);
//      }
//       console.log("b" , b);
// }
// fun();
// console.log(n);
//3. let and const are the function variable 
// we can access variable outer block in inner block 
// we we can not access inner block of items in Outer block 