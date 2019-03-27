const execa = require('execa')

module.exports = {
  run: (cmd, cwd)=>new Promise((resolve,reject)=>{
    execa.shell(cmd, {cwd})
    .on('close', resolve)
    .on('error',()=>process.exit())
    .stdout.pipe(process.stdout)
  })
}