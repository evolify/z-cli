const path = require('path')
const signale = require('signale')
const config = require('../../config')
const FileUtils = require('../utils/FileUtils')
const shell = require('../utils/ShellUtils')
const git = require('../utils/GitUtils')

module.exports = class Creator{
  constructor(name){
    this.cwd = path.resolve(process.cwd(), name)
    this.name = name
  }

  async create(){
    signale.success('initializing project directory...')
    await FileUtils.initDir(this.cwd)

    signale.success('initializing git...')
    await git.init(this.cwd)

    signale.success('generating...')
    await FileUtils.fromTemplate(config.template.react, this.cwd)

    signale.success('installing dependencies...')
    await shell.run('yarn', this.cwd)

    signale.success(`Successfully create ${this.name} by web-cli.`)
  }
}
