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
