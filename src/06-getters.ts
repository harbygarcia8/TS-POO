// En este ejemplo podemos ver el uso de los getters en TypeScript.

// Un getter es un método que se utiliza para obtener el valor de una propiedad de un objeto. 
// Se define utilizando la palabra clave `get` seguida del nombre del getter y su tipo de retorno. 
// Los getters permiten acceder a las propiedades de un objeto de manera controlada, 
// lo que es útil para encapsular la lógica de acceso a los datos y mantener la integridad del estado del objeto.

export class MyDate {

    constructor(
        public year: number = 1996, 
        public month: number = 7, 
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
        const month = this.addPadding(this.month)
        return `${day}/${month}/${this.year}`;
    }

    public add(amount: number, type: 'days' | 'months' | 'years') {
        if (type === 'days') {
            this._day += amount;
        } 
        if (type === 'months') {
            this.month += amount;
        } 
        if (type === 'years') {
            this.year += amount;
        }
    }

    get day() {
        return this._day
    }
    
    // set day(value: number):number {
    //     this._day = value
    // }


    get isLeapYear(): boolean {
        if (this.year % 400 === 0) return true;
        if (this.year % 100 === 0) return false;
        return this.year % 4 === 0;
    }

}


const myDate = new MyDate(2028,3,10)
console.log(myDate.printFormat())
console.log(myDate.day)
console.log(myDate.isLeapYear)

// This dont work because access method is private
// myDate.day = 12