
class Vehicle {

    private peopleInPolicy: string[] = []
    readonly manufactorDate: string = "2010-12-5";
    private readonly Distributor: string = "toyota";

    constructor(public model: string, public color: string, public age: number){}

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

const myToyota: Vehicle = new Vehicle("Toyota", "Red", 3);

myToyota.addToPolicy("James");
myToyota.getPolicy();