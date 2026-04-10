// En este ejemplo podemos ver el uso del modificador de acceso
// private en los atributos de la clase, el cual asegura 
// que las propiedades solo puedan ser accedidas 
// desde dentro de la clase propia y no desde fuera de ella.

export class MyDate {
    private year: number;
    private month: number;
    private day: number;

    constructor(year: number, month: number, day:number) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
    
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