export const BASE_URL = "http://localhost:5000/api";

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

export function dateConverter(data) {
  const date = new Date(data);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate;
  // console.log(formattedDate);
}
