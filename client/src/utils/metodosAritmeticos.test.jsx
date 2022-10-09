/* eslint-disable no-undef */
import {
  total, multiplicacion, aplicarCupon, menosTotal, modulo, potencia, factorial, raiz, logaritmo, seno, coseno, tangente,
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
  it('retorna el factorial', () => {
    expect(factorial(5)).toBe(120)
    expect(factorial('5')).toBe(120)
  })
  it('retorna la raiz cuadrada', () => {
    expect(raiz(25)).toBe(5)
    expect(raiz('25')).toBe(5)
  })
  it('retorna el logaritmo', () => {
    expect(logaritmo(25)).toBe(3.2188758248682006)
    expect(logaritmo('25')).toBe(3.2188758248682006)
  })
  it('retorna el seno', () => {
    expect(seno(25)).toBe(-0.13235175009777303)
    expect(seno('25')).toBe(-0.13235175009777303)
  })
  it('retorna el coseno', () => {
    expect(coseno(25)).toBe(0.9912028118634736)
    expect(coseno('25')).toBe(0.9912028118634736)
  })
  it('retorna la tangente', () => {
    expect(tangente(25)).toBe(-0.13352640702153587)
    expect(tangente('25')).toBe(-0.13352640702153587)
  })
})
