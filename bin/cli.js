#!/usr/bin/env node
const program = require('commander')
const path = require('path')
const pkg = require('../package.json')
const react = require('../scripts/react')
const create = require('../scripts/create')
const serve = require('../scripts/serve/react/serve')

program.command('create <name>')
  .description('Create a new project by z-cli')
  .action((name, cwd) => {
    create(name, cwd)
  })

program.command('serve <comp>')
  .description('Run an single component without any config. Now for react only.')
  .action((comp, cwd) => {
    serve(path.resolve(process.cwd(), comp))
  })

program.version(pkg.version)
  .parse(process.argv)