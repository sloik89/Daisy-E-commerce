export const formatPrice = (price: number): string => {
  console.log(price);
  const formatedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);

  return formatedPrice;
};
