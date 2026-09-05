// Los módulos de alto nivel no deben depender de los módulos de bajo nivel. Ambos deben depender de abstracciones. Las abstracciones no deben depender de los detalles. Los detalles deben depender de las abstracciones

class MySQLConnection {
    public save($data: unknown) { /* ... */ }

}

class UserController {
    private $db: MySQLConnection;

    constructor () {
        this.$db = new MySQLConnection();
    }
    
    public store($request: unknown) {
        this.$db.save($request);
    }
}