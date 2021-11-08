# 高级指引

## 无障碍

1. 使用键盘来完成页面的访问。
2. 使用 onBlur 事件来代替在 window 中添加 click 事件的监听来处理点击弹窗外进行关闭窗体。

## 代码分割

1. React.lazy 或者 loadable 进行组件的懒加载。
2. 使用 Suspense 的 fallback 属性，提供组件加载过程中显示的内容。
3. 使用 errorBoundaries 提供组件加载失败的反馈

## 错误边界

1. 目前了解只有 Class 组件能作为错误边界的组件
2. 组件的 getDerivedStateFromError 更新 State，使下一次渲染能够显示降级后的 UI，返回值为新的 State， 参数为 error
3. 未捕获的错误，不会显示
4. 只能捕获 render 中 throw 的错误

## context

1. 当一些属性在一颗组件树中不同的层级中需要共用的时候，可以使用 context 进行传递。

步骤：

1. React.createContext();
1. <Context.Provider value={xx} />
1. <Context.Consumer >
1. Class.contextType

## refs 转发

- 导出组件前，使用 React.forwardRef 函数包裹需要进行转发的组件
- 使用不是 ref、key 的 prop 进行 ref 的传递

## Fragments

## 高阶组件

组件： props =》 Ui
高阶组件： 组件=》另一个组件

## 与第三方库协同

1. 带有 dom 操作的库

创建一个 react 不会更新的结点，交给别的 dom 库进行操作

2. 视图库

使用 react 提供点 api 进行集成

3. model 库

使用高阶函数，封装 model 库，将结果放到 props 中

## 深入 JSX

必须大写

## 性能优化

1. 使用生产版本
2. 不可变数据
3. shouldComponentUpdate
4. 虚拟化长列表
5. 使用开发者工具中的分析器对组件进行分析
6. 使用 Chrome Performance 标签分析组件

## Portals

1. react.createPortal(cmp, el)
2. 事件冒泡

## Profiler

## 不使用 ES6

## 不使用 JSX

## 协调

## Refs & DOM

## Render Props

## 静态类型检查

## 严格模式

## 使用 PropTypes 类型检查

## 非受控组件

## Web Components
