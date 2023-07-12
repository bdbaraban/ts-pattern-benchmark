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

<table>
  <thead>
    <tr>
      <th>name</th><th>ops</th><th>margin</th><th>percentSlower</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>.exhaustive()</td><td>1440678</td><td>0.77</td><td>99.86</td>
    </tr><tr>
      <td>.otherwise()</td><td>1482380</td><td>0.67</td><td>99.86</td>
    </tr><tr>
      <td>.run()</td><td>1313796</td><td>0.22</td><td>99.87</td>
    </tr><tr>
      <td>if/else</td><td>1039743389</td><td>0.14</td><td>0</td>
    </tr><tr>
      <td>switch</td><td>1033490278</td><td>0.4</td><td>0.6</td>
    </tr><tr>
      <td>ternary</td><td>1021137268</td><td>0.42</td><td>1.79</td>
    </tr>
  </tbody>
</table>

![ts-pattern-benchmark](https://github.com/bdbaraban/ts-pattern-benchmark/assets/34765317/8ddfd57f-123b-45f7-bbff-fb2968eb359b)
