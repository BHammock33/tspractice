//Generics allow creating type variables which can be used to create classes
//functions, and type aliases that don't need to explicitly define the types
//that they use. Easier to write reusable code
//generic with functions help make more generalized methods

function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
}
console.log(createPair<string, number>('hello', 42));

//can be used to create gneralized classes, like Map

class NamedValue<T>{
    private _value: T | undefined;

    constructor(private name: string) { }

    public setValue(value: T) {
        this._value = value;
    }
    public getValue(): T | undefined {
        return this._value;
    }
    public toString(): string {
        return `${this.name}: ${this._value}`;
    }
}
let value = new NamedValue<number>('myNumber');
value.setValue(10);
console.log(value.toString()); //myNumber: 10

//generics in type aliases allow creating types that are more reusable
type Wrapped<T> = { value: T};
const wrappedValue: Wrapped<number> = { value: 10};

//can assign default values if no other is specified/inferred
class NamedValue2<T = string>{

}

function createLoggedPair<S extends string | number, T extends
    string | number>(v1: S, v2: T): [S,T]{
        console.log(`creating pair: v1='${v1}', v2='${v2}'`);
        return [v1, v2];
    }
