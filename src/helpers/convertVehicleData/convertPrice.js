export const convertPrice = price =>
  new Intl.NumberFormat('en-IE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    useGrouping: false,
  }).format(price);
