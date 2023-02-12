// O javascript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

// Todos os objetos tem uma referência interna para um protótipo (__proto__) que vem da propriedade prototype da função construtora que foi usada para cria-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.

// Construtora -> molde (classe)
// Todo objeto que eu criar através da função construtorar Pessoa terá todas suas propriedades (nome, sobrenome, nomeCompleto)
function Pessoa(nome, sobrenome){
  this.nome = nome,
  this.sobrenome = sobrenome,
  this.nomeCompleto = () => {
    return this.nome + ' ' + this.sobrenome
  }
}

// Instância
const pessoa1 = new Pessoa("Jonatha", "Targino");

console.log(pessoa1.nomeCompleto())

// O objeto prototype já está atrelado aos objetos da função construtora
console.log(Pessoa.prototype)

// Adicionar propriedades ao prototype não irá mudar a função construtora ou seus objetos, mas seus objetos poderão acessar a propriedade através do prototype.


// Pessoa.prototype === pessoa1.__proto__
Pessoa.prototype.rir = () => console.log("HAHAHAHAHAHA");
// Ao chamar pessoa1.rir, O objeto vai procurar o método primeiramente no seu escopo interno, e, se não achar, irá procurar no __proto__
pessoa1.rir(); // Output: HAHAHAHAHAHA