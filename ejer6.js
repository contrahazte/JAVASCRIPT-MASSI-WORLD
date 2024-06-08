
function sum(some) {
  return [...some].reduce((a,b)=>{return a+b})
}

const numbers = [1, 2, 3];
console.log(sum(numbers));
