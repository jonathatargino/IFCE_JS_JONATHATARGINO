// Decorator factories -> função que engloba e retorna um decorator (serve para receber parâmetros no decorador)
function inverteNomeECor(param1: string, param2: string) {
  return function <T extends new (...args: any[]) => any>(target: T): T {
    return class extends target {
      cor: string;
      nome: string;

      constructor(...args: any[]) {
        super(...args);
        this.cor = this.inverte(args[0]) + " " + param1;
        this.nome = this.inverte(args[1]) + " " + param2;
      }

      inverte(valor: string): string {
        return valor.split("").reverse().join("");
      }
    };
  };
}

@inverteNomeECor("Parâmetro 1", "Parâmetro 2")
export class Animal {
  constructor(public nome: string, public cor: string) {}
}

const lobo = new Animal("Lobo", "Cinza");
// Animal { nome: 'azniC Parâmetro 2', cor: 'oboL Parâmetro 1' }
console.log(lobo);
