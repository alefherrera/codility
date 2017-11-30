module.exports = function solution(A) {
  const array = A.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== i+1) return i+1;
  }
  return array.length + 1;
};
