class Person{
    constructor(firstName,lastName){
     this.firstName=String(firstName)
     this.lastName=String(lastName)
    
    }
    }
    class Developer extends Person{
        constructor(firstName,lastName,role){
            super(firstName,lastName);
            this.role=role;
        }
    }
    let greg= new Developer("Greg","Sanchez","manager");
    console.log(greg);

    console.log(greg.firstName + " " + greg.lastName + " is the " + greg.role)
