const path = require('path')
const signale = require('signale')
const inquirer = require('inquirer')
const FileUtils = require('./utils/FileUtils')
const shell = require('./utils/ShellUtils')
const git = require('./utils/GitUtils')
const { local_tmpl } = require('../config')

module.exports = async function create(name, opt) {
  const {tmpl} = await inquirer.prompt([{
    type: 'list',
    name: 'tmpl',
    message: 'Select a remote template:',
    choices: local_tmpl,
  }])

  if(!tmpl){
    return signale.fatal('Unknown template.')
  }

  const cwd = path.resolve(process.cwd(), name)

  signale.success('initializing project directory...')
  await FileUtils.initDir(cwd)

  signale.success('initializing git...')
  await git.init(cwd)

  signale.success('generating...')
  await FileUtils.fromTemplate(tmpl, cwd)

  signale.success('installing dependencies...')
  await shell.run('yarn', cwd)

  signale.success(`Successfully create ${this.name} by web-cli.`)
}