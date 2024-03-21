## 版本声明

| 工具                                          | 版本     |
| --------------------------------------------- | -------- |
| [node](https://nodejs.org/)                   | ^18.18.2 |
| [vue](https://cn.vuejs.org/)                  | ^3.4.21  |
| [nuxt](https://nuxt.com/)                     | ^3.6.3   |
| [pinia](https://pinia.vuejs.org/)             | ^2.1.7   |
| [typescript](https://www.typescriptlang.org/) | ^5.0.0   |
| [husky](https://typicode.github.io/husky/)    | ^9.0.11  |

## 安裝依賴包

```sh
npm install
```

## 相关插件

- [Vue](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## 目录结构

| 目录                   | 详情                    |
| ---------------------- | ----------------------- |
| .husky                 | 代码提交配置文件夹      |
| apis                   | 接口文件夹              |
| app                    | 配置项文件夹            |
| app/request.options.ts | 请求拦截器配置文件      |
| app/router.options.ts  | 自定义路由配置文件      |
| assets                 | 静态资源文件夹          |
| pages                  | 页面文件夹              |
| composables            | 自动导入组成文件夹      |
| constant               | 常量文件夹              |
| stores                 | 状态管理仓库            |
| utils                  | 工具文件夹              |
| nuxt.config.ts         | nuxt 项目配置文件       |
| vite-env.d.ts          | 环境变量类型声明文件    |
| .env.example           | 环境变量案例文件        |
| .eslintrc.cjs          | eslint 规则配置文件     |
| .stylelintrc.cjs       | stylelint 规则配置文件  |
| .prettierrc            | 格式化文件              |
| commitlint.config.cjs  | commitlint 规则配置文件 |

## 环境变量

> 下拉代码库，找到 `.env.example` 文件，复制文件内容，重命名为 `.env`，并配置相关环境变量。

## 提交规范

| type     | subject                                   |
| -------- | ----------------------------------------- |
| feat     | 新功能 feature                            |
| fix      | 修复 bug                                  |
| docs     | 文档注释                                  |
| style    | 代码格式(不影响代码运行的变动)            |
| refactor | 重构、优化(既不增加新功能，也不是修复bug) |
| perf     | 性能优化                                  |
| test     | 增加测试                                  |
| chore    | 构建过程或辅助工具的变动                  |
| revert   | 回退                                      |
| build    | 打包                                      |

```sh
<type>(<scope>): <subject>
```

> 相关使用文档：[commitlint](https://github.com/conventional-changelog/commitlint/#what-is-commitlint)

## 约定式路由

### 基本使用

> 目录结构

```
| pages/
---| about.vue
---| index.vue
---| posts/
-----| [id].vue
```

> 生成的路由文件

```json
{
  "routes": [
    {
      "path": "/about",
      "component": "pages/about.vue"
    },
    {
      "path": "/",
      "component": "pages/index.vue"
    },
    {
      "path": "/posts/:id",
      "component": "pages/posts/[id].vue"
    }
  ]
}
```

> 相关使用文档：[routing](https://nuxt.com/docs/getting-started/routing)

## 自定义路由

> 项目根目录下创建 app/router.options.ts

```ts
import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
  routes: () => [
    {
      name: 'home',
      path: '/home',
      component: () => import('~/pages/index.vue').then((r) => r.default || r)
    }
  ]
}
```

## 请求

### 拦截器配置

> 项目根目录下创建 app/request.options.ts

```ts
export const requestConfig = {
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
```

### 使用

```ts
// apis/user.ts
enum Api {
  getUserInfo = '/user/getUserInfo'
}

const getUserInfo = (id: string) => {
  return useHttp.get(Api.getUserInfo + '/' + id)
}

export default {
  getUserInfo
}

// apis/index.ts
import user from './user'

export default {
  user
}

// composables/index.ts
import api from '~/apis'

export const useApi = () => api
```

```ts
// app.vue
const { user } = useApi()

const id = 'e0892251-b82f-4545-8150-1c1535883dd3'

const { data: userInfo, pending, refresh } = user.getUserInfo(id)
```

- data 为响应式数据，不需要再通过ref进行存储
- pending 为响应式loading变量，可以直接通过判断请求状态
- refresh 请求刷新函数，无需通过重新定义函数包裹请求即可进行请求重新调用

> 优点：

- 无需自行定义ref存储请求获取到的数据
- 无需使用生命周期包裹
- 无效通过函数包裹重新请求

> 注：多个请求解构出来的变量可通过解构重命名更改变量名称

> 相关使用文档：[useFetch](https://nuxt.com/docs/api/composables/use-fetch)

### 接口模拟

> 注：正常连接后端开发，需要先关闭模拟接口使用，以防接口冲突

> 相关使用文档：[server](https://nuxt.com/docs/guide/directory-structure/server#server-routes)
