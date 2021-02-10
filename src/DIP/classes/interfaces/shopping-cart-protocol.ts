import { CartItem } from './card-item';

export interface ShoppingCartProtocol {
  items: Readonly<CartItem[]>; //getter
  addItem(item: CartItem): void;
  removeItem(index: number): void;
  total(): number;
  totalWithDiscount(): number;
  isEmpty(): boolean;
  clear(): void;
}
