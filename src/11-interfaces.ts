// Definir una interfaz en TypeScript no solo es para definir la forma de un objeto, 
// sino que también puede ser utilizada para definir contratos que las clases deben cumplir.

// Para hacer esto se utiliza la palabra reservada `interface` seguida del nombre de la interfaz.
// y para definir ese contrato en una clase se utiliza la palabra reservada `implements` seguida del nombre de la interfaz.


interface Driver {
    database: string,
    password: string,
    port: number


    connect(): string
    disconnect(): void
    isConnected(): boolean
}

// const driver: Driver = {
//     database: '',
//     password: '',
//     port: 23
// }

export class PostgresDriver implements Driver {
    constructor(
        public database: string,
        public password: string,
        public port: number
    ){}

    connect(): string {
        return `Connected to Postgres on port ${this.port} with database ${this.database}`
    }

    disconnect(): void {
        console.log(`info`)
        
    }

    isConnected(): boolean {
        return true
    }

}

export class MySQLDriver implements Driver {
    private constructor(
        public database: string,
        public password: string,
        public port: number
    ){}

    connect(): string {
        return ``
    }

    disconnect(): void {
        console.log(`info`)
    }

    isConnected(): boolean {
        return true
    }

    
}