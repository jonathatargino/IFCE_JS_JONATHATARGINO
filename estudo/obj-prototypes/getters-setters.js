// Getter e Setter são uma maneira para proteger a propriedade para não serem reatribuídas diretamente, o que poderia quebrar o programa. Exemplo: propriedade preco possui um valor number. É possível atribuir uma string à propriedade preco, o que vai ocasionar problemas no programa pois não se era desejado isso.

function Produto(nome, preco, estoque){
  this.nome = nome;
  this.preco = preco;
  let estoquePrivado = estoque;

  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: true,
    // GET -> Método para retornar o valor
    get: function(){
      return estoquePrivado
    },
    set: function(valor){
      if (typeof valor !== 'number'){
        throw new TypeError("Não é possível reatribuir a propriedade estoque para um valor diferente de number.")
      }
      estoquePrivado = valor;
    },
  })
}

const p1 = new Produto('Camiseta', 20, 3);
// Output: Produto { nome: 'Camiseta', preco: 20, estoque: [Getter] }
console.log(p1);
// Output: 3
console.log(p1.estoque);
p1.estoque = 5
// Output: 5
console.log(p1.estoque)
// Output: TypeError: Não é possível reatribuir a propriedade estoque para um valor diferente de number.
p1.estoque = "estoque muito grande"