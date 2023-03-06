export class Pessoa<T, U> {
  constructor(public nome: T, public idade: U) {}
}

// const pessoa1: Pessoa<string, number> -> TypeScript conseguiu inferir tipos
const pessoa1 = new Pessoa("Jonatha", 19);
const pessoa2 = new Pessoa<string, number>("Jonatha", 19);

// Caso onde o TypeScript não consegue inferir tipos

export class Pilha<T> {
  private contador = 0;
  // index signature
  private elementos: { [k: number]: T } = {};

  push(elemento: T): void {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }

  pop(): T | undefined {
    if (this.isEmpty()) return undefined;

    this.contador--;
    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return elemento;
  }

  isEmpty(): boolean {
    return this.contador === 0;
  }

  mostrarPilha(): void {
    for (const chave in this.elementos) {
      console.log(this.elementos[chave]);
    }
  }
}

// Pilha<unknown> -> Quando os valores dos tipos genéricos não são enviados na criação da instância, o TypeScript não vai conseguir inferir os valores.
const pilha = new Pilha();
// (method) Pilha<unknown>.push(elemento: unknown): void
pilha.push(45);

// const pilhaNumber: Pilha<number> -> Informamos o tipo quando o TypeScript não consegue inferir.
const pilhaNumber = new Pilha<number>();
pilhaNumber.push(22);
// pilhaNumber.push("13"); // Argument of type 'string' is not assignable to parameter of type 'number'
