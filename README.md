Dealing with the issue of precision loss in JavaScript decimal calculations

1.install

```bash
npm i -s math-float-deal
```

2.import

```bash
import { plus, minus, multiply, divide } from "math-float-deal"
```

3.use

-

```js
console.log(0.13333 + 0.22); // 0.35333000000000003
console.log(plus(0.13333, 0.22)); // 0.35333
```

-

```js
console.log(0.333 - 0.22); // 0.11300000000000002
console.log(minus(0.333, 0.22)); // 0.113
```

-

```js
console.log(0.3 * 0.17); // 0.051000000000000004
console.log(multiply(0.3, 0.17)); // 0.051
```

/

```js
console.log(0.333 / 0.12); // 2.7750000000000004
console.log(divide(0.333, 0.12)); // 2.775
```
