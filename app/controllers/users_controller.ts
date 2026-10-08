import User from '#models/user'
import UserTransformer from '#transformers/user_transformer'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  async index({ serialize }: HttpContext) {
    const users = await User.query().orderBy('id', 'asc')
    return serialize(users.map(UserTransformer.transform))
  }

  async show({ params, serialize }: HttpContext) {
    const user = await User.findOrFail(params.id)
    return serialize(UserTransformer.transform(user))
  }
}
