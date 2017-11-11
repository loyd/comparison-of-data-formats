'use strict';

const zlib = require('zlib');

module.exports = (level) => ({
    name: `deflate (${level})`,

    compress: data => zlib.deflateSync(data, {level}),

    decompress: zlib.inflateSync
});
