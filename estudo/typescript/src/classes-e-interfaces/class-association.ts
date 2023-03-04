export class Escritor {
  private _ferramenta: Ferramenta | null = null; // Associação: Um escritor terá uma ferramenta associada.

  constructor(private _nome: string) {}

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}
  abstract escrever(): void;

  get nome(): string {
    return this.nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log("Caneta azul, Azul caneta");
  }
}

const manoelGomes = new Escritor("Manoel Gomes");
manoelGomes.ferramenta = new Caneta("Caneta Azul");
