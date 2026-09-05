class AveLSP {
    comer (): string {
        return "Comiendo semillas o pescado"
    }

}

interface AveVoladora {
    volar():string;
}

class LoroLSP extends AveLSP implements AveVoladora {
    volar(): string {
        return "Volando entre árboles"
    }

}

class Pinguino extends Ave {

    nadar ():string {
        return "Nadando en el óceano"

    }

}