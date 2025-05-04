// // Note :- There is some use in Object
// // 1.>. Declaration 
   
// // // 1. define the object 

// const a = {
//     name:"happy",
//     age:12,
//     email:"srijalsrivastava@gmail.com",
//     number:"one"
// }

// // // console.log(a.age);
// // // console.log(a.name);
// // // console.log(a["name"]);
// // // console.log(a["number"]);
// console.log(typeof(a["number"]));
// // // console.log(typeof(a["sy"]));

// // // console.log(a);
// // // 2. change the value of object 
// // a.email = "srijalsrivastava@gamil.com";

// // // console.log(a);
// // // 3.freeze all the value of an Object 
// // a.email = "srijalsrivastava@gamil.com";
// //  Object.freeze(a);

// // a.email = "happysrivastava@gamil.com";
// // // console.log(a);

// // a.greating = function(){
// //     //    console.log(`Hi we are using the world : ${this.name}`);
// //  }

// // // console.log(a.greating());
// // // console.log(a["age"]);

// // // 4. Nesting object
// // const b = {
// //     c : {
// //         d : {
// //          name:"harsh",
// //          email:"harsh@getComputedStylemail.com"
// //         }
// //     }
// // }

// // console.log(b.c.d["name"]);

// // // 5. Merage of two object 
// // const obj1 ={
// //     a:"1",
// //     b:"2"
// // }

// // const obj2 = {
// //     c:"3",
// //     d:"4"
// // }

// // // we can merage the object in these 3 ways 
// // // const obj3 = {obj1 , obj2};
// // // const obj3 = Object.assign({}, obj1 , obj2);
// // const obj3 = {...obj1, ...obj2};
// // console.log(obj3);

// // //6>. Access the key and value of an Object
// // // Access the key of any object 
// // console.log(Object.keys(a));

// // // Access the value of any Object 
// // console.log(Object.values(a));
 
// // // 7  Call , Apply , bind 
// // // call --> When we are call method or variable of  object in another object this is calles as call function.
// // // apply --> When we bind the parameter of arangument in an array is called Apply function 
// // // Bind --> When we store call function in an varaible and it is call according to need this type of function is called Bind function 

// // const object = {
// //         name: "happy",
// //         age: 12,
// //         rollno: "0050",
// //         section: "EE B",
// //         subject: "python",
// //         printdetails: function print(){
// //             console.log(`${this.name} is the student of ${this.section}`);
// //         }  
// //     }
    
//     // this keyword is used for denoting the varible of its own object;
//     // console.log(object.age);
//     // console.log(object.section);
//     // console.log(object["subject"]);
//     // object.printdetails();
//     // console.log("next");
    
//     // console.log(`${object.name} is the student of ${object.section}`)
// //        const h = 9;
//      // Note : This concept is only used in Object 
// //    // this apply in function 
// //       This concept is only for 
// //      function println(h){
// //         console.log(`h is the hight of ${this.h}`);
// //         console.log(`h is the hight of ${h}`);
// //      }
    
// //       println(9);
//       // this is not apply in function 
    
//     // // call 
//     // // It is a method is used to call the function in another object 
    
//     // const detail1 = {
//     //     name:"happy",
//     //     age:12,
//     //     roll: "18422200050",
//     //     branch: "CS A",
//     //     printdetail1 : function(){
//     //     console.log(`${this.name} is the brach of ${this.branch}`)
//     // }
//     // }
    
//     // //detail1.printdetails();
    
//     // const detail2 = {
//     //     name:"Harsh",
//     //     age:12,
//     //     roll: "18422200051",
//     //     branch: "EE A"
//     // }
//     // //1
//     // detail1.printdetail1.call(detail2);
    
//     // // 2 ways
//     // const printdetail2 = function(){
//     //     console.log(`2 ways ${this.name}`)
//     // }
    
//     // //2 ways call 
//     // printdetail2.call(detail2);
    
//     // //3 way 
//     //     const printdetails = function( state , country)  {
//     //     console.log(` 3 ways ${this.name}` + " " +state + " "+ country);
//     //         }
        
//     // printdetails.call(detail2, "delhi" , "India");
//     // const print = function(state,country){
//     //     console.log(`${this.name}`+ " " + state +" " +country);
//     // }
    
//     // // apply
//     // print.apply(detail2,["delhi", "india"]);
    
//     // // Bind 
//     // // It is a method to store the call function and it call according to requiremenet 
    
//     // const bindfunction = detail1.printdetail1.bind(detail2);
//     // bindfunction();
    
    
// // // 8 Destrusting of Object 

