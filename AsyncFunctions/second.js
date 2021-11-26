console.log("Async Function::::::::");

setTimeout(()=>{

        for(let i=1;i<=10;i++)
        {
            const table=i*2;
            console.log(table);
        }
},100);
console.log("Printing Table of 2 done......");