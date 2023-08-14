// by default null and undefined handling is disabled but can be enabled in 
//tsconfig.json

let newValue: string | undefined | null = null;
newValue = 'hello';
newValue = undefined;
//values must be definied unless undefined is explicitly added to type

//Optional Chaining allows accessing propoerties on an object that may or may
//not exist
interface House{
    sqft: number;
    yard?:{
        sqft: number;
    };
}
function printYardSize(house: House){
    const yardSize = house.yard?.sqft;
    if(yardSize === undefined){
        console.log('no yard');
    }else{
        console.log(`yard is ${yardSize} sqft`);
    }
}
let home: House = {
    sqft: 500
};
printYardSize(home); //prints no yard
//nullish coalescence allows writing expressions that have a fallback when dealing with
//null or undefinied. Usefull when falsy values can occur in expression but are still
//valid
function printMileage(mileage: number | null | undefined){
    console.log(`Mileage: ${mileage ?? 'Not Availabe'}`);
}
printMileage(null); //prints Mileage: not availabe
printMileage(0); //prints Mileage: 0

//null assertion is uesfull when it makes sense to ignore a values possibility of
//being null or undefined
function getValue(): string | undefined {
    return 'hello';
}
let value5 = getValue();
console.log('value length: ' +value5!.length);