import type { NitroFetchRequest } from 'nitropack'

import type { UseFetchOptions } from '#app'
import { requestConfig } from '~/config'

type FetchRequest =
  | Ref<NitroFetchRequest>
  | NitroFetchRequest
  | (() => NitroFetchRequest)

export interface ResOptions<T> {
  data?: T
  code?: number
  message?: string
  success?: boolean
}

export const useRequest = <T>(
  url: FetchRequest,
  useFetchOptions?: UseFetchOptions<T>
) => {
  return useFetch(url, {
    ...requestConfig,
    ...useFetchOptions
  })
}

export const useHttp = {
  get<T = unknown>(
    url: string,
    params?: Record<string, unknown>,
    opts?: UseFetchOptions<T>
  ) {
    return useRequest<T>(url, { method: 'get', params, ...opts })
  },
  post<T = unknown>(
    url: string,
    body?: Record<string, unknown>,
    opts?: UseFetchOptions<T>
  ) {
    return useRequest<T>(url, { method: 'post', body, ...opts })
  },
  put<T = unknown>(
    url: string,
    body?: Record<string, unknown>,
    opts?: UseFetchOptions<T>
  ) {
    return useRequest<T>(url, { method: 'put', body, ...opts })
  },
  delete<T = unknown>(
    url: string,
    body?: Record<string, unknown>,
    opts?: UseFetchOptions<T>
  ) {
    return useRequest<T>(url, { method: 'delete', body, ...opts })
  }
}
