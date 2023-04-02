# 白嫖GPT-3.5-Turbo仓库的前端代码
## 使用 Nuxt 3 开发
后端仓库： [Bai-Piao-GPT-3.5-Turbo](https://github.com/Vincent-the-gamer/Bai-Piao-GPT-3.5-Turbo)

### 请注意
1. 本项目需配合后端项目使用，请去上述后端仓库链接拉取后端项目。
2. 前端已兼容不同的模型选择，根据是否有上下文来对页面功能进行动态调整。

## 拉取并运行项目

1. 拉取到本地
~~~shell
git clone https://github.com/Vincent-the-gamer/Bai-Piao-GPT-WebUI.git
~~~

2. 安装依赖
~~~shell
npm install
# 或者yarn/pnpm等，下不赘述
yarn install
~~~

3. 运行项目

修改`utils/axios.ts`里面的baseURL为你的后端地址
~~~typescript
/**
 * 设置你可用的后端服务URL即可
 */
const baseURL = "http://{ip或域名}:{端口}"
~~~

然后把项目本地跑起来测试能不能和后端调通
~~~shell
yarn run serve
~~~

## 打包构建
如果构建静态文件(HTML + CSS + JS)：
~~~shell
yarn run generate
~~~

如果构建服务端渲染文件，请去`nuxt.config.ts`中打开ssr选项：`ssr: false`改为`ssr: true`，然后运行
~~~shell
yarn run build
~~~
这样会构建出一个默认跑在3000端口的生产环境前端服务器，如果需要修改端口，请自行研究[Nuxt 3文档](https://nuxt.com.cn)配置。