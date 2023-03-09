/*
  Liskov substution principle

  Subtipos precisam ser substituíveis por seus tipos de base.
  Se um programa espera um Animal, algo do tipo Cachorro (que herda Animal) deve servir como qualquer outro animal.

  Ou seja, se você tiver que checar o tipo de um valor toda vez que você muda o subtipo de um tipo T, muito provavelmente você estará quebrando a regra LSP
*/

import { Messaging } from "./services/messaging";
import { Order } from "./entities/order";
import { Persistency } from "./services/persistency";
import { Product } from "./entities/product";
import { ShoppingCart } from "./entities/shoppingCart";
import { FiftyPercentDiscount } from "./entities/discount";

const fiftyPercentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product("Presunto", 12));
shoppingCart.addItem(new Product("Queijo", 18));
shoppingCart.addItem(new Product("Carne", 46));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
