# 何时使用

1. 当一个组件树中，很多不同层级的组件需要访问同一个数据的时候。

# 使用前考虑

1. 如果只是某一个组件需要，那么可能把这个组件传递下去更适合。

# api

1. React.createContext
2. Context.Provider
3. Context.Consumer
4. Context.displayName
5. Class.contextType
6. useContxt

# 子组件更新 Context 的值

1. 传递更新函数过去
2. 子组件使用更新函数进行更新

# 使用多个 Context

1. 放到不同的层级即可
