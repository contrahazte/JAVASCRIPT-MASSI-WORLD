class Person {
    constructor(id, firstName, lastName, age) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  }
  
  //const developer = new Person(1, 'Mario', 'Rossi', 25);
  // Print developer as JSON object:
  const developer = JSON.stringify(new Person(1,"Mario","Rossi",25));
  console.log(developer)
