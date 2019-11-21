'use strict'

const User = use('App/Models/User')
const Mail = use('Mail')

class UserController {
  async index () {
    const users = await User.query().with('fuels').fetch()

    return users
  }

  async store ({ request, response, auth }) {
    try {
      const data = request.all()

      await User.create(data)

      const token = await auth.attempt(data.email, data.password)

      await Mail.send(
        ['emails.create_user'],
        { name: data.name },
        message => {
          message
            .to(data.email)
            .from('eduardomoura.moura@gmail.com', 'Eduardo | Bernardino')
            .subject('Cadastro no MyFuel')
        }
      )

      return token
    } catch (err) {
      return response.status(err.status).send({ error: { message: 'Erro ao criar o usuário' } })
    }
  }

  async show ({ params, response }) {
    try {
      const user = await User.query().where('id', params.id).with('fuels').fetch()

      return user
    } catch (err) {
      return response.status(err.status).send({ error: { message: 'Erro ao encontrar o usuário' } })
    }
  }

  async update ({ request, params, response }) {
    try {
      const data = request.only(['name', 'admin', 'password'])
      const user = await User.findByOrFail('id', params.id)

      user.merge(data)
      user.updated_at = new Date()

      user.save()

      return user
    } catch (err) {
      return response.status(err.status).send({ error: { message: 'Erro ao editar o usuário' } })
    }
  }

  async destroy ({ params, response }) {
    try {
      const user = await User.findByOrFail('id', params.id)

      await user.delete()
    } catch (err) {
      return response.status(err.status).send({ error: { message: 'Erro ao excluir o usuário' } })
    }
  }
}

module.exports = UserController
