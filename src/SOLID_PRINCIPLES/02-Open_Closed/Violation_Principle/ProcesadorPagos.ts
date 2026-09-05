// Las entidades de software (clases, módulos, funciones) deben estar abiertas para la extensión pero cerradas para la modificación

// Ejemplo de violación del OCP:
// Supongamos que tenemos un procesador de pagos. Al principio solo aceptábamos tarjetas de crédito, pero el negocio creció y ahora queremos aceptar PayPal.

class ProcesadorPagos { 
    public procesar(tipo: string, monto: number) {
        if (tipo === 'tarjeta') {
            // logica de procesar con tarjeta, conectar con stripe y cobrar
        } else if (tipo === 'paypal') {
            // Contectar con la Api de Paypal y cobrar
        }

    }
}