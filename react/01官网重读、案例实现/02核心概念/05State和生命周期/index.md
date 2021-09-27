## 转化为 class 组件

1. 创建一个 class，继承 React.Component
2. 添加一个空的 render 方法
3. 将 function 函数体内的东西放到 render 中
4. render 中的 props 替换为 this.props
5. 删除剩余的 function 部分

## 将 props 转换为内部状态

1. this.props 替换为 this.state
2. 添加一个 class 构造函数，然后给 state 赋初值
3. 删除组件使用地方的属性传递

## 添加生命周期函数

1. 生命周期内采用声明式方式调用别的功能函数

## state 正确使用

1. 只能在构造函数中直接赋值
2. 可以传递函数来获取 prestate，preprops
3.
