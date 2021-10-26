# 转发到组件

1. 组件使用 React.forwardRef 函数进行包裹，然后，组件的第二个参数就是 ref 了。

# 高阶组件中转发 refs

1. 高阶组件 return 的时候，使用 React.forwardRef 进行包裹 return 的组件，组件内部,可以把 ref 作为常规的水星传递给子组件

# devtools 中显示自定义名称

1. 包裹匿名函数，显示 ForwardRef,
2. 包裹具名函数，显示 ForwardRef(函数名)
3. 包裹设置了 displayName 的函数，显示 ForwardRef(dispalayName);
