import type { NitroFetchRequest } from 'nitropack'

import type { UseFetchOptions } from '#app'
import { requestConfig } from '~/app/request.options'

type FetchRequest =
  | Ref<NitroFetchRequest>
  | NitroFetchRequest
  | (() => NitroFetchRequest)

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
