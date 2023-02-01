# 日常开发工具函数

### 打包说明 
```
在项目的package.json文件中新增一行命令:
“package”: “vue-cli-service build --target lib ./src/package/index.js --name lrz-ui --dest lrz-ui”

– – target lib 指定打包的目录
– – name 打包后的文件名字
– – dest 打包后的文件夹的名称

npm login
npm publish   
```
### 进入打包后的文件初始化一个pachage.json
```
npm init -y
```
# 使用

### 使用说明 
```
安装：npm i utilt01

引入：import { debounce } from 'utilt01';
```
### 已有方法
```
·debounce //防抖
```