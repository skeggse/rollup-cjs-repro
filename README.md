rollup-cjs-repro
================

### Overview

See bug report.

#### Steps to reproduce

```sh
$ npm run broken && echo 'that command should fail'

> rollup-cjs-repro@1.0.0 broken /src/rollup-cjs-repro
> BROKEN=1 npm run working


> rollup-cjs-repro@1.0.0 working /src/rollup-cjs-repro
> rollup -c -o out.js


src/index.js → out.js...
that command should fail
```

The behavior with a fixed config:

```sh
$ npm run working && echo 'that command does not fail'

> rollup-cjs-repro@1.0.0 working /src/rollup-cjs-repro
> rollup -c -o out.js


src/index.js → out.js...
created out.js in 45ms
that command does not fail
```
