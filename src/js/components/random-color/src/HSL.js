/**
 * @file The HSL class.
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Represents a colour in hsl.
 */
export class HSL {
  /**
   * Initialises the object.
   *
   * @param {number} hue - Determines if the color is classed as red, green, yellow, or blue or a combination.
   * @param {number} saturation - The depth and concentration of the color.
   * @param {number} lightness - The percentage of light that the color reflects.
   */
  constructor (hue, saturation, lightness) {
    this.hue = hue
    this.saturation = saturation
    this.lightness = lightness
  }

  /**
   * Returns a string representation of the object.
   *
   * @returns {string} A string representation of the object.
   */
  toString () {
    return `hsl(${this.hue}, ${this.#getPercent(this.saturation)}, ${this.#getPercent(this.lightness)})`
  }

  /**
   * Convert a decimal to a percent string.
   *
   * @param {number} decimal - The decimal number to convert.
   * @returns {string} The decimal in percent.
   */
  #getPercent (decimal) {
    return `${Math.trunc(decimal * 100)}%`
  }
}
