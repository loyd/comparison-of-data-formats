'use strict';

const snappy = require('snappy');

exports.name = 'snappy';

exports.compress = snappy.compressSync;

exports.decompress = snappy.uncompressSync;
