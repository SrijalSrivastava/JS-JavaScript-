
let div = document.querySelector("div");

let ul = document.querySelector("ul");

let li = document.querySelectorAll("li");

div.addEventListener('click', ()=>{
     console.log("div was click")
})


ul.addEventListener('click', (event)=>{
    event.stopPropagation();
    console.log("ul was click");
})


for(lis of li){
lis.addEventListener('click', (event)=>{
    event.stopPropagation();
    console.log("li was clicked");
})
}



