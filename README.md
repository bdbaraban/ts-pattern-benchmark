# Usage

```
npm install
npm run test
```

# Results

- [ts-pattern](https://github.com/gvergnaud/ts-pattern) v5.0.1
- [TypeScript](https://github.com/microsoft/TypeScript) v5.1.6

```
Running "ts-pattern-benchmark" suite...
Progress: 100%

  .exhaustive():
    1 440 678 ops/s, ±0.77%       | 99.86% slower

  .otherwise():
    1 482 380 ops/s, ±0.67%       | 99.86% slower

  .run():
    1 313 796 ops/s, ±0.22%       | slowest, 99.87% slower

  if/else:
    1 039 743 389 ops/s, ±0.14%   | fastest

  switch:
    1 033 490 278 ops/s, ±0.40%   | 0.6% slower

  ternary:
    1 021 137 268 ops/s, ±0.42%   | 1.79% slower

Finished 6 cases!
  Fastest: if/else
  Slowest: .run()
```

![ts-pattern-benchmark](https://github.com/bdbaraban/ts-pattern-benchmark/assets/34765317/a2fc6292-1dba-433a-9bc7-72f2af9b889a)