// const obj = {
//     name:"srijal",
//     age:20
// }

//  const {age} = obj;

//  console.log(" the age is :",age);

// Array Descrusting
//   const arr = [1,2,3,4,5,6,];
//   const[x,y,z,rest] = arr;

//   console.log(x,y,z,rest);


// // // function myfunction(){
// // //     console.log("hi");
// // //     console.log("my");
// // // }


// // const obj = {
// //     name: "Srijal",
// //     age: 23,
// //     class: 12,
// //     detail : function printdetail(){
// //         console.log(`${this.name} is the student of ${this.age}`);
// //     }
// // }
// // console.log(obj.detail());

// // const obj1 = {
// //     name: "Aman",
// //     age: 56,
// //     class: 10,
// // }
// // console.log(obj.detail.call(obj1));


// const a = {
//     name: "Srijal",
//     age:  30,
//     roll_no: 98,
//     section: "12 b",
//     printDetails : function details(){
//         console.log(`${this.name} is the student of ${this.age} whose roll no is ${this.roll_no} and study in section ${this.section}`);
//     }
// }

// console.log(a.printDetails());

// a.name = "happy";
// a.age =  30;

// console.log(a);

// const b ={
//     name: "Simran",
//     age:  32,
//     roll_no: 88,
//     section: "10 b",
//     // printDetails : function details(){
//     //     console.log(`${this.name} is the student of ${this.age} whose roll no is ${this.roll_no} and study in section ${this.section}`);
//     // }
// }

// // console.log("Exection of Call function");
// // console.log( a.printDetails.call(b));

// console.log("Execution of bind function");

// const bin =  a.printDetails.bind(b);
// bin();

/// Deep copy and Shallow copy 

// const obj1 ={
//     name:"anil"
// }

// const obj2 = obj1;

// obj2.name = "happy";

// // console.log(obj2);
// console.log(obj1);

// When we are copy the two object then there is not copy of value of object only copy the referance;

// Solution of these problem 
// Shallow copy and Deep copy 

// const obj = {
//   name:"peter",
// }

// let user = Object.assign({},obj);
// const user  = {...obj};
// user.name = "Srijal";
// console.log(obj.name);
// console.log(user.name);

//Note: but Shallow copy is not workable in deep copy 

// Deep copy 

// let obj2 = {
//    name: "Srijal",
//    address:{
//      city:"Nodia",
//      state:"UP"
//    }
// };

// let user2 = JSON.parse(JSON.stringify(obj2));

// user2.address.city = "Mumbai";
// console.log(obj2.address.city);
// console.log(user2.address.city);

// Shalow copy 


// ------------------------*************************************************-----------------------------------------------------------

// Object of Array 

// const arr = [
//    {
//     name:"Srijal",
//     email:"srijal.srivastava8@gmail.com",
//     age:2
//    },
//    {
//     name:"Happy",
//     email:"happy.srivastava8@gmail.com",
//     age:7
//    },
//    {
//     name:"Ankit",
//     email:"ankit.srivastava8@gmail.com",
//     age:7
//    }
// ]

// console.log(arr);

// console.log(arr[0]);

// console.log(arr[2]);

// console.log(arr[2].name);

// ----------------------------****************************************************-----------------------------------------------------
// MathObject 

// console.log(Math.pow(2,3));
// console.log(Math.abs(-4));
// console.log(Math.floor(-2.9));
// console.log(Math.random());
// console.log(Math.random());

// // --------------------------------------Create a random Integer ------------------------------------------------------------

// console.log((Math.floor(Math.random()*5))+1);





//-------------------------------------------Copy of object -----------------------------------------------------------

// There are two ways to copy of an Object and Array in Javascript 
// Shallow copy and Deep Copy 
//1>. Shallow Copy 
//2>. deep Copy 

// const obj = {
//    name:"Srijal",
// }

// const obj1 = obj;

// obj1.name = "Happy";

// console.log(obj1.name);
// console.log(obj.name);

// 1. Shallow copy 
// const obj = {
//    name:"Srijal"
// }

// // const obj1 = Object.assign({}, obj);
// const obj1 = {...obj};

// obj1.name= "Happy";
// console.log(obj.name);
// console.log(obj1.name);

//2>. Deep Copy 

const obj2 =  {
   name: "Srijal",
   address: {
      locality: "tripati gali",
      city: "Basti"
   }
}

// const obj3 = {...obj2}

const obj3 = JSON.parse(JSON.stringify(obj2));

obj3.address.locality = "punjabi coloney",

console.log(obj2.address.locality);
console.log(obj3.address.locality);












