import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link,Switch, Redirect } from "react-router-dom";
// 1 导入 哈希路由 路由-内容标签 路由-链接标签
// import { HashRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

/* 
  react-route-dom中存在以下几个常用的对象
  BrowserRouter ：使用传统的url模式
  HashRouter：使用哈希路由的模式
  Route：用来装路由对应内容
  Link：用来指定路由路径
  Switch：只可以匹配到一个路由
  Redirect：路由重定向
  exact:精确匹配路由
  match：路由对象的一个存放路由参数的属性
  location：路由对象的一个存放URL信息的属性
  history：路由对象的一个控制路由跳转的属性
  
  component：路由渲染的一种方式
  render：路由渲染的一种方式
*/
function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
function Me(props) {
  console.log(props)
  return (
    <div>
      <h1>admin个人中心</h1>
    </div>
  )
}
function PageNotFound(props) {
  return <div>
    <h2>404啦</h2>
    <button onClick={()=>{console.log(props)}}>打印props路由对象信息</button>
    <button onClick={()=>{props.history.push("/home")}}>点击跳转push到home</button>
    <button onClick={()=>{props.history.replace("/home")}}>点击跳转replace到home</button>
  </div>
}

function Goods(props) {
  console.log(props);
  return (
    <div>
      <p>{props.name}</p>
      <h2>Goods页</h2>
    </div>
  )
}
function UsersDetails(props) {
  console.log(props);
  return <h2>UsersDetails:{props.match.params.id}</h2>
}
function Children() {
  return <h2>Children</h2>
}
class App extends Component {
  render() {
    let meObj = {
      pathname: "/me",//跳转的路径
      search: "?username=admin",//get请求参数
      hash: "#abc",//设置的HASH值
      state: { msg: 'helloworld' }//传入组件的数据
    };
    return (
      // 1 使用Router将Link 和 Route包含起来
      <Router>
        <div className="route">
          <nav>
            <ul>
              {/* 2 导航链接 */}
              <li> <Link to="/home">Home</Link> </li>
              <li> <Link to="/about/">About</Link> </li>
              <li> <Link to="/users/">Users</Link> </li>
              <li> <Link to="/users/12">UsersDetails</Link> </li>
              <li> <Link to={meObj} replace>个人中心</Link> </li>
              <li> <Link to="/goods/">Goods</Link> </li>
              <li> <Link to="/children/">children</Link> </li>
            </ul>
          </nav>
          <div className="content">
            {/* 3 链接对应的内容 */}
            <Switch>
              <Redirect path="/" exact to="/home" ></Redirect>
              <Route path="/home" component={Index} />
              <Route path="/about/" component={About} />
              {/* 通过Route的path属性来传递参数 */}
              <Route path="/users/" exact component={Users} />
              <Route path="/users/:id/" component={UsersDetails} />
              <Route path="/me" component={Me} />
              <Route path="/goods/" render={(props) => <Goods name="张三"  {...props} />} />
              <Route path="/children/" component={Children} />
              {/* 设置一个404页面 */}
              <Route component={PageNotFound} />
              {/* 可以匹配到除以上的路由规则外的所有路由 */}
              {/* <Redirect to="/404/" ></Redirect> */}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;