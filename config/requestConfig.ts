import type { FetchOptions } from 'ofetch'

const { VITE_BASE_URL } = import.meta.env

/**
 * @name: 请求配置类型
 */
interface RequestConfig<R>
  extends Pick<
    FetchOptions<R extends 'json' ? 'json' : never>,
    'onRequest' | 'onRequestError' | 'onResponse' | 'onResponseError'
  > {
  baseURL: string
}

/**
 * @name: 请求配置
 * @return {RequestConfig<'json'>}
 */
export const requestConfig: RequestConfig<'json'> = {
  /**
   * 请求基准路径
   */
  baseURL: VITE_BASE_URL,
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
