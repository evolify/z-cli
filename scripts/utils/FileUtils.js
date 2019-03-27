const fs = require('fs-extra')
const inquirer = require('inquirer')
const signale = require('signale')
const config = require('../../config')

const { prompt } = inquirer

module.exports = {
  async initDir(path) {
    if (fs.existsSync(path)) {
      const {overwrite} = await prompt({
        type: 'confirm',
        name: 'overwrite',
        message: 'Project directory not empty, overwrite?',
        default: true
      })
      if (overwrite) {
        fs.emptyDirSync(path)
        return
      }
      signale.fatal('exit!')
      process.exit()
    }
    fs.mkdirSync(path)
  },
  async fromTemplate(templateDir, projectDir) {
    if (!fs.existsSync(templateDir)) {
      signale.fatal('template not exist!')
      process.exit()
    }
    await fs.copy(templateDir, projectDir, {
      filter: src => {
        return !config.excludes.some(t => src.endsWith(t))
      }
    })
  },
}