import { ShoppingCart } from './shopping-cart';
import { OrderStatus } from './interfaces/order-status';
import { Message } from '../services/message';
import { Persistence } from '../services/persistence';
import { OrderCustomerHasName } from './interfaces/customer-protocol';

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
    private readonly customer: OrderCustomerHasName,
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
    console.log(
      `O cliente é ${this.customer.getName()}, ${this.customer.getIDN()}`,
    );
  }
}
