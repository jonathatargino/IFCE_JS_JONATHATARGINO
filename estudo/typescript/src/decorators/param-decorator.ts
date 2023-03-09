function decorator(
  classPrototype: any,
  nomeMetodo: string | symbol,
  index: number,
): any {
  console.log(classPrototype); // prototype da class
  console.log(nomeMetodo); // nome do método onde o parâmetro está contido
  console.log(index); // index do parâmetro
}

export class Pessoa {
  constructor(public nome: string, public sobrenome: string) {}

  falar(@decorator msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }
}

const eu = new Pessoa("Jonatha", "Targino");
