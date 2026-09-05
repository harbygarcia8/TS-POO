// Imagina qque estamos creando un siistema de  facturación.
// Tenemoos la clase Factura, que tiene la responsabilidad de crear una factura,
// pero también tiene la responsabilidad de imprimir la factura, y de enviarla por correo.
// Esto viola el principio de responsabilidad única, porque la clase Factura tiene más de una responsabilidad.


class Factura {
    public calcularTotal($items: number[]) {
        // Logica de calcular
    }

    public generarPdf() {
    // Logica para generar PDF
    }

    public enviarPorEmail() {
        // logica para enviar el email
    }
}