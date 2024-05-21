function repeat(callback,n)
{
let id=setInterval(callback,1000);
setTimeout( ()=>clearInterval(id),1000*n);
}

function sayHello(){
    console.log(" Hello ")
}

repeat(sayHello,4)
//se ha establecido un intervalo de 4 repeticiones para no hacer un bucle infinito
