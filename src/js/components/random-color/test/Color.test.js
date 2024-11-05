/**
 * @file Tests for the Color.js file.
 * @module test/Color.test.js
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

import Color from '../src/Color.js'
import { RGB } from '../src/RGB.js'

const HEX_REGEX = /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g
const RGB_REGEX = /^rgb\((([0-1]?(\d{1,2})|[2]([0-4][0-9]|[5][0-5])), ?){2}([0-1]?(\d{1,2})|[2]([0-4][0-9]|[5][0-5]))\)$/g

/**
 * Represents a color test case.
 */
class ColorTestCase {
  /**
   * Initialises the object.
   *
   * @param {Color} color - The Color object.
   * @param {ExpectedColor} expected - The expected color strings.
   */
  constructor (color, expected) {
    this.color = color
    this.expected = expected
  }

  /**
   * Check if the string is coverted correctly.
   */
  runTest () {
    expect(this.color.getHex()).toEqual(this.expected.hex)
    expect(this.color.getRgb()).toEqual(this.expected.rgb)
  }

  /**
   * Check if the object changes color correctly.
   *
   * @param {RGB} newColor - The color to change the object to.
   * @param {ExpectedColor} expected - The new expected color.
   */
  runChangeColorTest (newColor, expected) {
    this.runTest()
    this.color.changeColor(newColor)
    this.expected = expected
    this.runTest()
  }
}

/**
 * The expected colors as strings.
 */
class ExpectedColor {
  /**
   * Initialises the object.
   *
   * @param {string} hex - The HEX color string.
   * @param {string} rgb - The rgb color string.
   */
  constructor (hex, rgb) {
    this.hex = hex
    this.rgb = rgb
  }
}

describe('Color', () => {
  test('Initialising', () => {
    const testCase = new ColorTestCase(new Color(new RGB(181, 100, 100)), new ExpectedColor('#b56464', 'rgb(181, 100, 100)'))

    testCase.runTest()
  })

  test('Changing the colour', () => {
    const testCase = new ColorTestCase(new Color(new RGB(181, 100, 100)), new ExpectedColor('#b56464', 'rgb(181, 100, 100)'))

    testCase.runChangeColorTest(new RGB(48, 94, 110), new ExpectedColor('#305e6e', 'rgb(48, 94, 110)'))
  })

  test('is HEX', () => {
    const color = new Color(new RGB(48, 94, 110))

    expect(color.getHex()).toMatch(HEX_REGEX)
  })

  test('is RGB', () => {
    const color = new Color(new RGB(48, 94, 110))

    expect(color.getRgb()).toMatch(RGB_REGEX)
  })

  test('pad Hex string', () => {
    const color = new Color(new RGB(15, 5, 14))

    expect(color.getHex().toLowerCase()).toStrictEqual('#0f050e')
  })

  test('Get Hsl string', () => {
    const color = new Color(new RGB(0, 191, 255))

    expect(color.getHsl().toLowerCase()).toStrictEqual('hsl(195, 100%, 50%)')
  })
})

describe('exceptions', () => {
  describe('Initialising with values out of range', () => {
    test('red', () => {
      expect(() => new Color(new RGB(256, 255, 0))).toThrow(RangeError)
    })
    test('green', () => {
      expect(() => new Color(new RGB(255, 256, 0))).toThrow(RangeError)
    })
    test('blue', () => {
      expect(() => new Color(new RGB(0, 255, -1))).toThrow(RangeError)
    })
  })

  describe('Change values to out of range', () => {
    test('red', () => {
      const color = new Color(new RGB(0, 0, 0))
      expect(() => { color.changeColor(new RGB(-1, 0, 255)) }).toThrow(RangeError)
    })
    test('green', () => {
      const color = new Color(new RGB(0, 0, 0))
      expect(() => { color.changeColor(new RGB(0, 256, 255)) }).toThrow(RangeError)
    })
    test('blue', () => {
      const color = new Color(new RGB(0, 0, 0))
      expect(() => { color.changeColor(new RGB(255, 0, -1)) }).toThrow(RangeError)
    })
  })
})
