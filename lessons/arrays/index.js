module.exports = function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    const aux = {};
    for (let i = 0; i < A.length; i++) {
      aux[A[i]] = (aux[A[i]] || 0) + 1;
    }

    for (let a in aux) {
      if (aux[a] % 2) return parseInt(a);
    }
}
