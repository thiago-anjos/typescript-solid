import { ShoppingCart } from './shopping-cart';
import { OrderStatus } from './interfaces/order-status';
import { Message } from '../services/message';
import { Persistence } from '../services/persistence';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  //injetando uma classe atraves de um construtor
  constructor(
    private readonly cart: ShoppingCart,
    private readonly message: Message,
    private readonly persistence: Persistence,
  ) {}

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('carrinho está vázio');
      //return para parar o if aqui
      return;
    }
    this._orderStatus = 'closed';
    this.message.sendMessage(
      `Seu pedido foi recebido ${this.cart.totalWithDiscount()}`,
    );
    this.persistence.saveOrder();
    this.cart.clear();
  }
}
