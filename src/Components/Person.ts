//Classes
//members: types, the members of a class (props+methods) are typed using type annotations
class Person {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

const person = new Person("Jane");
console.log(person.getName());

//could also be
class Person2 {
    public constructor(private name: string) { }
    public getName(): string {
        return this.name;
    }
}

class Person3 {
    private readonly name: string;
    public constructor(name: string) {
        this.name = name;

    }
}
//abstract classes allow you to extend a class without implementing all
//the members(methods?)
abstract class Polygon{
    public abstract getArea(): number;

    public toString(): string{
        return `Polygon[area=${this.getArea}]`;
    }
}
class Rectangle2 extends Polygon{
    public constructor(protected readonly width: number, 
        protected readonly height: number){
            super();
        }
        public getArea(): number{
            return this.width * this.height;
        }
}

interface Shape {
    getArea: () => number;
}
//using protected allows access from classes that extend this class
class Rectangle implements Shape{
    public constructor(protected readonly width: number, 
        protected readonly height: number){}
    
    public getArea(): number {
        return this.width * this.height;
    }
    public toString(): string{
        return `Rectangle[width=${this.width}, height = ${this.height}]`;
    }
}

class Square extends Rectangle{
    public constructor(width: number){
        super(width, width);
    }
    public override toString(): string {
        return `Square[width=${this.width}]`;
    }
}

//override when a class extends another it can replace the members of the parent
//class with the same name
interface Person{
    name2: string;
    age: number;
}
function printPersonProperty(person: Person, property: keyof Person){
    console.log(`printing person property ${property}: "${person[property]}"`);
}
let person4 = {
    name2: "Max",
    age: 27
};
printPersonProperty(person, "name2");//printing person property name: "Max"

type StringMap = { [key: string]: unknown};
function createStringPair(property: keyof StringMap, value: string): StringMap{
    return { [property]: value};
}
//keyof StringMap resovled to string