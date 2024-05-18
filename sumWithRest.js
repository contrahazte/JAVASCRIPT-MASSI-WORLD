function sum(...numbers){
    return numbers.reduce((a,b)=>a+b,0)
}

const numbers=[1,2,4]

console.log(sum(...numbers))
