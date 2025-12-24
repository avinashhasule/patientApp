export const formatMobileNumber = (number, countryCode = '+91') => {
  const digits = number.replace(/\D/g, '');

  if (digits.length < 10) {
    return number;
  }

  const lastFour = digits.slice(-4);
  const midThree = digits.slice(-7, -4);
  const firstThree = digits.slice(-10, -7);

  return `${countryCode}-XXX XXX ${lastFour}`;
};
