## 受控组件

1. 被 react 的 sate 接管的表单输入元素，称为受控组件
2. input、textarea、select
3. 通过传递 value 和 onChange 来控制受控组件

4. <input type='file' />是非受控组件

## form 中处理多个 Input 元素的时候

1. 给 input 元素添加 name 属性
2. name 属性可以通过 event.target.name 取得

## 受控组件的 value 为 undefined 或者为 null 的时候，将变为非受控组件
