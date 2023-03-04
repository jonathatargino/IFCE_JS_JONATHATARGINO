// Superclasse (classe-pai)
export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }
  getCpf(): string {
    return this.cpf;
  }
  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

// Subclasses (classe-filho)
export class Aluno extends Pessoa {
  // Ao usarmos o construtor numa subclasse, precisamos chamar o construtor da superclasse, e fazemos isso utilizando o super()
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf); // super é uma ferramenta para acessar a superclass através da subclass.
  }
}
export class Cliente extends Pessoa {}

const aluno = new Aluno("Jonatha", "Targino", 19, "000.000.000-00"); // Aluno herdou todas propriedades de Pessoa
