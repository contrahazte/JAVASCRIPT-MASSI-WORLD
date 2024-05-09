class Person {
_firstname="";
_lastname="";
_age="";
constructor(firstname,lastname,age){ 
    this._firstname=firstname;
    this._lastname=lastname;
    if(typeof (age)!="number"){
        this._age=age
    ;}
    else{this._age=Number(age);}
 }

set firstname(nameValor){
    if(typeof (nameValor)!="string"){
        this._firstname="";
    }
    else{ nameValor=_firstname;}
};

get firstname(){
    return this._firstname=firstname;
};

set lastname(lastnameValor){
    if(typeof (lastnameValor)!="string"){
        this._lastname="";
    }
    else{ lastnameValor=_lastname;}
};

get lastname(){
    return this._lastname=lastname;
}

set age(ageValor){
    if (typeof (ageValor) != "number") { this._age = age; }
        else { ageValor = age; }
};

get age(){
    return this._age=age;
}
get fullname(){
    return "El nombre completo es "+ this._firstname +" " + this._lastname;
}
}


let person =new Person("Albert","García",23)
console.log(person.fullname);

person._firstname = 'Maria';
person._lastname = 'Verdi';
console.log(person.fullname);
