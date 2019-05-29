TypeScript Webpack Tooltipster Outside Click to Close Demo
=======================================

在tooltip外click来关闭tooltipster

需要注意：

1. `body`的height一定要设置大一点，比如`100%`，否则在tooltip外`click`，实际上不生效。这个问题卡了我几个小时。
2. tooltip参数
  - `interactive`：可以点击tooltip内部的链接、表单等
  - `trigger`：如何触发弹出，这里需要`triggerClose`设为`click`

```
npm install
npm run demo
```
