// function :

// I Simple function 
//function myfunction(){
  // console.log("hi");
 //   console.log("my");
//}

// myfunction();
// Parameter pass in function 

//a .
//function addTwoValue(a,b){
//      a+b;

//}
//addTwoValue(5,9);
//console.log(addTwoValue(5,9))

//b 
//function addTwoValue(a,b){
// c = a+b;
//  return c;   
//}

//let result = addTwoValue(3,4);
//console.log(result);

// 2. Multiple parameter pass in function 

// function digitalCards(...num){
//     return num
// }

//console.log(digitalCards(200,700,900,899,788));

// 3 object pass as a parametr in function 

// const user ={
//     name:"happy",
//     age:18
// }

// function printObject(anyobject){
//   console.log(`The person is ${anyobject.name} and the age is ${anyobject.age}`);
//}

//printObject(user);

//4. Array as a argumenet pass in an funcion 
 
// const arr = [2,3,5,6,7];

// function  myfunction(myarr){
//     return myarr[3] + myarr[2];
// }

//console.log("the sum is :"+myfunction(arr));

// II Arrow Function 

// const a = (b,c)=>{
//     b+c
// };
 
// const a = (b,c)=>( b+c);
//console.log(" the arraow function is :"+ a(3,4));


 // III Anaomous Function 
 //let h = function(){
    //console.log("hi");
 //}
 //h();


 // IV CallBack Function 
 // callback function is a type of function in which we pass function as a argumenet

 // main function
//  const calculate = (a,b,operation) =>{
//       return operation(a,b);
//  }

//  const addition = (num1,num2) =>{
//     return num1+num2;
//  }

//  const calculateadd = calculate(6,7,addition);
 //console.log(calculateadd);

//  const substraction = (num1,num2)=>{
//      return num1-num2;
//  }

//  const calculatesub = calculate(6,7,substraction);
// console.log(calculatesub);

//  const multiply  = (num1,num2)=>{
//       return num1*num2;
//  }

//  const calculatemul = calculate(4,3,multiply);
 //console.log(calculatemul);


// IIFE ---> Imididate invoked Function Expression
//  (function a(c,b){
//       console.log(c+b);
//  })(4,5);

//  ((g,h)=>{
//     console.log(g+h);
//  })(3,6);



/// Rest and Spread Operator 
// function digitalCards(...num){
//        return [...num];
//    }


//    console.log(digitalCards(200,700,900,899,788));

