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