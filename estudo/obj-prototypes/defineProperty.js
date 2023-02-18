function Produto(nome, preco, estoque, marca){
  // Nome é uma variável pública, isso é, pode ser acessada de fora do objeto de forma direta
  this.nome = nome;

  // Object.defineProperty -> Adiciona uma propriedade a um objeto ou modifica atributos desse mesmo objeto como seu valor ou se esse valor pode ser sobrescrito. Te dá controle maior sobre as propriedades de um objeto.
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    value: estoque, // mostra o valor
    writable: false, // se o valor pode ser alterado
    configurable: true, // permite ou não reconfigurar/apagar uma chave.
  })

  // Object.defineProperties -> Faz a mesma coisa que o Object.defineProperty, mas com várias chaves em uma só função.
  Object.defineProperties(this, {
    preco: {
      enumerable: true, 
      value: preco,
      writable: false,
      configurable: true,
    },
    marca: {
      enumerable: true, 
      value: marca,
      writable: false,
      configurable: true,
    }
  })
}

const p1 = new Produto('Camiseta', 20, 3, "Lacoste");
console.log(p1);