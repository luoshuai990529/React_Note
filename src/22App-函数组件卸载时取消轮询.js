import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
// import { useState } from "react";

/* 
生命周期分为 3 部分：
  1. 挂载时
  2. 更新时
  3. 卸载时
*/

// class Son extends React.Component {
//   componentDidMount() {
//     console.log('组件挂载时 ~~ ✅');
//   }
//   componentWillUnmount() {
//     console.log('组件被卸载了！！❌');
//   }
//   render() {
//     return <>
//       <h1>类组件</h1>
//     </>;
//   }
// }

const Son = () => {

  useEffect(() => {
    console.log('PC端支付组件挂载时，开始轮询 ~~ ✅');

    const timerId = setInterval(() => {
      console.log('轮询，向后端发送请求，问用户到底支付了没有。🤷‍♀️');
    }, 1000);

    // 卸载时写这里
    return () => {
      console.log('组件被卸载了，关闭轮询！！❌');
      clearInterval(timerId);
    };

  }, []);

  return <>
    <h1>函数支付组件</h1>
  </>;
};

function App() {
  const [bl, setBlState] = useState(true);
  return <>
    <button onClick={() => setBlState(!bl)}>开关 - 条件渲染组件</button>
    {bl && <Son></Son>}
  </>;
}


export default App;