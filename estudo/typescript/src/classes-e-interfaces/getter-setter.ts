export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string, // colocamos _ para o TypeScript não reclamar que existem mais de um atributo cpf (variável, getter e setter)
  ) {}

  // Utilizamos métodos públicos (get e set) para o acesso de propriedades privadas. -> maior proteção
  set cpf(cpfRecebido: string) {
    if (cpfRecebido) this._cpf = cpfRecebido; // tratamento de dado no setter
  }
  get cpf(): string {
    return this._cpf.replace(/\D/g, ""); // tratamento de dados nos getters
  }
  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa("Jonatha", "Targino", 19, "000.000.000-00");
pessoa.cpf = "111.111.111-11"; // set
console.log(pessoa.cpf); // get
