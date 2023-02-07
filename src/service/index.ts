import { clearAllCookie, readString, write } from 'utils'
import { AUTH_TOKEN_KEY, USER_ID_KEY } from 'config/constants/cookie'

export interface AppContext {
  getAuthToken(): string | undefined
  setAuthToken(token: string): void
  getUserId(): string | undefined
  setUserId(id: string): void
  reset(): void
}

const appContext: AppContext = {
  getAuthToken() {
    return readString(AUTH_TOKEN_KEY)
  },
  setAuthToken(token: string) {
    write({ name: AUTH_TOKEN_KEY, value: token!, days: 60 })
  },
  getUserId() {
    return readString(USER_ID_KEY)
  },
  setUserId(id: string) {
    write({ name: USER_ID_KEY, value: id!, days: 60 })
  },
  reset() {
    clearAllCookie()
  },
}

export default appContext
