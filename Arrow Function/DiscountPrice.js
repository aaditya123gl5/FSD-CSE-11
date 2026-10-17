const getDiscountprice = (price, discount) => {
  const reduction = price * (discount / 100);
  return price - reduction;
};

console.log(getDiscountprice(100, 20)); 