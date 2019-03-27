const Creator = require('./Creator')
exports.create = name => new Creator(name).create()