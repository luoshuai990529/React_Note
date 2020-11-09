import React, { Component } from "react";
const parentProps = {
  className: "redCls",
  "data-index": 100,
};

// 类组件
class MyCon1 extends Component {
  constructor(props) {
    //在类组件的构造函数中获取props，直接通过参数props获取
    // 构造函数中声明state
    super(props);
    // console.log(props);
    this.state = {
      date: "2000",
    };
  }
  // 声明 state
  // state = {
  //   date: "2008",
  //   msg: "大头大头下雨不愁",
  //   inputVal: "输入的值",
  // };
  // 事件处理函数
  inputHandle = () => {
    this.setState({
      date: Number(this.state.date) + 100,
    },()=>{
      console.log("改变后的值"+this.state.date);
    });

    
    
    // 2 看看这个date是多少
    console.log(this.state.date);
  };
  
  inputHandle2 = () => {

    this.setState((params) => {
      return {
        date: Number(params.date) + 100,
      };
    });

    this.setState((params) => {
      return {
        date: Number(params.date) + 100,
      };
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.date}</h1>
        <input type="button" value="增加" onClick={this.inputHandle} />
        <input
          type="button"
          value="获取实时state中的值"
          onClick={this.inputHandle2}
        />
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
