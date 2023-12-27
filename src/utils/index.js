

export function calculateDiscount(price, percent) {
    let calc = price * (percent / 100);
    const newPrice = price - calc;
    return newPrice;
  }