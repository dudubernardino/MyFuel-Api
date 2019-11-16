'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('sessions', 'SessionController.store').validator('Session')

Route.group(() => {
  Route.resource('users', 'UserController')
    .apiOnly()
    .validator(
      new Map(
        [
          [
            ['users.store'],
            ['User']
          ]
        ]
      )
    )
    .middleware(
      new Map(
        [
          [
            ['users.index', 'users.show', 'users.update', 'users.delete'],
            ['auth']
          ]
        ]
      )
    )
})

Route.group(() => {
  Route.resource('fuels', 'FuelController')
    .apiOnly()
    .validator(
      new Map(
        [
          [
            ['fuels.store, fuels.update'],
            ['Fuel']
          ]
        ]
      )
    )
}).middleware('auth')
