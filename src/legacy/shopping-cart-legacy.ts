type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    // do indice que eu quero vou remvoer um elemento
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  total(): number {
    // o + retorna um number .. como se fosse um Number() do javascript, porque o tofixed retorna uma string mas o metodo está tipado que retornar um number, por isso
    // tivemos que adicionar o +
    return +this._items.reduce((acc, total) => acc + total.price, 0).toFixed();
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('carrinho está vázio');
      //return para parar o if aqui
      return;
    }
    this._orderStatus = 'closed';
    this.sendMessage(`Seu pedido foi recebido ${this.total()}`);
    this.saveOrder();
    this.clear();
  }

  sendMessage(msg: string): void {
    console.log('Mensagem enviada:', msg);
  }

  saveOrder(): void {
    console.log('Salvo com sucesso');
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('carrinho de compras limpo');
    this._items.length = 0;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 'Camiseta', price: 49.9 });
shoppingCart.addItem({ name: 'Caderno', price: 88 });
shoppingCart.addItem({ name: 'Lápis', price: 5 });
// shoppingCart.items[0] = { name: 'teste', price: 0 };
console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.orderStatus);
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
