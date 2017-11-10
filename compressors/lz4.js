'use strict';

const lz4 = require('lz4');

exports.name = 'lz4';

exports.compress = lz4.encode;

exports.decompress = lz4.decode;
