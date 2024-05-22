<h1 style="text-align:center">🚀Run Projects</h1>

# 是什么？

通过命令行快速启动多个项目

# 为什么要？

最近在搞毕设，毕设由多个项目组成，每次本地调试都要打开几个终端或者编译器，太麻烦了，所以就在想能不能通过`Node.js`的能力实现一键启动多个项目。本质上就是开启多个子进程执行对应项目的启动脚本 🤣。

# 开始

## 配置

在 configs.js 中配置项目路径以及启动脚本。

1. 定义一个项目的启动配置

```js
// configs.js
const project_fontend = {
  path: 'D:\\code\\project', // path：代表了项目的根目录，为字符型，需要绝对路径
  runScript: 'npm run start', // runScript：代表了项目的启动命令，其值为字符型
  name: '前端项目', // name：代表了项目的名称，其值为字符型
  noRun: false // noRun：代表了是否运行此项目，其值为布尔值
}
```

2. 将配置项暴露出去

```js
// configs.js
const project_fontend = {
  path: 'D:\\code\\project',
  runScript: 'npm run start',
  name: '前端项目',
  noRun: false
}
module.exports = {
  project_fontend
}
```

这是一个简单示例：

```js
// configs.js
/** 前端C端 */
const fontend_client = {
  path: 'your project path',
  runScript: 'npm run start',
  name: '前端前台'
  // noRun: true // 不运行此脚本
}

/** 前端B端 */
const fontend_admin = {
  path: 'your project path',
  runScript: 'npm run start:dev',
  name: '前端后台'
  // noRun: true // 不运行此脚本
}

/** 接口服务器 */
const backend_server = {
  path: 'your project path',
  runScript: 'npm run start:dev',
  name: '接口服务器'
}

/** 资源服务器 */
const backend_static_server = {
  path: 'your project path',
  runScript: 'npm run start',
  name: '资源服务器'
}

module.exports = {
  /** 前端C端 */
  fontend_client,
  /** 前端B端 */
  fontend_admin,
  /** 接口服务器 */
  backend_server,
  /** 资源服务器 */
  backend_static_server
}
```

## 启动

在终端上运行本项目的启动脚本

```shell
npm run start
```

# 已知 bug

1. 主进程的终端输出有上限？输出太多主进程好像会终止，导致所有子进程被终止。

   在 Node.js 中，控制台输出的最大缓冲区大小由 process.stdout 的 writableHighWaterMark 属性定义。默认情况下，这个值是 16KB。这意味着在控制台输出中，当缓冲数据达到 16KB 时，Node.js 将尝试将数据写入到输出流中。
