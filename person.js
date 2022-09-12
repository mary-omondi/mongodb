class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getDescription(){
        return`${this.name},${this.age} years old.`;
    }
};
const person1 =new Person('mary', 19);
console.log(person1.getDescription());