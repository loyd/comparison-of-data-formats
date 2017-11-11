'use strict';

const zlib = require('zlib');

module.exports = level => ({
    name: `gzip (${level})`,

    compress: data => zlib.gzipSync(data, {level}),

    decompress: zlib.gunzipSync
});
