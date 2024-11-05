/**
 * @file Tests for the RGB.js file.
 * @module test/RGB.test.js
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

import { RGB } from '../src/RGB.js'

describe('exceptions', () => {
  describe('Input is not a number', () => {
    test('red', () => {
      expect(() => new RGB(NaN, 0, 255)).toThrow(TypeError)
    })
    test('green', () => {
      expect(() => new RGB(255, undefined, 0)).toThrow(TypeError)
    })
    test('blue', () => {
      expect(() => new RGB(0, 255, '0')).toThrow(TypeError)
    })
  })

  describe('Number is out of range', () => {
    test('red', () => {
      expect(() => new RGB(256, 0, 255)).toThrow(RangeError)
    })
    test('green', () => {
      expect(() => new RGB(255, 256, 0)).toThrow(RangeError)
    })
    test('blue', () => {
      expect(() => new RGB(0, 255, -1)).toThrow(RangeError)
    })
  })

  describe('Changing value to out of range', () => {
    test('red', () => {
      const rgb = new RGB(0, 0, 255)
      expect(() => { rgb.red = -1 }).toThrow(RangeError)
    })
    test('green', () => {
      const rgb = new RGB(0, 0, 255)
      expect(() => { rgb.green = 256 }).toThrow(RangeError)
    })
    test('blue', () => {
      const rgb = new RGB(0, 0, 255)
      expect(() => { rgb.blue = -1 }).toThrow(RangeError)
    })
  })
})
