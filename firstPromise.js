const number=15;
const promise = new Promise((resolve,reject)=>{ 
    number>10? resolve(`${number} is greater than 10`) :reject(`${number} is less than 10`);
})

promise
.then((numberValue)=>{console.log(numberValue);}).catch((error)=>{console.log(error);})
