// Objetos possuem chaves e valores dentro do seu corpo.

//Objeto literal
const pessoa = {
  nome: "Jonatha",
  sobrenome: "Targino",
  idade: 19,
  getDataNascimento: function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade
  }
}

// Objeto criado através de construtor
const objeto = new Object();
objeto.tipo = "objeto"

// Esses valores podem ser acessados atraves de objeto.chave ou objeto.[chave]
console.log(pessoa.getDataNascimento());
console.log(objeto['tipo'])

// Apagar chaves:
delete pessoa.sobrenome;

// Tornar objeto imutavel:
Object.freeze(objeto);

// Objetos, além de serem declarados literalmente, também podem ser criado através de "moldes". São eles: Factory functions, Constructor functions e Classes.