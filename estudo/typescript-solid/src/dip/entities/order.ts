import { OrderStatus } from "./interfaces/OrderStatus";
import { CostumerOrder } from "./interfaces/CustomerProtocol";
import { ShoppingCartProtocol } from "./interfaces/ShoppingCartProtocol";
import { MessagingProtocol } from "./interfaces/MessagingProtocol";
import { PersistencyProtocol } from "./interfaces/PersistencyProtocol";

export class Order {
  private _orderStatus: OrderStatus = "open";

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly costumer: CostumerOrder,
  ) {}

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log("Seu carrinho está vazio");
      return;
    }

    this._orderStatus = "closed";
    this.messaging.sendMessage(
      `Seu pedido com total de ${this.cart.totalWithDiscount()} foi recebido.`,
    );
    this.persistency.saveOrder();
    this.cart.clear();

    console.log(
      "O cliente é:",
      this.costumer.getName(),
      this.costumer.getIDN(),
    );
  }
}
