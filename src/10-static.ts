// En TypeScript, el modificador de acceso `static` se utiliza para definir propiedades y metodos que pertenecen a la clase en sí, 
// en lugar de a las instancias de la clase.

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