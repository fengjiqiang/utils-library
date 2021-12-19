# utils-library
JS公共库 一些公共的方法

## Useage

- npm安装库
```bash
npm i @ethafeng/utils-library
```
- 项目中引入该库中需要用到的函数 比如，`isNumber()`
```javascript
import { isNumber } from '@ethafeng/utils-library'
```
- 使用
```javascript
processData = (n) => {
    isNumber(n) ? console.log(`${n}为数字`) : console.log(`${n}不是数字`)
}
```
- 注意（重要‼️）

`import`的时候是`isNumber`，使用的时候是`isNumber()`，因为它是一个函数，在这个库中所有导出的都是一个函数，因为在使用时要注意。

## citys.js

### 中国省市区数据（包括港澳台）

- 大陆数据来源于[github](https://github.com/modood/Administrative-divisions-of-China/blob/master/dist/pca-code.json)
- 港澳台数据个人收集的，来源于淘宝
- 港澳数据已完成
- 台湾省数据已收集完成，到省市区或者省县一级
- 使用数据时导入`getCitys`，即
```javascript
import { getCitys } from '@ethafeng/utils-library'
```

## utils.js

### 一些常用的JS公共方法

- 是否为数字 `isNumber()`
- 时间戳与日期字符串的转化
    - 时间戳转化为日期字符串 `dealTableTime()`
    - 日期时间转化为时间戳 `dealDateTime()`
    - 查询将日期转化为时间戳 `dealSearchTime()`
- 文本复制 `copy()`
- 文件（url/blob）下载
    - blob下载 `downloadFile()`
    - url下载 `downloadUrl()`
- 文件类型判断 `getFileType()`
- 字符串相关
    - 字符串去空格 `strTrim()`
    - 获取字符串长度(一个汉字占两个) `getStrLength()`
- n位随机数生成 `uuid()`
- 数组元素移动 `arrayMove()`
- 后续更新...

## reg.js

### 一些常用的正则表达式

- 手机号 `getMobileReg()`
- 邮箱 `getEmailReg()`
- 护照 `getPassportReg()`
- 身份证号 `getIDReg()`
- 电话号码 `getPhoneReg()`
- 邮编 `getPostcodeReg()`
- 银行卡号 `getBankNumReg()`
- 后续更新...
