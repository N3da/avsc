/* jshint browserify: true */

'use strict';

/**
 * Optional entry point for browser builds.
 *
 * To use it: `require('avsc/etc/browser/avsc-protocols')`.
 *
 */

var protocols = require('../../lib/protocols'),
    files = require('./lib/files'),
    schemas = require('../../lib/schemas'),
    types = require('../../lib/types');


function parse(schema, opts) {
  var obj = files.load(schema);
  return obj.protocol ?
    protocols.createProtocol(obj, opts) :
    types.createType(obj, opts);
}


module.exports = {
  Protocol: protocols.Protocol,
  Type: types.Type,
  assemble: schemas.assemble,
  parse: parse,
  types: types.builtins
};
