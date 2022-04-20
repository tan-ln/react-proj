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

## 问题
1. input 框 中英文不对齐问题: 先输入英文/数字，再输入中文，导致英文/数字下移
解决办法：设置行高(baseline 设置无效)