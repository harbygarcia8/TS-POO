// Acá hacemos la implementación del constructor de la clase.
// El constructor es un método especial que se ejecuta automáticamente
// cuando se crea una instancia (creación) de la clase. Se utiliza para inicializar
// las propiedades del objeto con los valores proporcionados al momento
// de la creación de la instancia.

class MyDate {
    constructor(
        public year: number = 1996, 
        public month: number = 7, 
        private day: number = 9
    ) {}
    
    private addPadding(value: number): string {
        if (value < 10) {
            return `0${value}`;
        }
        return `${value}`;
    }
    
    public printFormat(): string {
        const day = this.addPadding(this.day)
        const month = this.addPadding(this.month)
        return `${day}/${month}/${this.year}`;
    }

    public add(amount: number, type: 'days' | 'months' | 'years') {
        if (type === 'days') {
            this.day += amount;
        } 
        if (type === 'months') {
            this.month += amount;
        } 
        if (type === 'years') {
            this.year += amount;
        }
    }
}


const myDate = new MyDate(2026,3,10)
console.log(myDate.printFormat())
myDate.add(3,'days')

// This dont work because day is private
//myDate.day = 12
//console.log(myDate.day)
console.log(myDate.printFormat())


const myDate2 = new MyDate()
console.log(`() => `,myDate2.printFormat())

const myDate3 = new MyDate(2022)
console.log(`(2022) => `,myDate3.printFormat())

const myDate4 = new MyDate(2022,3)
console.log(`(2022,3) => `,myDate4.printFormat())