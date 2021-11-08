解释: 参数为组件，返回值为新组件的函数

组件： props => UI
高阶组件： 组件 => 组件

## 解决横切关注点问题，逻辑复用

```jsx
function selectData(action){
    useEffect(()=>(dispatch(action),[dispatch, action]);
    const data =
    return

}
const ComponentWithData = withData(Component, selectData)
```

## 不要改变原始组件，使用组合

```jsx
function WithXX(Component){
    return funtion(props){
        return <Component {...props}>
    }
}
```

## 将不想关的 props 传递给被包裹的组件

写法同上

## 最大化可组合性

## 注意

1. 不要在 render 中调用 HOC
2. 要复制静态方法
3. refs 不会被传递
