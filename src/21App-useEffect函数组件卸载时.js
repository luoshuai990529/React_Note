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

const Son = (aa) => {

  useEffect(() => {
    console.log('组件挂载时 ~~ ✅');

    // 卸载时写这里
    return () => {
      console.log('组件被卸载了！！❌');
    };

  }, []);

  return <>
    <h1>函数组件</h1>
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