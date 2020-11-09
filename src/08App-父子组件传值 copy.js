import React, { Component } from "react";

class HomeSon1 extends Component {

  constructor(props) {
    super(props)
  }

  clickHandle = () => {
    // 子组件触发父组件传递过来的事件
    this.props.onChangeStyle("#0094ff")
  }

  render() {
    return <div><button onClick={this.clickHandle} style={{ ...this.props.style }}>我是一个按钮</button></div>
  }
}

class BroSon1 extends Component {

  clickHandle = () => {
    this.props.onBroHandler("hotpink")
  }
  render() {
    return <p><button style={{...this.props.style}} onClick={this.clickHandle}>传递hotpink值给兄弟组件BroSon2</button></p>
  }
}
class BroSon2 extends Component {

  clickHandle = () => {
    this.props.onBroHandler("gold")
    console.log(this.props);
  }
  render() {
    return <p><button style={{...this.props.style}} onClick={this.clickHandle}>传递gold值给兄弟组件BroSon1</button></p>
  }
}

class Home extends Component {
  state = {
    color: "tomato",
    fontSize: "24px",
    broColor1:"",
    broColor2:""
  };
  changeStyle = (color) => {
    // 接收子组件传过来的color参数
    this.setState({
      color: color
    })
  }
  // 兄弟组件传值方法
  broHandler1=(color)=>{
    console.log('获取子组件传递回来的值：'+color);
    this.setState({
      broColor2:color
    })
  }
  broHandler2=(color)=>{
    console.log('获取子组件传递回来的值：'+color);
    this.setState({
      broColor1:color
    })
  }
  render() {
    return (
      <React.Fragment>
        <h2 style={{...this.state}}>子组件</h2>
        {/* 父组件给子组件挂载一个自定义事件onChangeStyle */}
        <HomeSon1  onChangeStyle={this.changeStyle}></HomeSon1>
        <h2>兄弟组件</h2>
        <BroSon1 style={{color:this.state.broColor1}} onBroHandler={this.broHandler1}></BroSon1>
        <BroSon2 style={{color:this.state.broColor2}} onBroHandler={this.broHandler2}></BroSon2>
      </React.Fragment>
    );
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
