const url = "https://catfact.ninja/fact";


// fetch(url).then((resp)=>{
//     console.log(resp);
//     return resp.json();
// }).then((data)=>{
//      console.log(data.fact);
// })
// .catch((err)=>{
//     console.log("the error is: ", err);
// })


const getdata = async()=>{
    try{
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
      console.log(data.fact);

      let res2 = await fetch(url);
      let data2 = await res2.json();
      console.log(data2);
      console.log(data2.fact);

      let res3 = await fetch(url);
      let data3 = await res3.json();
      console.log(data3);
      console.log(data3.fact);
    
    }
    catch(err){
      console.log("error--->--", err)
    }
}

getdata();



