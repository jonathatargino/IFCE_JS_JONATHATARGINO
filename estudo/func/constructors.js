// Assim como as funções fábrica, as funções construtoras também retornam um objeto.
// O corpo da função construtora ja é o objeto retornado, diferente da factory function que o objeto precisa estar no return.

function Pessoa(nome, sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = () => {
    console.log("Sou um método");
  }

  // Este método não consegue ser acessado fora da função
  const metodoInterno = () => {
    console.log("Sou um método interno");
  }
}

// Para criar um objeto através da função, usamos a palavra-chave new 
const p1 = new Pessoa("Jonatha", "Targino")
// Output: "Sou um método"
p1.metodo();
// Output: TypeError: p1.metodoInterno is not a function
p1.metodoInterno();