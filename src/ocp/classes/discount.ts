// export abstract class Discount {
//   abstract calculate(value: number): number;
// }

// export class FiftyPercent extends Discount {
//   private readonly discount = 0.5;
//   calculate(price: number): number {
//     return price - price * this.discount;
//   }
// }

// export class NoDiscount extends Discount {
//   calculate(price: number): number {
//     return price;
//   }
// }

// abaixo aplicar o conceito de DRY - don't repeat yourself

export abstract class Discount {
  // retiramos o readonly para que nas classes que herdam essa constante, possam sobrescrever
  protected discount = 0;
  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class FiftyPercent extends Discount {
  protected discount = 0.5;
}

export class TenPercent extends Discount {
  protected discount = 0.1;
}

export class NoDiscount extends Discount {}
