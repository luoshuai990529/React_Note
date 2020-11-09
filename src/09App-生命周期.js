import React, { Component,PureComponent } from "react";


class SonCon extends PureComponent {
  constructor() {
    super()
  }
  // 通过shouldComponentUpdate 来判断是否执行 render
  // shouldComponentUpdate(){
  //   // 返回false 表示不需要更新render  返回true就触发render  默认为true
  //   return false;
  // }
  render() {
    console.log('子组件的render执行');
    return (
      <div><h2>子组件Son1</h2></div>
    )
  }
  componentWillUnmount() {
    console.log('componentWillUnmount执行，子组件卸载');
  }

}
// 通过React.memo 实现函数式高性能组件 与PureComponent类似
const SonCon2 = React.memo(()=>{
  console.log('函数式子组件的render');
  return <h2>函数式子组件</h2>
})

// 生命周期
class Home extends Component {
  //1.constructor - 常用于初始化state
  constructor() {
    super()
    console.log('1.constructor执行，初始化');
    this.state = {
      name: "吉跋猫😺",
      num: 10,
      isShow: true
    }

  }
  addHandle = () => {
    this.setState({
      num: this.state.num + 10
    })
  }
  onUnmount = () => {
    this.setState({
      isShow: !this.state.isShow
    })
  }
  // 2.render - 用于渲染页面结构
  render() {
    console.log('2.render方法执行，渲染');
    const sonTemp = this.state.isShow ? <SonCon></SonCon> : ""
    return (
      <React.Fragment>
        <div>{this.state.name},num:{this.state.num}</div>
        <button onClick={this.addHandle}>点击num加10</button>
        <hr />
        子组件：<button onClick={this.onUnmount}>toggle按钮</button>
        {sonTemp}
        函数式子组件：
        <SonCon2></SonCon2>
      </React.Fragment>
    );
  }
  // 3.componentDidMount - 类似Vue的mounted
  componentDidMount() {

    console.log('3.componentDidMount方法执行,挂载完毕');
  }
}
function App() {
  return (
    <div>
      <Home></Home>
    </div>
  );
}

export default App;
