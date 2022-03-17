
const person1: {
    firstname: string;
    lastname: string;
    age: number;
    gender: boolean
} = {
    firstname: "James",
    lastname: "Bond",
    age: 24,
    gender: true
}

// an interface always result to an object
interface Person {
    firstname: string;
    lastname: string;
    age: number;
    gender: boolean
}

const person2: Person = {
    firstname: "John",
    lastname: "Peter",
    age: 24,
    gender: true
}

// other way

// a type can result to any type
type nameString = string;

const names: nameString = "Peter John";

type Person2 = {
    firstname: string;
    lastname: string;
    age: number;
    gender: boolean
}

const obj5: Person2 = {
    firstname: "John",
    lastname: "Peter",
    age: 24,
    gender: true
}

//

type Person3 = {
    firstname: string;
    lastname: string;
    age: number;
    gender: boolean
}[]

const obj6: Person3 = [
    {
        firstname: "John",
        lastname: "Peter",
        age: 24,
        gender: true
    }
]