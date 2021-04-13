import React from 'react';
import { useState } from "react";

/* 
  状态可分为三个知识点：
    1. 初始化 状态
    2. 获取 状态
    3. 修改 状态
*/

// class App extends React.Component {
//   state = {
//     cartNum: 100
//   };
//   render() {
//     return <>
//       <h2>购物车数量：{this.state.cartNum}</h2>
//       <button onClick={() => this.setState({ cartNum: this.state.cartNum + 1 })}>数量加1</button>
//     </>;
//   }
// }

function App() {
  // 推荐写法
  // 注意点：useState不能存在于条件判断语句中
  const [cartNum, setCartNumState] = useState(10);
  const [userName, setUserNameState] = useState('游客');
  // 状态的三部分：初始化，获取和修改
  // const aa = useState(100);  //   用于状态初始化
  // const cartNum = aa[0];     //   获取状态的
  // const setState = aa[1];    //   用于修改状态的
  // console.log(aa);
  return <>
    <h1>用户：{userName}</h1>
    <h2>购物车数量：{cartNum}</h2>
    <button onClick={() => setCartNumState(cartNum + 1)}>数量加1</button>
    <button onClick={() => setUserNameState('小白')}>点击登录</button>
  </>;
}


export default App;