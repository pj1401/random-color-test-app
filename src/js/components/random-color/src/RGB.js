/**
 * @file The RGB class.
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Data structure for rgb.
 */
export class RGB {
  #red
  #green
  #blue

  /**
   * Initialises the object.
   *
   * @param {number} red - The red value.
   * @param {number} green - The green value.
   * @param {number} blue - The blue value.
   */
  constructor (red, green, blue) {
    this.red = red
    this.green = green
    this.blue = blue
  }

  /**
   * Get the red value.
   *
   * @returns {number} The red value.
   */
  get red () {
    return this.#red
  }

  /**
   * Set the red value.
   */
  set red (red) {
    this.#validateNumber(red)
    this.#red = Math.trunc(red)
  }

  /**
   * Get the green value.
   *
   * @returns {number} The green value.
   */
  get green () {
    return this.#green
  }

  /**
   * Set the green value.
   */
  set green (green) {
    this.#validateNumber(green)
    this.#green = Math.trunc(green)
  }

  /**
   * Get the blue value.
   *
   * @returns {number} The blue value.
   */
  get blue () {
    return this.#blue
  }

  /**
   * Set the blue value.
   */
  set blue (blue) {
    this.#validateNumber(blue)
    this.#blue = Math.trunc(blue)
  }

  /**
   * Check if the passed value is a valid number that is within range.
   *
   * @param {object} value - The value to be tested.
   */
  #validateNumber (value) {
    this.#checkIfNumber(value)
    this.#checkNumberRange(value)
  }

  /**
   * Check if the passed value is a number. Throws an exception if it isn't.
   *
   * @param {object} value - The value to be tested.
   * @throws {TypeError} The passed argument is not a number.
   */
  #checkIfNumber (value) {
    if (this.#isNotNumber(value)) {
      throw new TypeError('The passed argument is not a number.')
    }
  }

  /**
   * Determines whether or not the passed value is a number.
   *
   * @param {object} value - The value to be tested.
   * @returns {boolean} True if the value is not a number.
   */
  #isNotNumber (value) {
    return Number.isNaN(value) || typeof value !== 'number'
  }

  /**
   * Check if the passed value is within range. Throws an exception if it isn't.
   *
   * @param {number} value - The number to test.
   * @throws {RangeError} The value must be between 0 and 255.
   */
  #checkNumberRange (value) {
    if (this.#valueOutOfRange(value)) {
      throw RangeError('The value must be between 0 and 255.')
    }
  }

  /**
   * Determines if the passed value is not between 0 and 255.
   *
   * @param {number} value - The number to test.
   * @returns {boolean} True if the number is not between 0 and 255.
   */
  #valueOutOfRange (value) {
    return value < 0 || value > 255
  }
}
