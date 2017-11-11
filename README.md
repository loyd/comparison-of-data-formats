# Comparison of data formats

* Uses a large realistic record.
* Measures the performance of `decode(decompress(compress(encode(data))))`.
* Measures the size of `compress(encode(data))`.

## How to run?

```bash
$ npm install
$ node test.js [n=20]
```

## Results

```
┌──────────────┬───────────┬───────────┬─────────────┬───────────┬───────────┐
│              │   none    │ gzip (6)  │ deflate (6) │    lz4    │  snappy   │
├──────────────┼───────────┼───────────┼─────────────┼───────────┼───────────┤
│ json         │ 346 ops/s │  89 ops/s │    90 ops/s │ 197 ops/s │ 240 ops/s │
│              │    233 kB │   79.3 kB │     79.3 kB │    136 kB │    135 kB │
├──────────────┼───────────┼───────────┼─────────────┼───────────┼───────────┤
│ pson         │  50 ops/s │  37 ops/s │    38 ops/s │  45 ops/s │  48 ops/s │
│              │    142 kB │   75.1 kB │     75.1 kB │    124 kB │    123 kB │
├──────────────┼───────────┼───────────┼─────────────┼───────────┼───────────┤
│ avsc         │ 432 ops/s │ 120 ops/s │   123 ops/s │ 243 ops/s │ 381 ops/s │
│              │    117 kB │   70.6 kB │     70.5 kB │    114 kB │    117 kB │
├──────────────┼───────────┼───────────┼─────────────┼───────────┼───────────┤
│ msgpack5     │  29 ops/s │  25 ops/s │    25 ops/s │  29 ops/s │  30 ops/s │
│              │    193 kB │     78 kB │       78 kB │    131 kB │    127 kB │
├──────────────┼───────────┼───────────┼─────────────┼───────────┼───────────┤
│ msgpack-lite │  84 ops/s │  51 ops/s │    52 ops/s │  66 ops/s │  79 ops/s │
│              │    193 kB │     78 kB │       78 kB │    131 kB │    127 kB │
├──────────────┼───────────┼───────────┼─────────────┼───────────┼───────────┤
│ protobufjs   │ 425 ops/s │ 119 ops/s │   123 ops/s │ 206 ops/s │ 396 ops/s │
│              │    122 kB │     73 kB │     72.9 kB │    119 kB │    120 kB │
└──────────────┴───────────┴───────────┴─────────────┴───────────┴───────────┘
```
