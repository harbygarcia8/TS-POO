interface TrabajadorLaboral {
    trabajar():string;
}

interface ObligacionesDelTrabajador {
    tomarDescanso():string;
    asistirReunion():string;
}

class RobotAutomatizado implements TrabajadorLaboral {
    trabajar(): string {
        return "Trabajando siempre"
    }

}

class TrabajadorHumano implements TrabajadorLaboral, ObligacionesDelTrabajador {
    trabajar(): string {
        return 'Hace su trabajo");'
    }
    tomarDescanso(): string {
        return "Descansa por 15 minutos."
    }
    asistirReunion(): string {
        return "Asistira a las 5."
    }

}