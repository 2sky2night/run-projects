const { exec } = require('child_process')
const configs = require('./configs')

/**
 * @param {{path:string;runScript:string;name:string;noRun?:boolean}} config
 */
function runScript(config) {
  if (!!config.noRun) return
  const child = exec(
    config.runScript,
    {
      cwd: config.path // 子进程的当前工作目录
    },
    (err) => {
      // 回调在进程终止时调用输出
      if (err) {
        console.log(
          `[${config.name}] 启动失败:${new globalThis.Error(err).message}`
        )
      } else {
        console.log(`[${config.name}] 进程结束!`)
      }
    }
  )
  // 子进程成功的回调
  child.on('spawn', () => {
    console.log(`[${config.name}] 启动成功!`)
  })
  // 子进程有输出的回调
  child.stdout.on('data', (data) => {
    console.log(data)
  })
}

function main() {
  Object.values(configs).forEach((config) => runScript(config))
}

main()
