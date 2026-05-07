module.exports = function towelSort(matrix) {
  if (!matrix) {
    return [];
  }
  return matrix.flatMap((el, i) => (i % 2 !== 0 ? el.reverse() : el));
};
