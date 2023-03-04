// A programação orientada a objetos (POO) tem 4 pilares fundamentais:

// ABSTRAÇÃO -> Isolar de um objeto somente os conceitos que são necessários para o programa. Uma pessoa tem muito mais do que apenas nome e sobrenome, mas para esse programa só precisamos de nome e sobrenome.
export class Pessoa {
  private nome: string;
  private sobrenome: string;

  constructor(nome: string, sobrenome: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

// ENCAPSULAMENTO -> Ocultar partes internas de um objeto e exibir apenas o necessário para uso externo (private e get/set)
export class RemoteControl {
  private powerStatus = false;
  public getStatus(): boolean {
    return this.powerStatus;
  }
}

// HERANÇA -> Passar características de um objeto para outro
export abstract class Animal {
  // Classes abstratas são classes apenas para serem extendidas por outras, ou seja, herdar suas propriedades. É impossível criar uma instância de uma classe abstrata.
  constructor(public name: string) {}
  abstract makeNoise(): void;
}
export class Dog extends Animal {
  makeNoise(): void {
    console.log(`${this.name} está fazendo AU AU`);
  }
}

// POLIMORFISMO -> Quando classes filhas de uma mesma classe tem métodos que funcionam de maneira diferente
export class Cat extends Animal {
  makeNoise(): void {
    console.log(`${this.name} está fazendo MIAU MIAU`); // Diferente de Dog
  }
}
