'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FuelSchema extends Schema {
  up () {
    this.create('fuels', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.float('gasoline_price')
      table.float('alcohol_price')
      table.float('liters_of_gasoline')
      table.float('liter_of_alcohol')
      table.float('total_price')
      table.timestamps()
    })
  }

  down () {
    this.drop('fuels')
  }
}

module.exports = FuelSchema
