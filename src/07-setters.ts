// En este ejemplo podemos ver el uso de los setters en TypeScript.

// Un setter es un método que se utiliza para establecer el valor de una propiedad de un objeto. 
// Se define utilizando la palabra clave `set` seguida del nombre del setter y su tipo de parámetro. 
// Los setters permiten modificar las propiedades de un objeto de manera controlada, 
// lo que es útil para validar los datos antes de asignarlos a las propiedades y mantener la integridad del estado del objeto.

export class MyDate {
    constructor(
        private _year: number = 1996, 
        private _month: number = 7, 
        private _day: number = 9
    ) {}
    
    private addPadding(value: number): string {
        if (value < 10) {
            return `0${value}`;
        }
        return `${value}`;
    }
    
    public printFormat(): string {
        const day = this.addPadding(this._day)
        const month = this.addPadding(this._month)
        return `${day}/${month}/${this._year}`;
    }

    public add(amount: number, type: 'days' | 'months' | 'years') {
        if (type === 'days') {
            this._day += amount;
        } 
        if (type === 'months') {
            this._month += amount;
        } 
        if (type === 'years') {
            this._year += amount;
        }
    }

    get day() {
        return this._day
    }
    
    set day(value: number) {
        this._day = value
    }

    get month() {
        return this._month
    }
    
    set month(value: number) {
        if(value >= 1 && value <= 12) {
            this._month = value
        } else {
            console.error('Month must be between 1 and 12')
            //throw new Error("Month out of range");            
        }
    }

    get isLeapYear(): boolean {
        if (this._year % 400 === 0) return true;
        if (this._year % 100 === 0) return false;
        return this._year % 4 === 0;
    }

    get year() {
        return this._year
    }

    set year(value: number) {
        let currentYear = new Date().getFullYear()
        if(value < currentYear) {
            this._year = value
        } else {
            console.error('Date cannot be later than the current date')
        }
    }

}


const myDate = new MyDate(2028,3,10)
console.log(myDate.printFormat())
console.log(myDate.day)
myDate.month = 13;
myDate.year = 2027
console.log(myDate.isLeapYear)

console.log(myDate.printFormat())
// This dont work because access method is private
// myDate.day = 12