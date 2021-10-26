## 打包

1. webpack 、rollup、Browserfy
2. 将文件引入并合并到一个单独的文件的过程

## 代码分割

## 动态 Import

import('./math').then(math=>{
console.log(math.add(16, 24));
})

## React.lazy

```jsx
const Component = React.lazy(() => import("./xxx.jsx"));

// Loadable
import loadable from "@loadable/component";

const OtherComponent = loadable(() => import("./OtherComponent"));

function MyComponent() {
  return (
    <div>
      <OtherComponent />
    </div>
  );
}
```

### Suspence

提供 fallback 属性，用来展示在组件加载过程中显示的内容

### Error boundaries

与 Suspence 互补，模块加载失败后，显示的内容

### 命名导出

React.lazy 不支持命名导出，只支持 default 导出，需要使用中间组价。

```jsx
export { Mycomponent as default } from "./Component";
```

## 基于路由的代码分割

能够均匀的分割代码包，而不影响用户体验

# 总结

1. 使用 React.lazy || Loadable 进行组件的懒加载
2. 使用 Suspence 的 fallback 属性，提供组件加载过程中显示的内容
3. 使用 errorboundaries 提供组件加载失败的反馈
