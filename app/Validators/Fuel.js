'use strict'

class Fuel {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      total_price: 'required'
    }
  }
}

module.exports = Fuel
