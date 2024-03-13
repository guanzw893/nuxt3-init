import { useHttp } from '~/utils'

enum Api {
  login = '/users/app/login',
  logout = '/users/app/logout',
  getUserInfo = '/users/app/getUserInfo'
}

export const login = (params: Record<string, unknown>) => {
  return useHttp.post<{ username: string; password: string }>(Api.login, params)
}

export const logout = () => {
  return useHttp.post<void>(Api.logout)
}

export const getUserInfo = () => {
  return useHttp.get(Api.getUserInfo)
}
