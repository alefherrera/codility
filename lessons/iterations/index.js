module.exports = function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    const binary = N.toString(2);
    let aux = 0, gap = 0;
    for(let i = 0; i < binary.length; i++) {
        if (binary[i] === "1") {
            gap = Math.max(gap, aux);
            aux = 0;
        } else {
            aux += 1;
        }
    }
    return gap;
}
