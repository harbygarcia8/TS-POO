console.log(Math.PI)


export class MyMath {
    static readonly PI = 3.14

    static max(...numbers: number[]) {
        const reducemethod = Math.max(...numbers)
        return reducemethod;
    }
}

// const math = new MyMath()
// math.PI
console.log(MyMath.PI)
console.log(MyMath.max(2,3,6,5,488))