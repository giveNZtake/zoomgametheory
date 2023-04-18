export const convertCurrency = (amount, fromCurrency, toCurrency) => {
  const conversionRate = { USD_INR: 80, INR_USD: 1 / 80 };

  if (fromCurrency === toCurrency) return amount;

  if (fromCurrency === "USD" && toCurrency === "INR") {
    return amount * conversionRate.USD_INR;
  }

  if (fromCurrency === "INR" && toCurrency === "USD") {
    return amount * conversionRate.INR_USD;
  }

  throw new Error("Invalid currencies provided");
};