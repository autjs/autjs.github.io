## Ezdo.use 

ezdo.use 将安装模块到 ezdo 上，在使用时，可直接调用 ezdo.xxx 

## 模块规则

- 必须包含一个 name 属性

## 示例

```js
let module1 = { name: 'module1' }
let module2 = new function() { this.name = 'module2' }
let module3 = new class A { constructor() { this.name = 'module3'}}
// ... 可以是包含 name 属性的任意对象
```

## 安装

```js
import obm from 'ezdo'
obm.use(module1)
obm.use(module2)
obm.use(module3)
```

## 使用

```js
import obm from 'ezdo'

console.log(obm.modue1.name)
console.log(obm.modue2.name)
console.log(obm.modue3.name)
```

## 相关

- ezdo
- ezdo-tree
- ezdo-router
- create-ezdo-app