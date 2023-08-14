//explicit typing
let firstName: string = "Dylan";
//implicit
let firstNameTwo = "Joe";

const names: string[] = [];
names.push("kyle");

const names2: readonly string[]=["Kevin"];
//names2.push("Mike"); can't push on readonly  

let newTouple : [number, boolean, string];
newTouple = [5, false, 'hello'];
const readOnlyTouple: readonly [number, boolean, string] = [5, true, 'Mike'];

const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};

const car2: { type: string, mileage?:  number } = {
    type: "toyota"
};

const nameAgeMap: {[index: string]: number} = {};
nameAgeMap.Jack = 25;
//nameAgeMap.Mark = "fifty"; error because string fifty is not assignable to number

//enums
enum CardinalDirections {
    North = "North",
    South = "South",
    East = "East",
    West = "West"
}
//aliases and interfaces
type CarYear = number
type CarType = string
type CarModel = string
type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
}
const carYear : CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const newCar: Car = {
    year: carYear,
    type: carType,
    model: carModel
};
/** interface Rectangle{
    height: number,
    width: number
}
const rectangle: Rectangle = {
    height: 20,
    width: 10
};

interface ColoredRectangle extends Rectangle{
    color: string
}
const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};
*/

//union types
//can be string or number 
function printStatusCode(code: string | number){
    console.log(`My status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('404');

//FUNCTIONS
//return type specifics that getTime returns a number
function getTime(): number {
    return new Date().getTime();
}
function multiply(a: number, b: number){
    return a * b;
}
function add(a: number, b:number, c?:number){
    return a + b + (c || 0);
}
function pow(value: number, exponent: number = 10){
    return value ** exponent;
}
//default value goes after typing 

function divide({ dividend, divisor } : {dividend: number, divisor: number}){
    return dividend / divisor;
}

function add2(a: number, b:number, ...rest:number[]){
    return a + b + rest.reduce((p,c) => p+c, 0);
}

type Negate = (value: number) => number;
const negateFunction: Negate = (value) => value * -1;

//casting with AS
let x: unknown = 'hello';
console.log((x as string).length); //casting to string allows for string methods

let y: unknown = 4;
console.log((y as string).length); // will print undefinied because data in varialbe
//isn't changed and number doesn't have length

let z: unknown = 'hello';
console.log((<string>z).length); //<> is same as As

