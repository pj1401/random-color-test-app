/**
 * @file Tests for the RandomColor.js file.
 * @module test/RandomColor.test.js
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

import RandomColor from '../src/RandomColor.js'

const HEX_REGEX = /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g
const RGB_REGEX = /^rgb\((([0-1]?(\d{1,2})|[2]([0-4][0-9]|[5][0-5])), ?){2}([0-1]?(\d{1,2})|[2]([0-4][0-9]|[5][0-5]))\)$/g
const HSL_REGEX = /^hsl\(([1-2]?(\d{1,2})|[3][0-5](\d{1})), ?(\d{1,2}|[1][0][0])%, ?(\d{1,2}|[1][0][0])%\)/g

/**
 * Represents a random color test case.
 */
class RandomColorTestCase {
  /**
   * Initialises the object.
   *
   * @param {RandomColor} randomColor - A RandomColor object.
   */
  constructor (randomColor) {
    this.randomColor = randomColor
  }

  /**
   * Run the test case.
   */
  runTest () {
    expect(this.randomColor.getHex()).toMatch(HEX_REGEX)
    expect(this.randomColor.getRgb()).toMatch(RGB_REGEX)
    expect(this.randomColor.getHsl()).toMatch(HSL_REGEX)
  }
}

describe('Randomising colours', () => {
  test('Get the colour as a string', () => {
    const testCase = new RandomColorTestCase(new RandomColor())

    testCase.runTest()
  })

  test('Getting a new colour', () => {
    const randomColor = new RandomColor()

    const colorA = randomColor.getHex()

    randomColor.randomize()

    // Will fail if the new colour is the same.
    expect(colorA === randomColor.getHex()).toBeFalsy()
  })
})
