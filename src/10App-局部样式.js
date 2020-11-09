import React, { Component, PureComponent } from "react";
import indexCss from "./index.module.css";
// 引入scss全局样式
import "./style.scss";
// 生命周期
class Home extends Component {
  //1.constructor - 常用于初始化state
  constructor() {
    super()
  }

  // 2.render - 用于渲染页面结构
  render() {
    return (
      <React.Fragment>
        <div className={indexCss.header}>
          <h2>Nav002</h2>
          
        </div>
      </React.Fragment>
    );
  }

  componentDidMount(){
    console.log('componentDidMount挂载完毕，发送异步请求');
  }

  componentDidUpdate(){
    console.log('componentDidUpdate更新，state props发生改变更新后');
  }

  
}
function App() {
  return (
    <div>
      <h1 className={indexCss.nav}>通过index.module.css导入局部样式</h1>
      <Home></Home>
      <h1 className="navColor">通过style.scss导入sass全局样式 <span className="chyInner">chyInner</span></h1>
      <div className="wrap"></div>
    </div>
  );
}

export default App;
