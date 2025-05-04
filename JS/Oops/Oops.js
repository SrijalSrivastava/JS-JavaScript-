const student = {
    name: "Aman Verma",
    Roll: 1234,
    Age: 35,
    marks: 234,
    Mark : function(){
       console.log("Hi we are using");
    }
}

const empliyee = {
   tax :function(){
      console.log("calculate a marks");
   }
}

// Prototype:
// prototype is a Special part of object 
// We can set the prototype with the help of __proto__
const karan = {
    name : "karan verma"
}


karan.__proto__ = empliyee;