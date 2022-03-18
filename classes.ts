class Car {
    model: string
    color: string
    public age: number
    private peopleInPolicy: string[] = []
    readonly manufactorDate: string = "2010-12-5";
    private readonly Distributor: string = "toyota";
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

    getPolicy(){
        console.log(this.peopleInPolicy);
    }
}

const myJaguar = new Car("Jaguar", "green", 2);

myJaguar.addToPolicy('John');
myJaguar.peopleInPolicy.push('Alan'); // can't push data coz its a private property
myJaguar.getPolicy();

// myJaguar.manufactorDate = "2012-12-5"; // cant change coz its a readonly property


// clean up class

// class Vehicle {

//     private peopleInPolicy: string[] = []
//     readonly manufactorDate: string = "2010-12-5";
//     private readonly Distributor: string = "toyota";

//     constructor(public model: string, public color: string, public age: number){}

//     describe(){
//         console.log(`A ${this.age} year old ${this.color} ${this.model}`);
//     }

//     addToPolicy(name: string){
//         this.peopleInPolicy.push(name);
//     }

//     getPolicy(){
//         console.log(this.peopleInPolicy);
//     }
// }