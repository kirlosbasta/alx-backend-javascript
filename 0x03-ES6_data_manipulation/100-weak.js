export const weakMap = new WeakMap();

let counter = 0;
export function queryAPI(endpoint) {
  counter += 1;
  weakMap.set(endpoint, counter);
  if (counter >= 5) {
    throw new Error('Endpoint load is high');
  }
}
