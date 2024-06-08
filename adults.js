
const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 16
};


function adultsFilter(somePeople){
  let{age}=somePeople

  if(age<=18){console.log("come back when you grow up")}
  else{console.log(age)}
}

adultsFilter(person)
