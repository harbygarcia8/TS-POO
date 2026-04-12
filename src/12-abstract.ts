import {Animal, Dog} from './09-protected'

// Ya no puedo crear instancias del objeto padre, 
// porque al mencionar que esta es una clase abstracta, 
// la creación de instancias deben ser a partir de clases hijas.
 
//❌ const spike = new Animal('Spike')
// spike.greeting()

//Ejemplo
export class Cat extends Animal {
    constructor(name:string, private _owner: string) {
        super(name)
    }

    //Existen metodos abstractos, son metodos que no tienen 
    //implementación, solo definen la firma del método,
    //y las clases hijas deben implementar ese método.
    //Y este tipo de metodos solo pueden ser definidos en clases
    // abstractas
    // abstract jumb(): string

    climb(): string {
        return ``
    }

    get owner() {
        return this._owner
    }

    set owner(value: string) {
        this._owner = value
    }
}




const viole = new Dog('Violeta', 'Maria')
viole.greeting()
viole.woof(3)

const tommy = new Cat('Tommy', 'Harby')

tommy.owner = 'jlkrjg'

console.log(tommy.greeting())
console.log(tommy.owner)