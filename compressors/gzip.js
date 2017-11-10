'use strict';

const zlib = require('zlib');

exports.name = 'gzip';

exports.compress = zlib.deflateSync;

exports.decompress = zlib.inflateSync;
