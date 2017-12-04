module.exports = function solution(A) {
  const sum = (p, c) => p + c;
  const n = 4;
  const length = A.length;
  let min;
  for (var i = 1; i < length; i++) {
    const a = A.slice(0, i);
    const b = A.slice(i, length);
    const x = a.reduce(sum, 0);
    const y = b.reduce(sum, 0);
    console.log('a',a);
    console.log('sum a', x);
    console.log('b',b);
    console.log('sum b', y);
    const result = Math.abs(x - y);
    if (min) {
      min = min < result ? min : result;
    } else {
      min = result;
    }
  }
  return min;
};
