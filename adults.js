const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age:25
  };

  function isAdult(age) {
    return person.age >= 18? age: console.log("Come back when you grow up")
  }

  const{id,firstName,lastName,age}=person

  console.log(isAdult(age))
