export const calculateDiscount = (price: number, percentage: number) => {
  // if (price <= 0 || percentage < 0 || percentage > 100) {
  //     throw new Error("Invalid input");
  // }
  // return price - (price * percentage) / 100;
  return price * (percentage / 100);
};
