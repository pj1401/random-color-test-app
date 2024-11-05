/**
 * @file The Color class.
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

import { RgbToHslConverter } from './RgbToHslConverter.js'
import { HSL } from './HSL.js'
import { RGB } from './RGB.js'

/**
 * Represents a color.
 */
export default class Color {
  /**
   * @type {RGB}
   */
  #rgb

  /**
   * @type {HSL}
   */
  #hsl

  /**
   * Initialises the object.
   *
   * @param {RGB} rgb - The color as an RGB object.
   */
  constructor (rgb) {
    this.#rgb = rgb
    this.#hsl = new RgbToHslConverter().convertRgbToHsl(this.#rgb)
  }

  /**
   * Return the color as a RGB string.
   *
   * @returns {string} The RGB color string
   */
  getRgb () {
    return `rgb(${this.#rgb.red}, ${this.#rgb.green}, ${this.#rgb.blue})`
  }

  /**
   * Return the color as a Hex string.
   *
   * @returns {string} The color as a Hex color string.
   */
  getHex () {
    /**
     * See @link https://www.rapidtables.com/convert/color/how-rgb-to-hex.html
     */
    const hexValues = [this.#rgb.red, this.#rgb.green, this.#rgb.blue]
    for (let i = 0; i < hexValues.length; i++) {
      hexValues[i] = this.#decimalToHex(hexValues[i])
    }
    return `#${hexValues[0]}${hexValues[1]}${hexValues[2]}`
  }

  /**
   * Converts a number in Decimal to a Hex string.
   *
   * @param {number} number - The number in Decimal.
   * @returns {string} The number as a Hex string
   */
  #decimalToHex (number) {
    /**
     * See @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
     */
    return Math.abs(number).toString(16).padStart(2, '0')
  }

  /**
   * Return the color as a Hsl string.
   *
   * @returns {string} The color as a Hsl color string.
   */
  getHsl () {
    return this.#hsl.toString()
  }

  /**
   * Changes the color of the object.
   *
   * @param {RGB} rgb - The color as an RGB object.
   */
  changeColor (rgb) {
    this.#rgb = rgb
    this.#hsl = new RgbToHslConverter().convertRgbToHsl(this.#rgb)
  }
}
