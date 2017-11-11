'use strict';

const {Type} = require('avsc');

module.exports = pathToSchemas => {
    const schemas = require(pathToSchemas);

    const registry = {};
    let Result;

    for (const schema of schemas) {
        const T = Type.forSchema(schema, {registry});
        Result = registry[T.name] = T;
    }

    return {
        name: 'avsc',

        encode: data => Result.toBuffer(data),

        decode: data => Result.fromBuffer(data)
    };
};
