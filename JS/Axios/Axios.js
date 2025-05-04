let btn = document.querySelector("button");
let p = document.querySelector('p');

// btn.addEventListener('click', async ()=>{
//     let fact = await getdata();
//     console.log("Button was clicked  --->---:   ", fact);
//     p.innerText = fact; 
// })


// const url = "https://catfact.ninja/fact";
// const getdata = async()=>{
//    try {
//      let res = await axios.get(url);
//      return res.data.fact;
//    } catch (error) {
//     console.log("error is: " ,error);
//     return "No fact found";
//    }
// }


btn.addEventListener('click', async()=>{
    let fact = await getdata();
    console.log(fact);
    p.innerText = fact;
})


const url = "https://catfact.ninja/fact";
const getdata = async()=>{
    try {
      let res = await axios.get(url);
      return res.data.fact;
    } catch (error) {
         console.log("error is: " ,error);
    return "No fact found";
    }
}