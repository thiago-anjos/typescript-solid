import { Message } from './services/message';
import { Order } from './entities/order';
import { Persistence } from './services/persistence';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';

const shoppingCart = new ShoppingCart();
const message = new Message();
const persistence = new Persistence();
const order = new Order(shoppingCart, message, persistence);

shoppingCart.addItem(new Product('camiseta', 4));
shoppingCart.addItem(new Product('tenis', 120));
shoppingCart.addItem(new Product('tablet', 700));
shoppingCart.addItem(new Product('notebook', 4000));

// shoppingCart.items[0] = { name: 'teste', price: 0 };
console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
