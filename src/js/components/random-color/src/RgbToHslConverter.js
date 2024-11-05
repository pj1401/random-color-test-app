/**
 * @file The RgbToHslConverter class.
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

import { HSL } from './HSL.js'
import { RGB } from './RGB.js'

/**
 * This is used to convert Rgb to Hsl.
 */
export class RgbToHslConverter {
  #scaledRed
  #scaledGreen
  #scaledBlue

  #value
  #lightness

  /**
   * Converts Rgb to Hsl.
   *
   * @param {RGB} rgb - The RGB object to get the values from.
   * @returns {HSL} The color in Hsl representation.
   */
  convertRgbToHsl (rgb) {
    /**
     * See @link https://en.wikipedia.org/wiki/HSL_and_HSV#Color_conversion_formulae
     */
    this.#scaledRed = rgb.red / 255
    this.#scaledGreen = rgb.green / 255
    this.#scaledBlue = rgb.blue / 255

    this.#value = Math.max(this.#scaledRed, this.#scaledGreen, this.#scaledBlue)
    const min = Math.min(this.#scaledRed, this.#scaledGreen, this.#scaledBlue)
    const chroma = this.#value - min

    this.#lightness = this.#value - chroma / 2
    const hue = this.#getHue(chroma)
    const saturation = this.#getSaturation()
    return new HSL(hue, saturation, this.#lightness)
  }

  /**
   * Get the hue.
   *
   * @param {number} chroma - The range of the rgb values.
   * @returns {number} The hue in degrees.
   */
  #getHue (chroma) {
    let hue
    if (this.#redIsMax()) {
      hue = ((this.#scaledGreen - this.#scaledBlue) / chroma) % 6
    } else if (this.#greenIsMax()) {
      hue = ((this.#scaledBlue - this.#scaledRed) / chroma) + 2
    } else if (this.#blueIsMax()) {
      hue = ((this.#scaledRed - this.#scaledGreen) / chroma) + 4
    } else {
      hue = 0
    }
    return this.#convertHueToDegrees(hue)
  }

  /**
   * Determines if red is the max value.
   *
   * @returns {boolean} True if red is the max value.
   */
  #redIsMax () {
    return this.#scaledRed === this.#value
  }

  /**
   * Determines if green is the max value.
   *
   * @returns {boolean} True if green is the max value.
   */
  #greenIsMax () {
    return this.#scaledGreen === this.#value
  }

  /**
   * Determines if blue is the max value.
   *
   * @returns {boolean} True if blue is the max value.
   */
  #blueIsMax () {
    return this.#scaledBlue === this.#value
  }

  /**
   * Converts the hue to degrees on the color circle.
   *
   * @param {number} hue - The hue.
   * @returns {number} The hue in degrees.
   */
  #convertHueToDegrees (hue) {
    let degrees = hue * 60
    if (degrees < 0) {
      degrees += 360
    }
    return Math.trunc(degrees)
  }

  /**
   * Get the saturation.
   *
   * @returns {number} The saturation.
   */
  #getSaturation () {
    if (this.#lightness === 0 || this.#lightness === 1) {
      return 0
    } else {
      return (2 * (this.#value - this.#lightness)) / (1 - Math.abs(2 * this.#lightness - 1))
    }
  }
}
