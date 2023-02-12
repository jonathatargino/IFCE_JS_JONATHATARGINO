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

// MANIPULANDO PROTOTYPES

const objA = {
  chaveA: "A",
  // __proto__: Object.prototype
}

const objB = {
  chaveB: "B",
}

// setPrototypeOf -> Seta o prototype de um objeto para um outro objeto. Desta forma, o objeto conseguirá acessar chaves do seu novo prototype.
Object.setPrototypeOf(objB, objA);

// Desta forma, objA é pai do objB, e o pai do objA é o __proto__
// Output: A
console.log(objB.chaveA);

// Como acessar diretamente o __proto__ não é recomendado, podemos usar o Object.getPrototypeOf
console.log(Object.getPrototypeOf(objA));


// Mas para quê alteraríamos o prototype? Isso é simples: os métodos estando fora da função construtora faz com que nenhum objeto tenha aquele método diretamente, mas possa acessar do prototype, gerando assim maior performance.

function Produto(nome, preco){
  this.nome = nome;
  this.preco = preco;
}

// Método criado no prototype
Produto.prototype.desconto = function(percentual) {
  this.preco = this.preco - (this.preco * (percentual/100))
}

const tenis = new Produto("tenis", 200);
// Output: Produto { nome: 'tenis', preco: 200 }
console.log(tenis);
tenis.desconto(50);
// Output: Produto { nome: 'tenis', preco: 100 }
console.log(tenis)

// Objetc.create -> Cria um objeto e seta o prototype dele. (é possível passar um objeto de configurações assim como no defineProperties)

const p2 = Object.create(Produto.prototype, {
  nome: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: "meias"
  }
})
// Obs: por possuir o prototype de Produto, p2 tem acesso ao método desconto. Entretanto, este objeto p2 não possui chave de preco pois é um objeto vazio, o que geraria um erro ao rodar o método.

p2.preco = 1000;
p2.desconto(10)
// Output: Produto { nome: 'meias', preco: 900 }
console.log(p2)
