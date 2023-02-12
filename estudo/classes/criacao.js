// Classses são funções construtoras, só muda a forma de escrever.

class Pessoa {
  // constructor -> Método que é executado sempre que eu crio uma instancia. É usado, por exemplo, para receber parâmetros passados.
  constructor(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  // Não há necessidade de criar um prototype para inserir os métodos nele, a classe por padrão já faz isso.
  falar() {
    console.log(`${this.nome} está falando`)
  }

  comer() {
    console.log(`${this.nome} está comendo`)
  }

  beber() {
    console.log(`${this.nome} está bebendo`)
  }
}

// Instanciar a classe
const p1 = new Pessoa("Jonatha", "Targino");
// Output: Pessoa { nome: 'Jonatha', sobrenome: 'Targino'}
console.log(p1);

// Getters e Setters em classes

// Symbol serve para criar variáveis privadas. 
const _velocidade = Symbol('velocidade')

class Carro {
  constructor(nome){
    this.nome = nome;
    this[_velocidade] = 0;
  }

  get velocidade(){
    return this[_velocidade]
  }

  set velocidade(vel){
    if (typeof vel !== 'number') return;
    if (vel < 0 || vel > 100) return;

    this[_velocidade] = vel;
  }

  acelerar(){
    if (this[_velocidade] < 100) this[_velocidade]++
  }
  freiar(){
    if (this[_velocidade] > 0) this[_velocidade]--
  }
}

const c1 = new Carro('Fusca');

// Output: Carro { nome: 'Fusca', [Symbol(velocidade)]: 0 }
console.log(c1);

// Acessando velocidade através do get:
// Output: 0
console.log(c1.velocidade)

c1.velocidade = 99
console.log(c1.velocidade) // _velocidade recebe 99

c1.velocidade = 140
console.log(c1.velocidade) // _velocidade continua 99