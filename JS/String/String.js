// a>. String 
// It is a combination of Charcter 
// It is a sequence of charcter which is  used to represt the text 
// It is used for storing text 

// Create the String 
// let str1 = "Apna Collage";
// let str2 = "Shradha";

// b>. how do access the character of a String 

// console.log(str1[0]);

// for(let i=0; i<str1.length; i++){
//     console.log(str1[i]);
// }

// Template Literals 
//  "A way to have embedded expression in String"
// Eg : A way is `i am happy${s.k} is the world`
// There is inbuild property in String


// c>. Properties of String 
//1. length  

  // let str = "   happy    ";
// console.log(str.length);

//2. \n 
//  It is used to convert in next line 

// \t 
// it is used for tab 

// eg : 
// let a = "happy\nbirthday";
// console.log(a);

// // 2 . toUpperCase
//  let obj = str.toUpperCase();
//  console.log(obj);

//  //3. toLowerCase 
//  let objl = str.toLowerCase();
//  console.log(objl);

//  //4. trim
//  let objt = str.trim();
//  // This function is used to delete the unneccessary space (remove spaces)
//  console.log(objt);

// 5. If do you want to convert String into Array  ihen use split() function 
//  Split
// const x = "Happy Birthday";
// const text = x.split();


// console.log(text[0]);
// console.log(text[1]);

// for(let i=0; i<x.length; i++){
//         console.log(text[i]);
// }

// console.log(text);

// ------------*****************************New Concept*******************************************----------------------------
// Syntax for String Method

// StringName.method();

//1>. Trim , trimStart(), trimEnd();
// It is a method to remove the voidspaces 
// let s = "    Apnacollage    ";
// console.log(s);
// console.log("updatedString");
// console.log(s.trim());
// console.log(s);

// 2>. String are immutable in Javascript 
// No change can made to String 
// Whenever we do try a change, a new String will be created and old one will be same 

//3>. toLowerCase 
//4>. toUpperCase 

// let s = "I love lucknow";
// console.log(s.indexOf("love"));

// console.log(s.indexOf("o"));


// ---------*******************************************-------------------------------------------------------------------------------
// Method Chaning 

// let s = "  hello  ";
// let newMsg = s.trim();

// console.log(newMsg.toUpperCase());

// -----------------------------------------********************************************-------------------------------------------------

// 3>. SubString and Slice 
// let str = "I love coding";

// let newStr = str.slice(1,7);

// console.log(newStr);

// console.log(str.slice(1));

// console.log(str.slice(-2));

// console.log(str.substring(2,7));

//--------------------------------**************************************************--------------------------------------------------
//4 Repalce or Repeat

// let str = "I love coading";
// let newStr = str.replace("love", "do");
// console.log(newStr);

// let str = "apna apna apna";

// let newStr = str.replace("apna", "mango");

// console.log(newStr);

// let str = "apna apna apna";

// let newStr = str.replaceAll("apna", "mango");

// console.log(newStr);

// repeat 

// let str = "mango ";
// console.log(str.repeat(3));

/// ************************************************Therea is some pactice Question *****************************************************
// 1. For a given String trim it and convert into Uppercase 

// let msg = "help!";

// let newMsg = msg.trim(msg);

// let upperNewMsg = newMsg.toUpperCase();

// console.log(upperNewMsg);

// console.log(msg.trim().toUpperCase());

// Q2.Take a piece of String Collage from main String and l repalce by t 

let msg = "apnaCollage";

console.log(msg.slice(4).replaceAll('l','t'));


























