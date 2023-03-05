// Padrão de projeto Singleton -> apenas uma instância por classe (construtor privado)
export class Database {
  static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host} ${this.user} ${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    // Se a instância ja existir, ela será retornada.
    if (Database.database) return Database.database;
    // Caso a instância não existir, será retornada uma nova.
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1 = Database.getDatabase("localhost", "root", "123456");
const db2 = Database.getDatabase("localhost", "root", "123456");

console.log(db1 === db2); // Referenciam o mesmo objeto.
