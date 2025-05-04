let counter =0; 
function getData(){
    console.log("Fecting data", counter);
    counter++;
}

function mydebounce(call,d){
   let timer;
   return function(...args){
   if(timer) 
    clearTimeout(timer);
     setTimeout(() =>{
     call();
   },d);
}
}

let bettercode = mydebounce(getData,1000);

