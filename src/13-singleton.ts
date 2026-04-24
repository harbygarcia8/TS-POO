// Cuidar que no se creen multiples instancias de un mismo objeto.


export class MyServivce {

    // Se inicializa en null para que el chequeo funcione correctamente
    static instance: MyServivce | null = null;
    private constructor(private _name: string) {}

    get name() {
        return this._name
    }
    
    static create(name: string): MyServivce | null {
        if (this.instance === null) {
            // Solo se crea UNA vez. Las llamadas siguientes ignoran el 'name'
            MyServivce.instance = new MyServivce(name);
            console.log('Nueva instancia creada:', name);
        } else {
            console.log('Instancia ya existe, retornando la misma');
        }
        return MyServivce.instance;
    }    

}


const mySevice1 = MyServivce.create('pepito')
console.log(mySevice1?.name)

const mySevice2 = MyServivce.create('perez')
console.log(mySevice2?.name)



console.log(mySevice1 === mySevice2)