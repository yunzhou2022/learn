## react 哲学

### 从设计稿开始

1. 将设计好的 ui 划分组件层级

   1. 根据 json 划分，将 ui 与数据模型一一对应
   2. 根据设计稿划分、单一功能原则
   3. 命名划分好的组件
   4. 划分好组件层级

2. 编写静态 ui 页面

   1. 通过 props 传递数据
   2. 不应该使用 state，state 表示随时间的变化，应该仅在交互的时候使用。

3. 寻找最少且完整的 state

   1. 不是从父组件传递过来
   2. 不随时间变化儿变化
   3. 不能根据其他 state 或者 props 计算出来

4. 寻找 state 的放置位置

   1. 找到根据中这个 state 渲染的所有组件
   2. 找到他们的共有组件

5. 添加反向数据流
   根据 callback
