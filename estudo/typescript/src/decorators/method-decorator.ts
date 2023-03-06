// Decorador de método:
function decorator(
  classPrototype: any, // Prototype da classe
  nomeMetodo: string, // nome do método
  descriptor: PropertyDescriptor, // configs do tipo writable, configurable...
): any {
  console.log(classPrototype);
  console.log(nomeMetodo);
  console.log(descriptor);
  // Ao retornar algo no decorator de um método, estaremos substituindo o property descriptor.
  return {
    writable: false,
    enumerable: false,
    configurable: false,
    // Alterando o método
    value: function (...args: any[]) {
      return args[0];
    },
  };
}

export class Pessoa {
  constructor(public nome: string, public sobrenome: string) {}

  @decorator // roda quando o método é criado
  falar(msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }
}

const eu = new Pessoa("Jonatha", "Targino");
const falar = eu.falar("estou falando besteira");
console.log(falar);
