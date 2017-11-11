'use strict';

const protobuf = require('protobufjs');

module.exports = pathToProto => {
    const root = protobuf.loadSync(pathToProto);

    const Result = root.lookupType('Array');

    return {
        name: 'protobufjs',

        encode: data => Result.encode(Result.fromObject({items: data})).finish(),

        decode: data => Result.decode(data).items
    };
};
