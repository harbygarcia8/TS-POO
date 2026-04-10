// En este ejemplo ya podemos ver los atributos de la clase 
// que se definen como caracteristicas del objeto. 

// Nuestra clase `MyDate` tiene tres propiedades: 
// `year`, `month` y `day`,

// Los métodos son acciones que los objetos pueden realizar. 
// En la clase `MyDate`, tenemos dos métodos: `printFormat` y `add`.

export class MyDate {
    year: number;
    month: number;
    day: number;

    constructor(year: number, month: number, day:number) {
        this.year = year;
        this.month = month;
        this.day = day;

    }

    printFormat(): string {
        return `${this.day}/${this.month}/${this.year}`;
    }

    add(amount: number, type: 'days' | 'months' | 'years') {
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


const myDate = new MyDate(2026,3,12)
const date2 = new Date().getFullYear();
console.log(date2)
console.log(myDate.printFormat())
myDate.add(3,'days')
console.log(myDate.printFormat())