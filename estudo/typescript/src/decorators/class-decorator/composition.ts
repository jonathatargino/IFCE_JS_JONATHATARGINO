type Constructor = new (...args: any[]) => any;

function inverteNomeECor(param1: string, param2: string) {
  return function <T extends Constructor>(target: T): T {
    console.log("Primeiro decorador " + param1 + " " + param2);
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

function outroDecorador(param: string) {
  return function <T extends Constructor>(target: T) {
    console.log("Segundo decorador " + param);
    return class extends target {};
  };
}

// Quem estiver mais próximo da classe vai executar primeiro:
@outroDecorador("Parametro") // Segundo a executar
@inverteNomeECor("Parâmetro 1", "Parâmetro 2") // Primeiro a executar
export class Animal {
  constructor(public nome: string, public cor: string) {}
}

const lobo = new Animal("Lobo", "Cinza");

console.log(lobo);
