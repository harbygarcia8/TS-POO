// Las funciones que utilicen punteros o referencias a clases base deben ser capaces de usar objetos de clases derivadas sin saberlo. Este principio se centra en asegurar que una subclase pueda reemplazar a su superclase sin romper el programa.

class Ave {

    volar (): string {
        return 'Aleteando por el cielo'
    }
}

class Loro extends Ave {}

class pinguino extends Ave {
    volar(): string {
        throw new Error("Los pinguinos no pueden volar");
        
    }
}