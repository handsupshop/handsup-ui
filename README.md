<p align="center">
  <img src="/src/assets/handsup-logo.svg">
</p>

> HandsUp UI Toolkit

## Install
```shell
yarn add handsup-ui
# npm install element-ui -S
```

## Quick Start
```js
import Vue from 'vue'
import handsupui from 'handsup-ui'
import 'handsup-ui/src/components/index.scss'

Vue.use(handsupui)
```

## Build
1. npm 打包
```shell
yarn build
```
2. 修改 package.json  的 version
```json
{
  "version": "0.1.1", // 版本往上加
}
```
3. GIT COMMIT
```shell
git commit -m "build"
git push
```
4. npm 發佈
```shell
npm login
# Username: handsup
# Password: Hands@Up2019
# Email: opensource@handsup.shop

npm whoami
# 確認是 handsup

npm publish
```
5. docs 打包
```shell
yarn build:doc
git commit -m "build 版號"
git push
```
