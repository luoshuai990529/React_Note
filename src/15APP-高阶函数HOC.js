/* 
  高阶组件 HOC
    1. 函数可以作为参数进行传递（函数组件可以，类组件也可以）
    2. 函数可以作为返回值（返回了函数式组件）

  一句话定义：高阶组件是参数为组件，返回值为新组件的函数。
*/

import React from 'react';

// 添加作者信息功能增强
// const AddAuthorMsg = (Com) => {
//   return (props) => <Com {...props} author="作者信息：黑马" />;
// };

/* 高阶组件是参数为组件，返回值为新组件的函数。 */
// const AddAuthorMsg = (SonCom) => {
//   const FahterCom = (props) => {
//     return <SonCom {...props} author="作者信息：苏"></SonCom>;
//   };
//   return FahterCom;
// };

const AddAuthorMsg = (SonCom) => {
  return class FahterCom extends React.Component {
    componentDidMount() {
      console.log('高阶组件的生命周期');
    }
    render() {
      return <SonCom {...this.props} author="作者信息：杰"></SonCom>;
    }
  };
};



class HOC extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.author}
      </div>
    );
  }
}

export default AddAuthorMsg(HOC);