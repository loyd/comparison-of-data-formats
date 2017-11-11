'use strict';

const assert = require('assert');
const path = require('path');
const Benchmark = require('benchmark');
const prettyBytes = require('pretty-bytes');
const Table = require('cli-table2');
const chalk = require('chalk');

const generate = require('./generate');

const schemas = {
    avro: path.resolve('./schemas/avro.json'),
    proto: path.resolve('./schemas/proto.proto')
};

const encoders = [
    require('./encoders/json'),
    require('./encoders/pson'),
    require('./encoders/avsc')(schemas.avro),
    require('./encoders/msgpack5'),
    require('./encoders/msgpack-lite'),
    require('./encoders/protobufjs')(schemas.proto)
];

const compressors = [
    require('./compressors/none'),
    require('./compressors/gzip')(6),
    require('./compressors/deflate')(6),
    require('./compressors/lz4'),
    require('./compressors/snappy')
];

function main(n) {
    const data = generate(n);
    const suite = new Benchmark.Suite;
    const info = [];

    let minSizeTitle = null;
    let [minSize, maxSize] = [Infinity, 0];
    let [minPerf, maxPerf] = [Infinity, 0];

    for (const encoder of encoders) {
        const items = [];

        for (const compressor of compressors) {
            const title = `${encoder.name} + ${compressor.name}`;

            const to = data => compressor.compress(encoder.encode(data));
            const from = data => encoder.decode(compressor.decompress(data));

            console.log(`Checking ${title}...`);

            const encoded = to(data);
            const actual = unify(from(encoded));

            assert.deepEqual(actual, data);

            suite.add(title, () => from(to(data)));

            const size = encoded.length;

            items.push({
                compressor: compressor.name,
                size: size
            });

            if (size < minSize) {
                minSizeTitle = title;
                minSize = size;
            }

            maxSize = Math.max(size, maxSize);
        }

        info.push({
            encoder: encoder.name,
            items,
        });
    }

    console.log('Benchmarking...');

    suite
        .on('cycle', event => {
            const [encoder, compressor] = event.target.name.split(' + ');

            const item = info
                .find(item => item.encoder === encoder)
                .items
                .find(item => item.compressor === compressor);

            const perf = item.perf = event.target.hz;

            minPerf = Math.min(perf, minPerf);
            maxPerf = Math.max(perf, maxPerf);

            console.log(String(event.target), '\t', `${prettyBytes(item.size)}`);
        })
        .on('complete', () => {
            const fastest = suite.filter('fastest').map('name');
            const smallest = minSizeTitle;

            console.log(`Fastest is ${fastest}.`);
            console.log(`Smallest is ${smallest}.`)
        })
        .run();

    const table = new Table({
        head: [''].concat(compressors.map(c => ({
            hAlign: 'center',
            content: c.name
        })))
    });

    for (const item of info) {
        table.push({
            [item.encoder]: item.items.map(i => {
                const perf = i.perf.toFixed(0) + ' ops/s';
                const size = prettyBytes(i.size);

                const cPerf = colorize(i.perf, minPerf, maxPerf, false)(perf);
                const cSize = colorize(i.size, minSize, maxSize, true)(size);

                return {
                    hAlign: 'right',
                    content: `${cPerf}\n${cSize}`
                };
            })
        });
    }

    console.log();
    console.log(String(table));
}

function unify(obj) {
    return JSON.parse(JSON.stringify(clean(obj)));
}

function clean(obj) {
    for (const name in obj) {
        if (!obj.hasOwnProperty(name)) {
            continue;
        }

        if (obj[name] === null) {
            delete obj[name];
        } else if (typeof obj[name] === 'object') {
            clean(obj[name]);
        }
    }

    return obj;
}

const colors = (
    'red orange ' +
    'white '.repeat(5) +
    'limegreen green'
).split(' ');

function colorize(val, min, max, invert) {
    let i = Math.floor((val - min) / (max - min + 1) * colors.length);
    i = invert ? colors.length - i - 1 : i;

    return chalk.keyword(colors[i]);
}

main(parseInt(process.argv[2], 10) || 20);
