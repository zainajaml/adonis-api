/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  auth: {
    newAccount: {
      store: typeof routes['auth.new_account.store']
    }
    accessTokens: {
      store: typeof routes['auth.access_tokens.store']
    }
  }
  profile: {
    profile: {
      show: typeof routes['profile.profile.show']
      update: typeof routes['profile.profile.update']
      destroy: typeof routes['profile.profile.destroy']
    }
    accessTokens: {
      destroy: typeof routes['profile.access_tokens.destroy']
    }
  }
  users: {
    users: {
      index: typeof routes['users.users.index']
      show: typeof routes['users.users.show']
    }
  }
}
