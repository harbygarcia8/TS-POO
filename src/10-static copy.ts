console.log(Math.PI)


export class MyMath {
    static readonly PI = 3.14

    static max(...numbers: number[]) {
        const reducemethod = numbers.reduce((max, item) => max >= item ? max : item)
        return reducemethod;
    }
}

// const math = new MyMath()
// math.PI
console.log(MyMath.PI)
console.log(MyMath.max(2,3,6,5,488))