# jslib

#### 介绍
基于 `Vite` 构建JS库

#### 使用说明
1. 修改 `vite.config.js` 中的 `LIBRARY_NAME` 库名称
2. 编辑 `main.js`，并按需要修改 `index.html` 以便于调试时预览效果
3. 将 `main.js` 编译到 `dist` 目录下

#### 用作模板
1. `git clone https://gitee.com/wavef/jslib.git YOUR_LIBRARY_NAME`
2. `git remote remove origin`
3. `git remote add origin https://YOUR_REPO.git`
4. `git push -u origin "master"`
5. Use VSCode Git Source Control

#### 安装依赖
`pnpm install`

#### 开发调试
`pnpm dev`

#### 编译打包
`pnpm build`
