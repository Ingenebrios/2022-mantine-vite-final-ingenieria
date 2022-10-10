/* eslint-disable no-undef */
import {
  total, multiplicacion, aplicarCupon, menosTotal, modulo, potencia, 
} from './metodosAritmeticos'

describe('pruebas unitarias para funciones de pago', () => {
  it('retorna la suma del total de productos', () => {
    expect(total(2, 5)).toBe(7)
  })
  it('retorna el producto de los descuentos y del total de cada producto por la cantidad', () => {
    expect(multiplicacion(2, 5)).toBe(10)
    expect(multiplicacion('2', '5')).toBe(10)
  })
  it('retorna el precio del producto con el descuento aplicado', () => {
    expect(aplicarCupon(10, 2)).toBe(5)
    expect(aplicarCupon('10', '2')).toBe(5)
  })
  it('retorna el precio total despues de eliminar productos del carrito', () => {
    expect(menosTotal(10, 2)).toBe(8)
    expect(menosTotal('10', '2')).toBe(8)
  })
  it('retorna el modulo del total', () => {
    expect(modulo(5, 2)).toBe(1)
    expect(modulo('5', '2')).toBe(1)
  })
  it('retorna la potencia de dos numeros', () => {
    expect(potencia(5, 2)).toBe(25)
    expect(potencia('5', '2')).toBe(25)
  })
})
