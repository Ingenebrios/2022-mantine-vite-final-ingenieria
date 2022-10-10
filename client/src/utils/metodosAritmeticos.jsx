/* eslint-disable no-restricted-globals */
const total = (a, b) => ( a + b)

const multiplicacion = (a, b) => ( a * b)

const aplicarCupon = (a, b) => ( a / b)

const menosTotal = (a, b) => ( a - b)

const modulo = (a, b) => ( a % b)

const potencia = (a, b) => ( a ** b)

function factorial1(n) {
  if (n < 0) return
  if (n < 2) return 1
  return n * factorial1(n - 1);
}

const factorial = (a) => ( factorial1(a))

export {
  total, multiplicacion, aplicarCupon, menosTotal, modulo, potencia, factorial,
}
