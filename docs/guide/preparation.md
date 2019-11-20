# 准备工作

## Node.js

::: danger 注意
需要 [Node.js](http://nodejs.cn/) 版本 >= 8.10.0
:::

验证 node 当前版本

```bash
$ node -v
# v8.10.x
```

## Yarn

:::tip 建议
使用 [yarn](https://www.yarnpkg.com/) 代替 [npm](https://www.npmjs.com/) 管理 node 依赖
:::

全局安装 yarn

```bash
$ npm i -g yarn
```

验证 yarn 是否安装成功

```bash
$ yarn -v
# 1.19.1
```

## 淘宝镜像

:::tip 建议
安装 node 依赖之前，设置[淘宝镜像](https://npm.taobao.org/)
:::

查询 npm 镜像仓库

```bash
$ npm get registry
# https://registry.npmjs.org/
```

查询 yarn 镜像仓库

```bash
$ yarn config get registry
# https://registry.npmjs.org/
```

设置 npm 淘宝镜像

```bash
$ npm set registry http://registry.npm.taobao.org/
```

设置 yarn 淘宝镜像

```bash
$ yarn config set registry http://registry.npm.taobao.org/
```

## VSCode

:::tip 建议
使用 [Visual Studio Code](https://code.visualstudio.com/) 进行开发
:::

以下 VSCode 插件可以帮助您更好的开发应用

- ESLint
- EditorConfig for VS Code
- Prettier
