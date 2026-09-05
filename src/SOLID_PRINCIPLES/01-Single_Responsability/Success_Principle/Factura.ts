// Para cumplir con SRP, debemos separar las responsabilidades en clases más pequeñas

export class FacturaSRP {
    public calcularTotal($itmes: number) {

    }
}

class FacturaPdfGenerator {
    public generarPdfSRP($factura: FacturaSRP) {

    }
}

class NotificadorEmail {
    public enviarFactura($factura: FacturaSRP, $emailDestino: string) {
        
    }
}