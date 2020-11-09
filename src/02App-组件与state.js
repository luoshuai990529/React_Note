import React, { Component } from "react";
const parentProps = {
  className: "redCls",
  "data-index": 100,
};

// 类组件
class MyCon1 extends Component {
  // constructor(props){
  // //在类组件的构造函数中获取props，直接通过参数props获取
  //   console.log(props);
  //   // 构造函数中声明state
  //   super(props);
  //   this.state={
  //     date: "2008",
  //     msg: "大头大头下雨不愁"
  //   }
  // }
  // 声明 state
  state = {
    date: "2008",
    msg: "大头大头下雨不愁",
    inputVal: "输入的值",
  };
  // 事件处理函数
  inputHandle = (e) => {
    const inputVal = e.target.value;
    this.setState({
      inputVal: inputVal,
    });
  };
  render() {
    return (
      <div>
        <h1
          style={{
            color: this.props.color,
            background: this.props.background,
            padding: "20px",
          }}
        >
          小丽仪是学屌
        </h1>
        <h3>
          {this.state.date}---{this.state.msg}
        </h3>
        <input type="text" onChange={this.inputHandle} />
        <h3>你输入的值为：{this.state.inputVal}</h3>
      </div>
    );
  }
}
// 函数式组件
// `React.createElement`，接收3个参数
// params1:标签名  如  `"div"`
// params2:标签上的属性，如 `{className:"redCls"}`
// params3:文本内容或者 另一个 `React.createElement`对象或者 `React.createElement` 数组
function MyCon2() {
  return React.createElement("ul", parentProps, [
    React.createElement("li", { key: "1" }, "你们好呀"),
    React.createElement("li", { key: "2" }, "你们好呀"),
  ]);
}

function App() {
  return (
    <div className="App">
      <MyCon2></MyCon2>
      <MyCon1 color="gold" background="hotpink"></MyCon1>
    </div>
  );
}

export default App;
