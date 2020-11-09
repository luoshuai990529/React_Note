import React, { Component, Fragment } from "react";
// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
// import './App.css';


class SonCon extends Component {

  state = {
    isLogin: true
  }
  clickHandle=()=>{
    this.setState({
      isLogin:!this.state.isLogin
    })
  }
  render() {
    if (this.state.isLogin) {
      return <div><button onClick={this.clickHandle}>注销</button><h3>已登录，登录状态isLogin：{String(this.state.isLogin)}</h3></div>
    } else {
      return <div><button onClick={this.clickHandle}>登录</button><h3>没有登录，登录状态isLogin：{String(this.state.isLogin)}</h3></div>
    }
  }

}


function App() {
  const arr = ["苹果", "火龙果", "枣子"];
  const arrObj = [
    { name: "大马猴", age: 22, id: 1 },
    { name: "马飞", age: 21, id: 2 },
  ];

  const aa = true;
  const bb = <div><i>false不显示</i> </div>;
  const cc = <div><i>true显示</i></div>
  const props = {
    className: "redCls",
    "data-index": 5,
  };
  return (
    <div className="App">
      <h4>遍历------数组-------</h4>
      {arr.map((v) => (
        <span key={v} className="span">
          {v}
        </span>
      ))}
      <h4>遍历------数组对象-------</h4>
      {arrObj.map((item) => (
        <div key={item.id}>
          {item.name},{item.age}
        </div>
      ))}
      <h4>--------条件渲染--------</h4>
      <div>{aa ? cc : bb}</div>
      <SonCon></SonCon>
      <h4>--------JSX标签属性--------</h4>
      <div className="redCls">大头大头</div>
      <label htmlFor="inp">
        点我点我
        <input id="inp" type="text" />
      </label>
      <div data-index={"hello"}>自定义属性</div>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<i>打我呀</i>" }}></li>
      </ul>
      <input type="checkbox" defaultChecked={true} />
      <div {...props}>展开属性</div>
      {
        // JSX可以像传统的`HTML`标签一样添加**行内样式**，
        // 不同的是，要通过对象的方式来实现。并且属性名是以驼峰命名。
      }
      <h4>--------行内样式----------</h4>
      <div style={{ color: 'yellow', fontSize: "50px", "backgroundColor": 'skyblue' }} > 我giao哦 </div>
    </div>
  );
}

export default App;
// ReactDOM.render(<App />, document.getElementById('root'))
