// Props 由父组件传递过来的
// 1. 引入 prop-types 包，React 已经自带了
import React from 'react';
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  // 指定 props 类型校验
  static propTypes = {
    // 校验 name 的值要求是字符串格式
    name: PropTypes.string
  };
  // 指定 props 的默认值
  static defaultProps = {
    name: '游客'
  };
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

// static 等价于以下写法
// // 指定 props 类型校验
// Greeting.propTypes = {
//   // 校验 name 的值要求是字符串格式
//   name: PropTypes.string
// };

// // 指定 props 的默认值
// Greeting.defaultProps = {
//   name: '游客'
// };

export default Greeting;