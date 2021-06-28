/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  let properties = path.split('.');

  return (object) => {
    if (Object.keys(object).length === 0) {
      return;
    }

    return properties.reduce((previousValue, currentValue) => {
      return previousValue[currentValue];
    }, object);
  };
}
