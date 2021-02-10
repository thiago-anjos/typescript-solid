/*

Módulos de alto nível não devem depender de módulos de baixo nível, ambos devem depender de abstrações

classes abstratas, interfaces e types são abstrações porque são protocolos

*/

import { Message } from './services/message';
import { Order } from './classes/order';
import { Persistence } from './services/persistence';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { NoDiscount } from './classes/discount';
import { IndividualCustomer } from './classes/customer';
import { MessageProtocol } from './classes/interfaces/message-protocol';

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

//criando uma classe de mock mensagem
class MessageMock implements MessageProtocol {
  sendMessage(): void {
    console.log('Mensagem de mock');
  }
}

const messageM = new MessageMock();

const order = new Order(
  shoppingCart,
  messageM,
  persistence,
  individualCustomer,
);

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
