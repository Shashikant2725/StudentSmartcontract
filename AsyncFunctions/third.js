console.log("Async/Await Functions::::::");

 function fetchData(){
     setTimeout(()=>{
        console.log("I am Printing after Aync Function called.......");
     },1000)
    
}
async function getData(){
    
        console.log("I Printing First...........");
        await fetchData();
  
}


getData();
