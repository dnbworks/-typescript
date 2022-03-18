
// NUMBER TYPE

let age = 32;

let weight: number = 170;

weight = 180;
weight = true;

// STRING TYPE

let myName = 'DNB';
let city: string = 'London';

myName = myName.length;

// BOOLEAN TYPE

let isAwesome = false;
let isBoolean = 'London'.length === 0;
let isBoring: boolean = false;


// inference vs assignment
// we usually go with inference

// this is the case when assignment can be benefically

let address: string;

address = 'London';
address = true;


let amount;

amount = 120;
amount = true;
amount = [];

let passcode: string | number = 123;

// OBJECT 

const obj = {
    firstname: 'john',
    lasname: 'peter',
    phone: '09090',
    age: 17,
    gender: true
}

const obj2: {
    firstname: string;
    lasname: string;
    phone: string;
    age: number;
    gender: boolean;
} = {
    firstname: '',
    lasname: '',
    phone: '',
    age: 17,
    gender: true
}

obj2.age = 34;
obj2.age = true;

obj2.name;

obj2.phone.length;

// ARRAYS

const arrayOfString: (string | boolean)[] = ["string1", "string2", "string3"];

arrayOfString.push("string4");
arrayOfString.push(true);

const arrayOfBooleans: boolean[] = [true, true, false];

const arrayOfNumebers = [1, 2, 3];

let arrayOfBOjects: {
    firstname: string;
    lasname: string;
    phone: string;
    age: number;
    gender: boolean;
}[] = [];

arrayOfBOjects.push({
    firstname: '',
    lasname: '',
    phone: '',
    age: 34,
    gender: true,
});

const arrayOfArrays = [["",""], ["",""]];

// FUNCTIONS

const add = (num1, num2) => {
    return num1 + num2;
}

const subtract = (num1: number, num2: number) => {
    return num1 - num2;
}

const compare = (num1: number, num2: number): boolean => {
    return num1 > num2;
}

const log = (): void => {
    console.log("hello")
}

// UNION TYPE

let numberOrString: string | number = "James Bond";

numberOrString = 4;

let array: (string | number)[] = ["", 4, null, undefined];

let object: {
    hello: string | number
}

/////////////////////////////////////
/// literal types 

let rainbowColor: "red" | "orange" | "yellow" | "blue" | "indigo" | "violet" = "red";

rainbowColor = "pink";

rainbowColor = "yellow";

enum RainBowTypes {
    RED,
    ORANGE,
    YELLOW,
    BLUE,
    INDIGO,
    VIOLOT
}

let rainbowColor2: RainBowTypes = RainBowTypes.BLUE;

// OPTIONAL PROPERTY

let obj4: {
    property: string
    property2?: string
} = {
    property: ''
}