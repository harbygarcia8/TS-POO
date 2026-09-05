export interface MetodoPago {
    procesarPago(monto: number): void;
}

class PagoTarjeta implements MetodoPago {
    procesarPago(monto: number): void {
        // logica de stripe
    }
    
}

class PagoPaypal implements MetodoPago {
    procesarPago(monto: number): void {
        // logica de Paypal
    }

}

class ProcesarPago {

    procesar (metodoPago: MetodoPago, monto: number) {
        metodoPago.procesarPago(monto)

    }

}