# 白嫖GPT-3.5-Turbo仓库的前端代码
## 使用 Nuxt 3 开发
后端仓库： [Bai-Piao-GPT-3.5-Turbo](https://github.com/Vincent-the-gamer/Bai-Piao-GPT-3.5-Turbo)

### 请注意
本项目需配合后端项目使用，请去上述后端仓库链接拉取后端项目。

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