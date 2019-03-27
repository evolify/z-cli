const shell = require('./ShellUtils')

module.exports = {
  async init(projectDir) {
    await shell.run('git init', projectDir)
  },
  async clone(repoUrl, name, cwd) {
    await shell.run(`git clone ${repoUrl} ${name} --depth=1`, cwd)
  }
}