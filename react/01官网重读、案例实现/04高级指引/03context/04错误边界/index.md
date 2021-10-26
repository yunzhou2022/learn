## 错误边界

1. 只能由 class 组件来作为错误边界的组件

   - 组件的 getDerivedStateFromError 更新 State，使下一次渲染能够显示降级后的 UI， 返回值为 State， 参数为 （error）
   - 组件中的 componentDidCatch，参数为（error， errorInfo），可以在这里，将错误细腻传递给服务地段

2. 未捕获的错误，不会显示

## 不能捕获的错误

1. 不会捕获事件处理函数中的错误，只会捕获 UI 渲染时的错误
2. 异步函数中的错误
3. 服务端渲染
4. 自身抛出的错误
