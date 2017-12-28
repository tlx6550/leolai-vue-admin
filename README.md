# adminapp

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

默认阿里所有的 svg-sprite 都是通过 iconfont 的 iconfont.js 生成的
使用 svg-sprite-loader 这个神器了， 它是一个 webpack loader ，可以将多个 svg 打包成 svg-sprite 。
通过在webpack 配置生成识别id，前端组件通过类名对应捕获即可

 let iteratorArray = state.visitedViews.entries();
 将一个含有若干object的数组生成含有索引的迭代对象

 for(const [i ,v] of iteratorArray 遍历这个对象

 var a=new String()
 typeof a
 "object"

a=[];
typeof a
"object"
**********************
slice() 方法可从已有的数组中返回选定的元素。
slice()方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。
注意： slice() 方法不会改变原始数组
slice
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
	var citrus = fruits.slice(1,2);
Orange

**********************
splice() 方法用于插入、删除或替换数组的元素。
注意：这种方法会改变原始数组！。
splice
var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.splice(1,2);

Banana,Mango

*************
把一个字符串分割成字符串数组:
var str="How are you doing today?";
var n=str.split(" ");
n 输出一个数组的值:
How,are,you,doing,today?
***************
如何形象地解释 JavaScript 中 map、foreach、reduce 间的区别？
https://www.zhihu.com/question/24927450
