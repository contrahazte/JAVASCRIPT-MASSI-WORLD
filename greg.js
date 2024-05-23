let isLogged=true
function userLogIn(isLogged) {
    let aleatoryNumber = Math.random()
    return (new Promise((resolve, reject) => {
        if (isLogged === true) {
            resolve(aleatoryNumber)
        } else { reject(new Error(`User not founded`)) }
    }))

}

function userDatails(aleatoryNumber) {
   return  new Promise((resolve, reject) => {
     if(aleatoryNumber > 0.5 ) resolve({ name: "Greg", age: "24" }); 
     else{reject(new Error(`User is not logg in ${aleatoryNumber}`)) }
    })

}

userLogIn(isLogged)
    .then((aleatoryNumber) => (userDatails(aleatoryNumber)))
    .then((userData) => console.log(userData))
    .catch((error) => console.log(error))
    .finally(() => console.log(`These are user details`))


   
