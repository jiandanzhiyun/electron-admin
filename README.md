# electron-admin

> An electron-vue project

#### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production 打包桌面 不要放在中文目录下，否则打包失败
npm run build
# 如果继续打包失败可以重新install 下面2行
npm install -g electron-builder  npm install -g electron-package
#访问编码问题 
electron 是默认的gb2312 所以我们需要更改一下配置 首先更改电脑的配置 具体的可以百度 或者留言  然后再
 package.json中 script 下添加   "start": "chcp 65001 && npm run dev"

# 可动态配置域名 使用方法  打开mian/index.js  取消注释   取消main.js 注释 使用nodejs 读取本地json文件

#ps 如果此框架帮助到你，或者对你有用，请star  
Thank you
