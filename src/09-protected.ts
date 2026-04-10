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


