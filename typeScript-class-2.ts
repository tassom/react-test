//TypeScript Taxable Book

class Book {
  constructor(private basePrice: number) {}
  finalPrice(): number {
    return this.basePrice * 2;
  }
}

class TaxableBook extends Book {
  private taxRate: number;
  private price: number;
  constructor(basePrice: number, taxRate: number) {
    super(basePrice);
    this.price = new Book(basePrice).finalPrice();
    this.taxRate = taxRate;
  }

  finalPrice(): number {
    return this.price * this.taxRate;
  }
}

export const App = () => {
  const cmp = new TaxableBook(10, 2).finalPrice();
  return cmp;
};

