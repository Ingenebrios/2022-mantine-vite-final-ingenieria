/* eslint-disable no-undef */
import {
  total, multiplicacion,
} from './metodos'

describe('pruebas unitarias para funciones de pago', () => {
  it('retorna la suma del total de productos', () => {
    expect(total(2, 5)).toBe(7)
  })
  it('retorna el producto de los descuentos y del total de cada producto por la cantidad', () => {
    expect(multiplicacion(2, 5)).toBe(10)
    expect(multiplicacion('2', '5')).toBe(10)
  })
})
