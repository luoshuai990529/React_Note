import React, { Component } from "react";
// 1 引入 prop-types
// import PropTypes from "prop-types";

class InpCon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inpValue: "",
    };
  }
  handleChangeValue(e) {
    console.log(e.target.value);
    this.setState({
      inpValue: e.target.value,
    });
  }
  clickHandle = () => {
    this.setState({
      inpValue: "666"
    })
  }
  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          value={this.state.inpValue}
          onChange={this.handleChangeValue.bind(this)}
        />
        <span>输入的值：{this.state.inpValue}</span>
        <button onClick={this.clickHandle}>点击修改值</button>
      </React.Fragment>
    );
  }
}

class CkboxCon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: true,
    };
  }
  handleChkChecked(e) {
    console.log(e.target.checked);
    this.setState({
      isChecked: e.target.checked,
    });
  }
  render() {
    return (
      <React.Fragment>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.handleChkChecked.bind(this)}
        />
        <span>{String(this.state.isChecked)}</span>
      </React.Fragment>
    );
  }
}
// 非受控表单 ref
class RefCon extends Component {
  constructor(props) {
    super(props);
    // 很多时候，我们不得不去操作dom元素
    // 使用 `React.createRef()` API 来创建ref
    this.inp = React.createRef();
  }
  handleClick() {
    // 后期可以通过 this.inp.current 来获取 该实例的引用
    console.log(this.inp);
    this.inp.current.focus();
  }
  render() {
    return (
      <React.Fragment>
        <input type="text" ref={this.inp} />
        <button onClick={this.handleClick.bind(this)}>设置获取焦点</button>
      </React.Fragment>
    );
  }
}
class DefaultCon extends Component {
  state = {
    msg: "2008",
    isChecked: true,
  };
  render() {
    return (
      <div>
        {/* 添加了 defaultValue */}
        <input type="text" defaultValue={this.state.msg} />
        {/* 添加了 defaultChecked  */}
        <input type="checkbox" defaultChecked={this.state.isChecked} />
      </div>
    );
  }
}
class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h2>受控表单---input</h2>
        <InpCon></InpCon>
        <h2>受控表单---checkbox </h2>
        <CkboxCon></CkboxCon>
        <h2>非受控表单--- React.createRef()创建ref</h2>
        <RefCon></RefCon>
        <h2>给非受控表单一个初始值---defaultChecked</h2>
        <DefaultCon></DefaultCon>
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
