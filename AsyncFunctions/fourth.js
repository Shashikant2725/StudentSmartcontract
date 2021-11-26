console.log("harry's code....");

async function getData(){
console.log("Inside getData function...");
// const response = await fetch('https://api.github.com/users');
console.log("before response...");
// const users = await response.json();
console.log("users resolved...");
// return users;
}

console.log("before calling getData()");
let a=getData();
console.log("after calling getData()");
console.log(a);
a.then(data=>console.log(data));
console.log("last statement of this file...");

