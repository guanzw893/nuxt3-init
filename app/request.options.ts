import type { FetchOptions } from 'ofetch'

const baseURL = import.meta.env.VITE_BASE_URL_API

interface RequestConfig<R>
  extends Pick<
    FetchOptions<R extends 'json' ? 'json' : never>,
    'onRequest' | 'onRequestError' | 'onResponse' | 'onResponseError'
  > {
  baseURL: string
}

export const requestConfig: RequestConfig<'json'> = {
  /**
   * 请求基准路径
   */
  baseURL,
  /**
   * 请求拦截
   */
  onRequest() {},
  /**
   * 请求失败处理
   */
  onRequestError() {},
  /**
   * 响应拦截
   */
  onResponse() {},
  /**
   * 响应失败处理
   */
  onResponseError() {}
}
