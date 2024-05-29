
//Storing the information in local storage
const user = {
    id: 1,
    name: "John",
    age: 25,
  };

  let userJson=JSON.stringify(user)
  localStorage.setItem("user",userJson)

  //Converting the information in objects

localStorage.getItem("user",userJson)

let userParse = JSON.parse(userJson)
