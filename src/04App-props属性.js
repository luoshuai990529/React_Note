import React, { Component } from "react";
// 1 引入 prop-types
import PropTypes from "prop-types";

// 声明一个类组件
class HomeTop extends Component {
  constructor(props) {
    super(props);
    // 如果想要在类组件的构造函数中获取props就要这么写
    console.log('类组件接收props',props);
  }
  render() {
    console.log(this.props);
    return (
      <h1>
        屋顶的颜色是 {this.props.color} 尺寸 {this.props.size}
      </h1>
    );
  }
}
// 声明一个函数式组件
const HomeFooter = (props) => {
  // props.bcolor="red";
  return (
    <h1>
      屋底的颜色是 {props.bcolor} 尺寸 {props.bsize}
    </h1>
  );
};
let HomeNav = (props) => {
  return (
    <h1>
      导航为颜色 {props.color},数量为 {props.nums}
    </h1>
  );
};

const HomeWrap = (props) => {
  return (
    <React.Fragment>
      <div>标题</div>
      <div>{props.children}</div>
    </React.Fragment>
  );
};

// 指定一个默认属性
HomeNav.defaultProps = {
  color: "yellow",
  nums: 20,
};
// 2  指定要求接收的数据格式
HomeNav.propTypes = {
  color: PropTypes.string,
  nums: PropTypes.number,
};

// 声明一个Home父组件包含 屋顶和屋底两个子组件
class Home extends Component {
  state = {
    color: "blue",
    size: 100,
    nums: 9999,
  };
  render() {
    return (
      <div>
        <HomeNav {...this.state}></HomeNav>
        <HomeWrap><h3>children插槽：百鬼夜谈</h3></HomeWrap>
        <HomeTop {...this.state}></HomeTop>
        <HomeFooter bcolor={this.state.color} bsize={this.state.size}></HomeFooter>
      </div>
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
