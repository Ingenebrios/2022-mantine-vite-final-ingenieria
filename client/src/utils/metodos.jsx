/* eslint-disable no-restricted-globals */
const total = (a, b) => (isNaN(parseInt(a, 10)) ? 0 : a + b)

const multiplicacion = (a, b) => (isNaN(parseInt(a, 10)) ? 0 : a * b)

export {
  total, multiplicacion,
}
