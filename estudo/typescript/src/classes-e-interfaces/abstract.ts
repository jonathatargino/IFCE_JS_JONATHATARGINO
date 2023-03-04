// Classes abstratas são classes que vão ser usadas como molde de outras classes, ou seja, apenas para ser extendida. É impossível criar uma instância de uma classe abstrata.
export abstract class Personagem {
  constructor(
    public nome: string,
    public ataque: number,
    public vida: number,
  ) {}

  atacar(personagem: Personagem) {
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number) {
    this.vida -= forcaAtaque;
    console.log(`${this.nome} agora tem ${this.vida} de vida...`);
  }

  abstract bordao(): void; // Um método abstrato força as subclasses da classe abstrata a implementarem este método.
}

export class Arqueiro extends Personagem {
  bordao(): void {
    console.log("O mundo todo em uma flecha");
  }
}

export class Espadachim extends Personagem {
  bordao(): void {
    console.log("Meu braço direito é mais forte que meu braço esquerdo");
  }
}

const bolsonaro = new Arqueiro("Bolsonaro", 75, 800);
const lula = new Espadachim("Lula", 50, 1000);

lula.atacar(bolsonaro);
bolsonaro.atacar(lula);
lula.atacar(bolsonaro);
bolsonaro.atacar(lula);
lula.atacar(bolsonaro);
bolsonaro.atacar(lula);
lula.atacar(bolsonaro);
bolsonaro.atacar(lula);
