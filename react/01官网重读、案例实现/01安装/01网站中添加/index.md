# 01 网站中添加总结

## 正常

### 开发-三步走

1. 创建 容器
2. 添加 react script

   ```html
   <script
     src="https://unpkg.com/react@16/umd/react.development.js"
     crossorigin
   ></script>
   <script
     src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
     crossorigin
   ></script>
   <script src="like_button.js"></script>
   ```

3. 创建一个 React 组件

### 生产-两步

1. 将 script 中的 development 换成 product.min
2. 使用 terser 压缩 js 代码

## jsx-三步走

1. 安装 node
2. npm init -y && npm install babel-cli@6 babel-preset-react-app@3
3. npx babel --watch src --out-dir . --presets react-app/prod
