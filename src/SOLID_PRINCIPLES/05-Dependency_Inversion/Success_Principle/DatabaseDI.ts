export interface DatabaseInterface {
    save(data: unknown): string;
}

class MySQLConnectionDI implements DatabaseInterface {
    save(data: unknown): string {
        throw new Error("Method not implemented.");
    }

}

class MongoConnectionDI implements DatabaseInterface {
    save(data: unknown): string {
        throw new Error("Method not implemented.");
    }

}

class UserControllerDI {

    private db: DatabaseInterface;

    constructor (db: DatabaseInterface) {
        this.db = db;
    }

    store(request: unknown) {
        this.db.save(request)
    }

}