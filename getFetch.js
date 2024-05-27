async function todos(){
  let url="https://jsonplaceholder.typicode.com/todos"
    try{
        let jsonDoc= await fetch(url)
        if(!jsonDoc.ok){
            throw new Error(`no page was founded in ${"https://jsonplaceholder.typicode.com/todos"}`);
        }
        let dataDoc= await jsonDoc.json();
        console.log(dataDoc);
    }
    catch{(error)=>console.log(error)}
    
}

todos()
