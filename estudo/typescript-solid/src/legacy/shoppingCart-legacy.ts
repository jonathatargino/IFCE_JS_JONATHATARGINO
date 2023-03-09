type CartItem = { name: string; price: number };
type OrderStatus = "open" | "closed";

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];

  // Não é responsabilidade do carrinho de compras.
  private _orderStatus: OrderStatus = "open";

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  // Não é responsabilidade do carrinho de compras.
  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }

  total(): number {
    return Number(
      this._items.reduce((acc, item) => acc + item.price, 0).toFixed(2),
    );
  }

  // Não é responsabilidade do carrinho de compras.
  checkout(): void {
    if (this.isEmpty()) {
      console.log("Seu carrinho está vazio");
      return;
    }

    this._orderStatus = "closed";
    this.sendMessage(`Seu pedido com total de ${this.total()} foi recebido.`);
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  // Não é responsabilidade do carrinho de compras.
  sendMessage(msg: string): void {
    console.log("Mensagem enviada: " + msg);
  }

  // Não é responsabilidade do carrinho de compras.
  saveOrder(): void {
    console.log("Pedido salvo com sucesso");
  }

  clear(): void {
    this._items.length = 0;
  }
}

const shoppingCart = new ShoppingCartLegacy();
shoppingCart.addItem({ name: "Presunto", price: 12 });
shoppingCart.addItem({ name: "Queijo", price: 18 });
shoppingCart.addItem({ name: "Carne", price: 46 });

shoppingCart.checkout();

console.log(shoppingCart.items);
console.log(shoppingCart.total());
