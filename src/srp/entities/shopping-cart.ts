import { CartItem } from './interfaces/card-item';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

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

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('carrinho de compras limpo');
    this._items.length = 0;
  }
}
