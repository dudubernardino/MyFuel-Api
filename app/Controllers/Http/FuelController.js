'use strict'

/**
 * Resourceful controller for interacting with fuels
 */
class FuelController {
  /**
   * Show a list of all fuels.
   * GET fuels
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ auth }) {
    const fuels = await auth.user.fuels().with('user').fetch()
    return fuels
  }

  /**
   * Create/save a new fuel.
   * POST fuels
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth }) {
    const data = request.all()

    const fuel = await auth.user.fuels().create({
      ...data,
      user_id: auth.user.id
    })

    return fuel
  }

  /**
   * Display a single fuel.
   * GET fuels/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, auth, reponse }) {
    const fuel = await auth.user.fuels().where('fuels.id', params.id).with('user').fetch()

    return fuel
  }

  /**
   * Update fuel details.
   * PUT or PATCH fuels/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, auth }) {
    const data = request.all()
    const fuel = await auth.user.fuels().where('fuels.id', params.id).first()

    fuel.merge(data)
    fuel.updated_at = new Date()

    await fuel.save()

    return fuel
  }

  /**
   * Delete a fuel with id.
   * DELETE fuels/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, auth }) {
    const fuel = await auth.user.fuels().where('fuels.id', params.id).first()

    await fuel.delete()
  }
}

module.exports = FuelController
