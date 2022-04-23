## react-router-dom
1. `react-router-dom` 在 `V5` 升级到 `V6` 后，移除 <Switch>
```js
<Router>
  <Switch>
    <Route path="/" component={ Home }></Route>
  </Switch>
</Router>
```
```js
<Router>
  <Routes>
    <Route path="/" element={ <Home /> }></Route>
  </Routes>
</Router>
```

2. activeClassName
```js
<NavLink activeClassName="selected" to="/">
  <i className="iconfont icon-home"></i>
  首页
</NavLink> 
```
```js
<NavLink className={ ({isActive}) => isActive ? 'selected' : '' } to="/">
  <i className="iconfont icon-home"></i>
  首页
</NavLink> 
```

3. 
```js
<Router>
  <Routes>
    <Route path="/city" element={ <City /> }></Route>
    <Route path="/" element={ <App /> }>
      <Route path="/" element={ <Home /> }></Route>
      <Route path="/life" element={ <LifeService /> }></Route>
      <Route path="/shop" element={ <Shop /> }></Route>
      <Route path="/user" element={ <User /> }></Route>
    </Route>
  </Routes>
</Router>
```

### 传参
search 传参需要另外解析 ？？？？？
```js
// ?keywords=123
import qs from 'query-string'
const { search } = useLocation()
const { keywords } = qs.parse(search)
```

## redux
```cmd
npm i redux react-redux -S
npm i redux-devtools-extension -D
```

## mockjs
```js
router.get('/mock', (req, resp) => {
  const data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1
    }]
  })
  resp.send({
    status: 200,
    data
  })
})
```

## other
1. getBoundingClientRect() 获取元素位置
> 该函数返回一个 `Object` 对象，该对象有 6 个属性：`top, left, right, bottom, width, height`
```js
const more = useRef()
const top = more.current.getBoundingClientRect().top
```

2. express 接收 post 方式请求数据
```js
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))
router.post('/login', (req, resp) => {
  console.log(req.body);
})
```


## 问题
1. input 框 中英文不对齐问题: 先输入英文/数字，再输入中文，导致英文/数字下移
解决办法：设置行高(baseline 设置无效)

2. 组件卸载，但仍处于渲染数据状态
- 滚动未结束，跳转新页面，发起网络请求
- setState
- 定时器

解决：清理 **事件(scroll)、定时器、网络请求**

传统方式：unmounted
react hook: (return () => {}) 组件卸载时执行的函数

```js
useEffect(() => {
  return () => {
    window.removeEventListener('scroll')
    clearTimeout(timer)
  }
}, [])
```



