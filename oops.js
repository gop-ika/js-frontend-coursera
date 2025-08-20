// Task 1: Code a Person class
class Person{
    constructor(name = "Tom", age = 20, energy = 100) {//constructor with default parameters
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {//method 
        this.energy += 10;//increase energy by 10
    }
    doSomethingFun() {
        this.energy -= 10;//decrease energy by 10
    }
}

class Worker extends Person {
    constructor(name, age, energy, xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork() {
        this.xp += 10;
    }
}
    function intern() {
        let internobj = new Worker("Bob", 21, 110, 0, 10);
        internobj.goToWork();
        return internobj;
    }
function manager() {
    let managerobj = new Worker("Alice", 30, 120, 100, 30);
    return managerobj;
}
console.log(intern());
console.log(manager());
      



