// Los clientes no deben verse obligados a depender de interfaces que no utilizan

interface Trabajador {
    programar():void;
    tomarDescanso():void;
    asistirReunion():void;
}

class Programador implements Trabajador {

    programar(): void {
        'Crea código'
    }
    tomarDescanso(): void {
        'Toma el descanso de 25 minutos'
    }
    asistirReunion(): void {
        throw new Error("Method not implemented.");
    }

}

class Asistente implements Trabajador {

    programar(): void {
        throw new Error("Method not implemented.");
    }

    tomarDescanso(): void {
        "Descansa 15 minutos"
    }

    asistirReunion(): void {
        "Inicio en la reunion"
    }

}