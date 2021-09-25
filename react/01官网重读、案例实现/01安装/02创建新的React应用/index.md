# 创建新的 React 应用

## cra

命令 **npx create-react-app my_app** 直接创建好

## gatsby

类似于 cra

## diy

1. 初始化项目
   1. npm init -y
   2. git init
2. 创建 public 文件夹与 src 文件夹
3. 创建 index.html，引入打包后的 js 文件
4. 引入 babel 来预编译 js 和 jsx，让我们在使用的时候，可以写 jsx，与新特性的 js 代码
5. 引入 webpack 打包代码
   1. 引入 webpack-dev-server
   2. 引入 hot-module-replacement

### 关键工具

1. npm：包管理工具、方便使用各种包
2. babel：编译工具，编译代码，编写新特性代码，运行在老的浏览器中
3. webpack：打包工具，编写模块化的组件，并将他们组合成 packages，优化加载时间
