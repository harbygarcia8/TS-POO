// En TypeScript, el modificador de acceso `protected` es similar a `private`, pero con una diferencia clave:
// - `private`: Las propiedades o métodos marcados como `private` solo pueden ser accedidos dentro de la clase en la que se definen. 
// No pueden ser accedidos desde clases derivadas ni desde fuera de la clase.

// - `protected`: Las propiedades o métodos marcados como `protected` pueden ser accedidos dentro de la clase en la que se definen 
// y también en cualquier clase que herede de esa clase. Sin embargo, no pueden ser accedidos desde fuera de la clase 
// o desde instancias de la clase.

export abstract class Animal {

    constructor(protected name: string) {
    }

    move() {
        console.log('Moving along!')
    }

    greeting(){
        return `Hello, I'm ${this.name}`
    }

    protected doSomething() {
        console.log('doooo')
    }

}


export class Dog extends Animal {

    constructor(name: string, readonly _owner: string) {
        super(name)
    }

    woof(value:number): void {
        for (let i=0; i<value; i++) {
            console.log(`woof, soy ${this.name}`)
        }
        this.doSomething()
    }

    get owner() {
        return this._owner
    }

    move(): void {
        console.log('moving as a dog')
        super.move()
    }
    
}

const spike = new Dog('Spike', 'Harby')
spike.move()
console.log(spike.greeting())
spike.woof(4)
spike.move()

console.log(spike.owner)
spike.move()


