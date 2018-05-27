class Person {
    constructor(fName = 'Anonymous', age = 20 ){
        this.name = fName;
        this.age = age;
    }

    getDescription(){
        return `${this.name} is ` + `${this.age} ` + `Years old.`;
    }

    getGreeting(){
        // return this.name;
        return `Hello John, I am ${ this.name }`;
    }
}

class Students extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMojor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMojor()) {
            description += ` Their major is ${this.major}.`;
        }
        
        return description;
    }
}

class Traveler extends Person {
    constructor(name, homeLocation){
        super(name);
        this.homeLocation = homeLocation;
    }

    getGreeting(){
        let newGreeting = super.getGreeting();

        if(this.homeLocation){
            newGreeting += ` I am travelling from ${this.homeLocation}.`;
        }
        return newGreeting;
    }
}

const me = new Person('Suman');
console.log(me);

const you = new Person();
console.log(you.getDescription());

const details = new Students('Suman', 27, 'cse');
console.log(details.hasMojor());

const others = new Students('Raman', 25, `cse`);
console.log(others.getDescription());

const newTraveler = new Traveler('Suman', 'Delhi');
console.log(newTraveler.getGreeting());
