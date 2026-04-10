// El concepto de herencia es fundamental en la programación orientada a objetos. 
// Permite crear nuevas clases basadas en clases existentes, 
// lo que facilita la reutilización de código y la creación de jerarquías de clases. 
// En TypeScript, puedes usar la palabra clave `extends` para establecer una relación de herencia entre clases.

export class Animal {

    constructor(private name: string) {
    }

    move() {
        console.log('Moving along!')
    }

    greeting(){
        return `Hello, I'm ${this.name}`
    }

}


export class Dog extends Animal {

    constructor(name: string, readonly _owner: string) {
        super(name)
    }

    woof(value:number): void {
        for (let i=0; i<value; i++) {
            console.log('woof')
        }
    }

    get owner() {
        return this._owner
    }
    
}

const tommy = new Animal('Tommy')
tommy.move()
console.log(tommy.greeting())

const spike = new Dog('Spike', 'Harby')
spike.move()
console.log(spike.greeting())
spike.woof(4)

console.log(spike.owner)


