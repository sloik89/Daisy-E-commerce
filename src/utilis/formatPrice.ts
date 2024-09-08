export const formatPrice = (price: number): string => {
  const formatedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);
  console.log(formatedPrice);

  return formatedPrice;
};
