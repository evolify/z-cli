const path = require('path')
const signale = require('signale')
const {Signale} = require('signale')
const inquirer = require('inquirer')
const config = require('../config')
const FileUtils = require('./utils/FileUtils')
const shell = require('./utils/ShellUtils')
const git = require('./utils/GitUtils')
const {templateRepos} = require('../utils/gist')

async function create(name, tmpl){
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

async function fromTemplate(name, opt){
  const interactive = new Signale({interactive: true, scope: 'load templates'})
  interactive.await('loading...')
  const tmpls = await templateRepos()
  interactive.success('done!')
  const {tmpl} = await inquirer.prompt([{
    type: 'list',
    name: 'tmpl',
    message: 'Select a remote template:',
    choices: tmpls
  }])

  return await create(name, tmpl)
}

async function fromGit(name, opt){
  const {tmpl} = await inquirer.prompt([{
    type: 'input',
    name: 'tmpl',
    message: 'Input git repository url:'
  }])

  return await create(name, tmpl)
}

module.exports = {
  fromTemplate,
  fromGit
}