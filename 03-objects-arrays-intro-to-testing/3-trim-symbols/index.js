/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (size === undefined) {
    return string;
  }

  if (size === 0) {
    return '';
  }

  let result = '';

  let counter = 0;
  let previousSymbol;
  for (const symbol of string) {
    if (previousSymbol === undefined || previousSymbol === symbol) {
      counter++;
    } else {
      counter = 1;
    }

    if (counter <= size) {
      result += symbol;
    }

    previousSymbol = symbol;
  }

  return result;
}
