/* eslint-disable no-restricted-globals */
const total = (a, b) => (isNaN(parseInt(a, 10)) ? 0 : a + b)

const multiplicacion = (a, b) => (isNaN(parseInt(a, 10)) ? 0 : a * b)

const aplicarCupon = (a, b) => (isNaN(parseInt(a, 10)) ? 0 : a / b)

const menosTotal = (a, b) => (isNaN(parseInt(a, 10)) ? 0 : a - b)

const modulo = (a, b) => (isNaN(parseInt(a, 10)) ? 0 : a % b)

const potencia = (a, b) => (isNaN(parseInt(a, 10)) ? 0 : a ** b)

function factorial1(n) {
  if (n < 0) return
  if (n < 2) return 1
  return n * factorial1(n - 1);
}

const factorial = (a) => (isNaN(parseInt(a, 10)) ? 0 : factorial1(a))

const raiz = (a) => (isNaN(parseInt(a, 10)) ? 0 : Math.sqrt(a))

const logaritmo = (a) => (isNaN(parseInt(a, 10)) ? 0 : Math.log(a))

const seno = (a) => (isNaN(parseInt(a, 10)) ? 0 : Math.sin(a))

const coseno = (a) => (isNaN(parseInt(a, 10)) ? 0 : Math.cos(a))

const tangente = (a) => (isNaN(parseInt(a, 10)) ? 0 : Math.tan(a))

export {
  total, multiplicacion, aplicarCupon, menosTotal, modulo, potencia, factorial, raiz, logaritmo, seno, coseno, tangente,
}