#!/usr/bin/env node
const program = require('commander')
const pkg = require('../package.json')
const react = require('../scripts/react')
const create = require('../scripts/create')

program.command('react <name>')
  .description('Create a new react project by web-cli')
  .option('-f, --force', 'Overwrite project directory if exist')
  .action((name, cmd) => {
    react.create(name, cmd)
  })

program.command('create <name>')
  .action((name, cwd) => {
    create(name, cwd)
  })

program.version(pkg.version)
  .parse(process.argv)