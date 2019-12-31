function multiply(x, y) {
  if (x < 10 && y < 10) {
    return x * y;
  }

  const xHalf = Math.floor(x.length / 2);
  const yHalf = Math.floor(y.length / 2);
  const a = String(x).substr(0, xHalf);
  const b = String(x).substr(xHalf);
  const c = String(y).substr(0, yHalf);
  const d = String(y).substr(yHalf);

  return karatsuba(a, b, c, d);
}

function karatsuba(a, b, c, d) {

  const n = (a.length + b.length);
  const half = n / 2;
  const ac = multiply(a, c);
  const bd = multiply(b, d);
  const ad = multiply(a, d);
  const bc = multiply(b, c);

  return 10 ** n * ac
    + 10 ** half * (ad + bc)
    + bd;
}

const n1 = 10;
const n2 = 10;
const result = multiply(n1, n2);
console.log(result); // 100
