# Some intermediate results

```
┌──────────────┬───────────┬───────────┬───────────┬───────────┐
│              │   none    │   gzip    │    lz4    │  snappy   │
├──────────────┼───────────┼───────────┼───────────┼───────────┤
│ json         │ 339 ops/s │  90 ops/s │ 203 ops/s │ 244 ops/s │
│              │    233 kB │   79.3 kB │    136 kB │    135 kB │
├──────────────┼───────────┼───────────┼───────────┼───────────┤
│ pson         │  51 ops/s │  38 ops/s │  46 ops/s │  50 ops/s │
│              │    142 kB │   75.1 kB │    124 kB │    125 kB │
├──────────────┼───────────┼───────────┼───────────┼───────────┤
│ avsc         │ 441 ops/s │ 123 ops/s │ 246 ops/s │ 396 ops/s │
│              │    118 kB │   70.5 kB │    114 kB │    115 kB │
├──────────────┼───────────┼───────────┼───────────┼───────────┤
│ msgpack5     │  30 ops/s │  23 ops/s │  30 ops/s │  29 ops/s │
│              │    193 kB │   78.1 kB │    131 kB │    127 kB │
├──────────────┼───────────┼───────────┼───────────┼───────────┤
│ msgpack-lite │  84 ops/s │  50 ops/s │  61 ops/s │  71 ops/s │
│              │    193 kB │   78.1 kB │    131 kB │    127 kB │
└──────────────┴───────────┴───────────┴───────────┴───────────┘
```
