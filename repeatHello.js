function repeat(callback)
{
let id=setInterval(callback,1000);
setTimeout( ()=>clearInterval(id),1000);
}

function sayHello(){
    console.log(" Hello ")
}

repeat(sayHello)
