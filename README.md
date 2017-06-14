# Framework7 Vue + Webpack App Template

## 模仿某app进行开发，顺便为本公司打个广告[趣丸](http://52tt.com/)

## 适合`移动`开发

A full-featured Framework7 + Vue + Webpack setup with hot-reload & css extraction. Based on [Vue Webpack Boilerplate](https://github.com/vuejs-templates/webpack)

[framework7和vue结合](http://vue.framework7.cn/)

## 使用方法

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## 使用技术栈

- [framwork7](http://framework7.cn/Index/get_started.html) 完美的HTML框架


- [vue](https://cn.vuejs.org/) 渐进式javascript框架


- [less](http://lesscss.cn/) 一门css预处理器语言


- [webpack](http://webpack.github.io/) 模块加载器兼打包工具


- [framework7-icons](http://icons.framework7.cn/) framework7 自带图标


- [underscore](http://www.css88.com/doc/underscore/) javascript实用库


- [weinre远程web检查器 ](https://github.com/reng99/weinre) Web Inspector Remote

> 简单介绍通过node使用weinre--1.(sudo)npm install -g weinre  2.weinre --boundHost -all- (默认是8080端口，注意项目的端口不能够是8080) 3.引入相应的javascript代码标签到html页面中  [详细](https://github.com/reng99/weinre)

> weinre的优缺点

***优点*** 同时支持IOS设备和Android设备，并且能直接对手机上的页面进行调试，无需安装客户端。

***缺点*** 需要对HTML页面有改动的权限，因为是远程链接的原因，可能网络链接速度（深有体会）会影响调试的响应



## 题外话

- 移动端预览psd或者图片（有利于设计人员）--使用airReview（腾讯开发）
1).访问airReview 
2).单击“临时预览”按钮（若是长期预览，输入项目名称单击“确认”按钮）。
3).将psd或者jpg文件拖拽进airReview。
4).用手机扫描二维码。
