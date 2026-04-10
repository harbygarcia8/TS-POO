// La creación de clases en TypeScript es similar a la de JavaScript, 
// pero con la adición de tipos para las propiedades y parámetros del 
// constructor. Aquí hay un ejemplo de cómo crear una clase `MyDate` 
// que representa una fecha:

// Yendo a los coneptos de programación orientada a objetos, 
// una clase es un molde para crear objetos.

export class MyDate {
    year: number;
    month: number;
    day: number;

    constructor(year: number, month: number, day:number) {
        this.year = year
        this.month = month
        this.day = day

    }

}