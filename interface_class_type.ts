// tuple
let Role: [number, string];

let gender: any;

// Role = ['hi', 5];
let age: number | string;
type Person = {
  name: string,
  age?: number // making age optional
}

let person: Person = {
  name: 'Barack'
};

// asigning a function

let printName: (name: string) => void;

let personName: unknown;

// function printName(name: string){
//   console.log(name);
// }

// printName('John Peter')

let personArray: Person[];



// extending types

type X = {
  a: string;
  b: number;
}

type Y = X &{
  x: string;
  y: number;
}

let y : Y = {
  x: 'string',
  y: 5,
  a: 'string',
  b: 7
}

// interfaces extends
interface Persons {
  profession: string;
}

interface Guy extends Persons {
  age: number;
}

class Citizen implements Guy {
  constructor(profession, age){
    this.profession = profession;
    this.age = age;
  }
}

const newCitizen = new Citizen();