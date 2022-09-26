/* eslint-disable no-undef */
import {
  total, multiplicacion,
} from './metodos'

describe('given a number, return is exponent', () => {
  it('returna la suma', () => {
    expect(total(2, 5)).toBe(7)
  })
  it('retorna el producto', () => {
    expect(multiplicacion(2, 5)).toBe(10)
    expect(multiplicacion('2', '5')).toBe(10)
  })
})
