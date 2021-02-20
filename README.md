TypeScript React MobX Cascade Change Demo
==========================

https://stackoverflow.com/questions/50746872/mobx-how-to-change-an-observable-value-in-response-to-another-values-change

应该使用`reaction`，因为`observe`是底层函数，我们应该尽量避免使用：
https://mobx.js.org/intercept-and-observe.html

```
npm install
npm run demo
```
