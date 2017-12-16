# cms

> 知识管理系统


## BUG report

### 使用分页请求2次

```
      // 解决分页重复请求的问题
      // https://github.com/ElemeFE/element/issues?page=2&q=pagination+request&utf8=%E2%9C%93 
      if(this.flag) {
        this.flag = false        
        await axios.get('/api/knode/list?pageIndex='+index).then(val=>{this.tableData = val.data; console.log(val)})   
        this.flag = true        
      }
```

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

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
