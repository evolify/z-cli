const local_tmpl = require('./local_tmpl')
const remote_tmpl = require('./remote_tmpl')

module.exports = {
  excludes: [
    'yarn.lock',
    'package-lock.json',
    'node_modules',
    'build',
    'DS_Store'
  ],
  SourceType: Object.freeze({
    RemoteTemplate: 1,
    LocalTemplate: 2,
    Custom: 3,
    GitRepository: 4
  }),
  local_tmpl,
  remote_tmpl,
  ConfigurationGist: '7cd821892c5adc1599324efda73ab995'
}