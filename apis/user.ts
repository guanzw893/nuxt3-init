enum Api {
  user = '/user',
  login = '/user/login'
}

const login = (params: Record<string, unknown>) => {
  return useHttp.post<any>(Api.login, params)
}

const getUserInfo = (id: number) => {
  return useHttp.get<{
    username: string
    id: number
    nickname: string
    avatar: string
  }>(Api.user + '/' + id)
}

export default {
  login,
  getUserInfo
}
