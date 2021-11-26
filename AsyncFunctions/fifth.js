function func(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const error=true;
            if(!error)
            {
                console.log("your promise has been resolved");
                resolve();
            }
            else{
                console.log("your function has not been resolved");
                reject("rejected");
            }

        },1000)
    })
}
func().then(function (){
    console.log("thanks for resolving");
}).catch(function(error){
console.log("very bad bro"+ " "+error);
})