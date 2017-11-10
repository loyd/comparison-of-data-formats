'use strict';

const msgpack = require('msgpack-lite');

exports.name = 'msgpack-lite';

exports.encode = msgpack.encode;

exports.decode = msgpack.decode;
