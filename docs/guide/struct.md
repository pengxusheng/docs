# 目录结构

```bash
.
├── config # umi 相关配置
│   ├── config.js # umi 配置
│   ├── routes.config.js # 路由配置
│   └── theme.config.js # antd 样式配置
│ 
├── dist # 生产环境代码
├── mock # 接口模拟
├── node_modules # node 依赖
├── public # 静态资源
├── src # 源码
│   ├── assets # 静态资源
│   ├── components # 公共组件
│   ├── layouts # 布局组件
│   ├── models # 数据模型
│   ├── pages # 页面组件
│   │   └── document.ejs # 文档模板
│   ├── services # 后台请求接口
│   ├── utils # 公共方法
│   │   └── request.js # 请求方法
│   ├── app.js # 运行时配置文件
│   ├── global.js # 可以在这里加入 polyfill
│   └── global.less # 全局样式文件
│ 
├── .editorconfig # EditorConfig 配置文件
├── .env # umi 环境变量
├── .eslintignore # ESLint 忽略文件
├── .eslintrc.js # ESLint 配置文件
├── .gitignore # Git 忽略文件
├── .prettierignore # Prettier 忽略文件
├── .prettierrc.js # Prettier 配置文件
├── .stylelintrc.js # StyleLint 配置文件
├── jsconfig.json # https://code.visualstudio.com/docs/languages/jsconfig
├── package.json # 定义 node 项目
└── README.md # 项目说明
```
