//typescript comes with types that help with some common type manipulation
//these are utility types

//partial changes all props in objec to optional
interface Point{
    x: number;
    y: number;
}

let pointPart: Partial<Point>={};
pointPart.x=10; //but Y is not optional

//required makes all properties required
interface Car2 {
    make: string;
    model: string;
    mileage?: number;
}
let myCar: Required<Car2> = {
    make: 'ford',
    model: 'focus',
    mileage: 12000
};
//mileage is no longer optional because myCar is of type Required<Car2>

//record is a shortcut to defining an object type with a specific key and value type
const nameAgeMap2: Record<string, number> = {
    'Alice': 21,
    'Bob' : 25
};
//Record<string, number> is equivalent to { [key: string]: number}

//omit removes keys from object type
interface Person4 {
    name: string;
    age: number;
    location?: string;
}
const bob: Omit<Person4, 'age'| 'location'> ={
    name: 'Bob'
};
//pick is the same as omit but you choose the key you want to keep and all others are removed
//Exclude removes types from a union
type Primitive = string | number | boolean
const value4: Exclude<Primitive, string> = true; //so you couldn't do string here

//return type extracts the return type of a function type
type PointGenerator = () => { x: number; y: number; };
const point: ReturnType<PointGenerator> = {
    x: 10,
    y: 20
};

//paramteres extracts the parameter types of  function type as an array
type PointPrinter = (p: {x: number; y: number; }) => void;
const point2: Parameters<PointPrinter>[0]={
    x: 10,
    y: 20
};