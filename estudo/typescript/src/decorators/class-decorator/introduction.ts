// O decorator "finge" ser a classe, mas antes de retornar a classe pode realizar operações, quaiquer que seja.

@decorator2 // Ao chamar o @decorator em cima da classe, dizemos que toda instância criada por ela passará, na verdade, pelo decorator.
export class Animal {
  constructor(public cor: string) {}
}

// Função decoradora
// T extends new (...args: any[]) => any -> Essa é a notação para tipar um construtor de classe
function decorator<T extends new (...args: any[]) => any>(target: T): T {
  // classe anônima
  return class extends target {};
}

// O decorator pode observar, editar, substituir ou extender o seu objeto. Você pode manipular instâncias da classe sem precisar alterar diretamente na classe.
function decorator2<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    cor: string;

    constructor(...args: any[]) {
      super(...args);
      this.cor = "Qualquer coisa";
    }
  };
}

const animal = new Animal("cinza");
console.log(animal); // Animal { cor: 'Qualquer coisa' }
