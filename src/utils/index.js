

export function calculateDiscount(price, percent) {
    let calc = price * (percent / 100);
    const newPrice = price - calc;
    return newPrice;
  }

  export let Naira = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
  });
  