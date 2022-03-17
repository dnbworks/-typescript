class Car {
    model: string
    color: string
    age: number
    peopleInPolicy: string[] = []
    constructor(model, color, age){
        this.model = model;
        this.color = color;
        this.age = age
    }

    describe(){
        console.log(`A ${this.age} year old ${this.color} ${this.model}`);
    }

    addToPolicy(name: string){
        this.peopleInPolicy.push(name);
    }
}

const myJaguar = new Car("Jaguar", "green", 2);

myJaguar.addToPolicy('John')