import { OrderStatus } from './interfaces/order-status';
import { OrderCustomerHasName } from './interfaces/customer-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { MessageProtocol } from './interfaces/message-protocol';
import { PersistenceProtocol } from './interfaces/persistence-protocol';

/*
 como a order depende de shoppingCart e Message, Persistence, OrderCustomerHasName
 a classe Order é de alto nível, ela depende de outras classes para realizar suas tarefas.
 shopping cart é de baixo nivel
 order não sabe fazer as coisas do shopping cart
*/

export class Order {
  private _orderStatus: OrderStatus = 'open';

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  //injetando uma classe atraves de um construtor
  constructor(
    // classes de baixo nível
    private readonly cart: ShoppingCartProtocol,
    private readonly message: MessageProtocol,
    private readonly persistence: PersistenceProtocol,
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
