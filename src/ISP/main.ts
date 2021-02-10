/*

interface segregation principle ( principio da segregacao de interface)
os clientes não devem ser forçados a depender de interfaces / types / classes abstratas que não utilizam.

*/

import { Message } from './services/message';
import { Order } from './classes/order';
import { Persistence } from './services/persistence';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { FiftyPercent, NoDiscount, TenPercent } from './classes/discount';
import { IndividualCustomer } from './classes/customer';

// const fiftyDescount = new FiftyPercent();
//const Ten = new TenPercent();
const noDiscount = new NoDiscount();
//injecao de dependencia, aplicar um desconto no carrinho
const shoppingCart = new ShoppingCart(noDiscount);
const message = new Message();
const persistence = new Persistence();
const individualCustomer = new IndividualCustomer(
  'thiago',
  'dos anjos',
  '0000000',
);

const order = new Order(shoppingCart, message, persistence, individualCustomer);

shoppingCart.addItem(new Product('camiseta', 4));
shoppingCart.addItem(new Product('tenis', 120));
shoppingCart.addItem(new Product('tablet', 700));
shoppingCart.addItem(new Product('notebook', 4000));

// shoppingCart.items[0] = { name: 'teste', price: 0 };
console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
