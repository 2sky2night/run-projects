/** 前端C端 */
const fontend_client = {
  path: 'D:\\毕设\\code\\go_study_client',
  runScript: 'npm run start',
  name: '前端前台'
}

/** 前端B端 */
const fontend_admin = {
  path: 'D:\\毕设\\code\\go_study_admin',
  runScript: 'npm run start:dev',
  name: '前端后台',
  noRun: true // 不运行此脚本
}

/** 接口服务器 */
const backend_server = {
  path: 'D:\\毕设\\code\\go_study_server',
  runScript: 'npm run start:dev',
  name: '接口服务器'
}

/** 资源服务器 */
const backend_static_server = {
  path: 'D:\\毕设\\code\\static_resource_server',
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
