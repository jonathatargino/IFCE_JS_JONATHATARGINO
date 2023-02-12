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

