import {Animal, Dog} from './09-protected'

// Ya no puedo crear instancias del objeto padre, 
// porque al dejar mencionar que este es una clase abstracta, 
// la creación de instancias deben ser a partir de clases hijas.
 
//❌ const spike = new Animal('Spike')
// spike.greeting()

const viole = new Dog('Violeta', 'Maria')
viole.greeting()
viole.woof(3)