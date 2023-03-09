/*
  Interface segregation principle (Princípio da segragação de interface):
  Os clientes não devem ser forçados de usar types, interfaces ou membros abstratos que não utilizam.
*/

import { Messaging } from "./services/messaging";
import { Order } from "./entities/order";
import { Persistency } from "./services/persistency";
import { Product } from "./entities/product";
import { ShoppingCart } from "./entities/shoppingCart";
import { FiftyPercentDiscount } from "./entities/discount";
import { EnterpriseCostumer2, IndividualCostumer2 } from "./entities/customer";

const fiftyPercentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const individualCostumer = new IndividualCostumer2(
  "Jonatha",
  "Targino",
  "000.000.000-00",
);
const enterpriseCostumer = new EnterpriseCostumer2("LASIC", "000/0000-00");
const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  individualCostumer,
);

shoppingCart.addItem(new Product("Presunto", 12));
shoppingCart.addItem(new Product("Queijo", 18));
shoppingCart.addItem(new Product("Carne", 46));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
