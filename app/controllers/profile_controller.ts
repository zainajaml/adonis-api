import UserTransformer from '#transformers/user_transformer'
import type { HttpContext } from '@adonisjs/core/http'
import { updateProfileValidator } from '#validators/user'

export default class ProfileController {
  async show({ auth, serialize }: HttpContext) {
    return serialize(UserTransformer.transform(auth.getUserOrFail()))
  }

  async update({ auth, request, serialize }: HttpContext) {
    const payload = await request.validateUsing(updateProfileValidator)

    const user = auth.getUserOrFail()
    if (payload.fullName !== undefined && payload.fullName !== null) user.fullName = payload.fullName
    if (payload.email !== undefined && payload.email !== null) user.email = payload.email
    if (payload.password) user.password = payload.password

    await user.save()

    return serialize(UserTransformer.transform(user))
  }

  async destroy({ auth }: HttpContext) {
    const user = auth.getUserOrFail()
    if (user.currentAccessToken) {
      await (user.constructor as any).accessTokens.delete(user, user.currentAccessToken.identifier)
    }

    await user.delete()

    return { message: 'Account deleted' }
  }
}
