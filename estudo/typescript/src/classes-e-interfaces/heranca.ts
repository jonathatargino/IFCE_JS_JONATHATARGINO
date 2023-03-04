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

export class Aluno extends Pessoa {}
export class Cliente extends Pessoa {}

const aluno = new Aluno("Jonatha", "Targino", 19, "000.000.000-00"); // Aluno herdou todas propriedades de Pessoa
