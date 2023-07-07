# Rust-BaipiaoGPT仓库的前端代码
## 使用 Nuxt 3 开发
后端仓库： [https://github.com/Vincent-the-gamer/Rust-BaipiaoGPT](https://github.com/Vincent-the-gamer/Rust-BaipiaoGPT)

### 页面预览
![前端](./.github/img/new-frontend.png)

#### 已适配iPhone(偷懒版适配)，懒得适配Galaxy Fold

懒得写media动态样式，直接硬缩就完事了

Galaxy Fold的尺寸缩不进去（滑稽）

![手机端](./.github/img/mobile.png)

### 请注意

1. 本项目需配合后端项目使用，请去上述后端仓库链接拉取后端项目。

2. 前端已兼容不同的模型选择，根据是否有上下文来对页面功能进行动态调整。

## 拉取并运行项目

1. 拉取到本地
~~~shell
git clone https://github.com/Vincent-the-gamer/BaipiaoGPT-WebUI.git
~~~

2. 安装依赖
~~~shell
npm install
# 或者yarn/pnpm等，下不赘述
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
npm run serve
~~~

## 打包构建
如果构建静态文件(HTML + CSS + JS)：
~~~shell
npm run generate
~~~

如果构建一个服务：
~~~shell
npm run build
~~~

构建的服务默认跑在`3000`端口，我们使用`ecosystem.config.js`配合`pm2`模块进行部署，可以实现自定义端口

使用时，需要将`ecosystem.config.js`和打包出来的`.output`文件夹放在同级，然后：

~~~shell
# 启动
pm2 start ecosystem.config.js

# 停止(切勿使用kill命令掐掉进程，pm2自带守护进程)
pm2 stop ecosystem.config.js
~~~