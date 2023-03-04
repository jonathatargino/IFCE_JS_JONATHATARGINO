export class Empresa {
  public readonly nome: string; // Declaração das variáveis: visibilidade e tipo
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string; // privado

  constructor(nome: string, cnpj: string) {
    this.nome = nome; // No construtor, receberemos os argumentos passados na criação da instância
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }
}

export class Udemy extends Empresa {
  constructor() {
    super("Udemy", "11.111.111/001-11");
  }

  popColaborador(): Colaborador | undefined {
    const colaborador = this.colaboradores.pop(); // Só é possível acessar colaboradores dentro de Udemy pois colaboradores é uma propriedade protegida, e não privada.
    if (colaborador) return colaborador;
  }
}

export class Colaborador {
  // Uma classe pode ser usada como tipo pois todos objetos criados através dela terão o seu a classe como tipo.
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {} // Atalho de constructor
}

const empresa1 = new Empresa("Udemy", "11.111.111/001-11");
const colaborador1 = new Colaborador("Jonatha", "Targino");

empresa1.adicionaColaborador(colaborador1);
console.log(empresa1);

// Visibilidade:

// public (padrão)  -> Acessível na classe, fora da classe e em todas as subclasses.
console.log(empresa1.nome);
// private -> Acessível apenas dentro da classe. (encapsulamento)
// console.log(empresa1.colaboradores) // Property 'colaboradores' is private and only accessible within class 'Empresa'
// protected -> Acessível dentro da classe e da subclasse.
