function decorator(classPrototype: any, nome: string | symbol): any {
  console.log(classPrototype); // Prototype da classe
  console.log(nome); // Nome da propriedade
  let valorPropriedade: any;
  return {
    get: () => valorPropriedade,
    // Vai executar quando a propriedade for declarada.
    set: (valor: any) => {
      if (typeof valor === "string") {
        valorPropriedade = valor.split("").reverse().join("");
        return;
      }
      valorPropriedade = valor;
    },
  };
}

export class Pessoa {
  @decorator nome: string;
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  falar(msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }
}
