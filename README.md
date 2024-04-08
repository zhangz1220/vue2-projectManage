# project_manage

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

##### 免费的api
```
https://api.github.com/search/users?q=xxxxx //github 提供的接口 查询用户列表

https://api.uixsj.cn/hitokoto/get?type=social // 返回鸡汤文字
```

##### 安装 less 版本 及 less - loader 版本
```
npm install less@2.7.3 --save-dev
npm install less-loader@4.1.0 --save
```

##### 安装 sass - loader 版本 及 node-sass 版本
```
npm install sass-loader@10.2.0 node-sass@6.0.1 --save-dev
```

##### 安装nanoid 及使用
```
npm install nanoid

import { nanoid } from "nanoid"; //引入
var id = nanoid() //生成nanoid
```