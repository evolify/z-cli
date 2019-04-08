const fs = require('fs-extra')
const path = require('path')
const shell = require('../../utils/ShellUtils')

module.exports = async function serve(entry){
  if(!fs.existsSync(path.resolve(__dirname, './node_modules/'))){
    await shell.run('yarn', __dirname)
  }
  await shell.run(`APP_ROOT=${entry} webpack-dev-server --config webpack.dev.js`, __dirname)
}