const path = require('path')
const signale = require('signale')
const inquirer = require('inquirer')
const config = require('../config')
const FileUtils = require('./utils/FileUtils')
const shell = require('./utils/ShellUtils')
const git = require('./utils/GitUtils')
const { SourceType } = require('../config')
const { fromTemplate, fromGit } = require('./from_remote_tmpl')
const createFromLocalTmpl = require('./from_local_tmpl')

module.exports = async function create(name, opt) {
  const res = await inquirer.prompt([{
    type: 'list',
    name: 'source',
    message: 'How to create?',
    choices: [
      { name: 'from template repository', value: SourceType.RemoteTemplate },
      { name: 'from built-in template', value: SourceType.LocalTemplate },
      { name: 'from custom git repository', value: SourceType.GitRepository },
      {
        name: 'custom',
        value: SourceType.Custom,
        disabled: 'in development'
      }
    ]
  }])
  switch (res.source) {
    case SourceType.RemoteTemplate:
      fromTemplate(name, opt)
      break;
    case SourceType.LocalTemplate:
      createFromLocalTmpl(name, opt)
      break;
    case SourceType.GitRepository:
      fromGit(name, opt)
      break
    default:
      signale.fatal('Params error!')
  }
}