export default function appendToEachArrayValue(array, appendString) {
  const appendedArray = [];
  for (let idx of array) {
    const value = appendString + idx;
    appendedArray.push(value);
  }

  return appendedArray;
}
