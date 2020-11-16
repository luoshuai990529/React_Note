import React from "react";
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
/* 
Hook 使用了 JavaScript 的闭包机制，
而不用在 JavaScript 已经提供了解决方案的情况下，还引入特定的 React API。

useEffect 就是一个 Effect Hook，给函数组件增加了操作副作用的能力。
它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途，
只不过被合并成了一个 API。

提示：
  1、与 componentDidMount 或 componentDidUpdate 不同，
  使用 useEffect 调度的 effect 不会阻塞浏览器更新屏幕，
  这让你的应用看起来响应更快。

  2、大多数情况下，effect 不需要同步地执行。
  在个别情况下（例如测量布局），有单独的 useLayoutEffect
*/
const Son = (aa) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 这里相当于执行了componentDidMount componentDidUpdate
    console.log("执行useEffect,count的值："+count);

    // 卸载时写这里
    return () => {
      console.log("组件被卸载了！！❌");
    };
    // 当我们effect第二个参数这个数组中，不填入count这个参数，
    // 那么我们改变count参数就不会执行到卸载方法中了，以提升组件效率
    
    /* 
        注意：只有 当函数（以及它所调用的函数）不引用 props、state 以及由它们衍生而来的值时，
        你才能放心地把它们从依赖列表中省略。
    */
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <>
      <h1>函数组件</h1>
      <h1>count的值：{count}</h1>
      <button onClick={() => setCount(count+1)}>count增加</button>
    </>
  );
};

function App() {
  const [bl, setBlState] = useState(true);

  return (
    <>
      <button onClick={() => setBlState(!bl)}>开关 - 条件渲染组件</button>
      {bl && <Son></Son>}
    </>
  );
}

export default App;
