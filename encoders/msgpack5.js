'use strict';

const msgpack = require('msgpack5')();

exports.name = 'msgpack5';

exports.encode = msgpack.encode;

exports.decode = msgpack.decode;
