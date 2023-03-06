@decorator // O decorador é chamado na criação da classe
export class Animal {
  constructor(public nome: string, public cor: string) {}
}

// Função que está sendo chamada na criação de um objeto através da classe
function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    cor: string;
    nome: string;

    constructor(...args: any[]) {
      super(...args);
      this.cor = this.inverte(args[0]);
      this.nome = this.inverte(args[1]);
    }

    inverte(valor: string): string {
      return valor.split("").reverse().join("");
    }
  };
}

// Criar uma instância de Animal, por causa do @decorator, é a mesmsa coisa de criar uma instância de decorator(Animal)
const animal = new Animal("Lobo", "Cinza");
console.log(animal);
