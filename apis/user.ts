enum Api {
  login = '/user/login',
  logout = '/user/logout',
  getUserInfo = '/user/getUserInfo'
}

const login = (params: Record<string, unknown>) => {
  return useHttp.post<any>(Api.login, params)
}

const logout = () => {
  return useHttp.post<void>(Api.logout)
}

const getUserInfo = (id: string) => {
  return useHttp.get<{ username: string; password: string }>(
    Api.getUserInfo + '/' + id
  )
}

export default {
  login,
  logout,
  getUserInfo
}
