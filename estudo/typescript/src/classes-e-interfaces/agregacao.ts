// Agregação: é uma associação em que uma classe é parte da outra, de tal forma que a parte pode existir sem o todo.
export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProduto(...produtos: Produto[]) {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }
  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => {
      return (soma += produto.preco);
    }, 0);
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

// Um carrinho de compras pode ter 0 ou mais produtos
const meuCarrinho = new CarrinhoDeCompras();

const produto1 = new Produto("Camiseta", 24.5);
const produto2 = new Produto("Caneca", 13);

meuCarrinho.inserirProduto(produto1, produto2);
console.log(meuCarrinho.quantidadeProdutos());
console.log(meuCarrinho.valorTotal());
