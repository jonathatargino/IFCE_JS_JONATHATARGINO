function criaPessoa(nome, sobrenome){
  // Se retornassemos o objeto diretamente, a cada objeto criado ia existia um método falar, um comer e um beber. Então, criamos um prototype com métodos e retornamos um Object.create.
  const pessoaPrototype = {
    falar() {
      console.log(`${this.nome} está falando.`)
    }, 

    comer() {
      console.log(`${this.nome} está comendo.`)
    },

    beber() {
      console.log(`${this.nome} está bebendo.`)
    },
  }
  return Object.create(pessoaPrototype, {
    nome: {value: nome, enumerable: true},
    sobrenome: {value: sobrenome, enumerable: true}
  });
}

const p1 = criaPessoa("Jonatha", "Targino");
// Output: { nome: 'Jonatha', sobrenome: 'Targino' }
console.log(p1);
// Output: Jonatha está falando.
p1.falar()