'use strict';

const assert = require('assert');
const Benchmark = require('benchmark');
const prettyBytes = require('pretty-bytes');
const Table = require('cli-table2');

const generate = require('./generate');

const encoders = [
    require('./encoders/json'),
    require('./encoders/avsc'),
];

const compressors = [
    require('./compressors/none'),
    require('./compressors/gzip'),
    require('./compressors/lz4'),
    require('./compressors/snappy'),
];

const data = generate(10);
const suite = new Benchmark.Suite;
const info = [];
const minSize = {title: null, size: Infinity};

for (const encoder of encoders) {
    const items = [];

    for (const compressor of compressors) {
        const title = `${encoder.name} + ${compressor.name}`;

        const to = data => compressor.compress(encoder.encode(data));
        const from = data => encoder.decode(compressor.decompress(data));

        console.log(`Checking ${title}...`);

        const encoded = to(data);
        const actual = clean(from(encoded));

        assert.deepEqual(actual, data);

        suite.add(title, () => from(to(data)));

        items.push({
            compressor: compressor.name,
            size: encoded.length
        });

        if (encoded.length < minSize.size) {
            minSize.title = title;
            minSize.size = encoded.length;
        }
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

        item.perf = event.target.hz;

        console.log(String(event.target), '\t', `${prettyBytes(item.size)}`);
    })
    .on('complete', () => {
        const fastest = suite.filter('fastest').map('name');
        const smallest = minSize.title;

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

            return {
                hAlign: 'right',
                content: `${perf}\n${size}`
            };
        })
    });
}

console.log();
console.log(String(table));

function clean(obj) {
    for (const name in obj) {
        if (obj[name] === null) {
            delete obj[name];
        } else if (typeof obj[name] === 'object') {
            clean(obj[name]);
        }
    }

    return obj;
}
