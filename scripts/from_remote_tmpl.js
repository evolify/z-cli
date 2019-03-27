const path = require('path')
const signale = require('signale')
const inquirer = require('inquirer')
const config = require('../config')
const FileUtils = require('./utils/FileUtils')
const shell = require('./utils/ShellUtils')
const git = require('./utils/GitUtils')
const {remote_tmpl} = require('../config')

module.exports = async function create(name, opt){
  const {tmpl} = await inquirer.prompt([{
    type: 'list',
    name: 'tmpl',
    message: 'Select a remote template:',
    choices: remote_tmpl,
  }])

  if(!tmpl){
    return signale.fatal('Unknown template.')
  }

  const cwd = path.resolve(process.cwd(), name)

  signale.success('initializing project directory...')
  await FileUtils.initDir(cwd)

  signale.success('generating...')
  await git.clone(tmpl, name, process.cwd())

  signale.success('installing dependencies...')
  await shell.run('yarn', cwd)

  signale.success(`Successfully create ${this.name} by web-cli.`)
}