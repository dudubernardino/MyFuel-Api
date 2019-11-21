'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const User = use('App/Models/User')
const Fuel = use('App/Models/Fuel')

class DatabaseSeeder {
  async run () {
    const user = await User.create({
      name: 'Eduardo Bernardino',
      email: 'eduardomoura.moura@gmail.com',
      admin: true,
      password: '123456'
    })

    await Fuel.create({
      gasoline_price: 4.78,
      alcohol_price: 3.50,
      liters_of_gasoline: 18,
      liter_of_alcohol: 5,
      total_price: 103.54,
      user_id: user.id
    })
  }
}

module.exports = DatabaseSeeder
