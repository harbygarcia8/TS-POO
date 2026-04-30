// function getValue(value: number | string) {
//     return value;
// }

function getValue<myType>(value: myType) {
    return value;
}

console.log(getValue<number>(12).toFixed());
console.log(getValue<string>('12').toLocaleUpperCase());
getValue<number[]>([12,12,3,5,4,8,9]).forEach(num => console.log(num));