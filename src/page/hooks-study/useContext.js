import React, { useState } from 'react';
import { useContext } from "react";
// 创建上下文环境
const AppContext = React.createContext();

// 解构出数据供应商 - 数据生产者
const { Provider } = AppContext;

function Son() {
    console.log('Son组件优化');
    // const context = useContext(AppContext);
    // console.log(context);

    // useContext 的参数必须是 context 对象本身
    // 调用了 useContext 的组件总会在 context 值变化时重新渲染。如果重渲染组件的开销较大，你可以通过使用 memoization 来优化。
    const { cart, cartAdd, cartLess, cartSet } = useContext(AppContext);
    return (
        <div>
            <h2>--子组件--</h2>
            <h3>上下文的数据：{cart.cartNum}</h3>
            <button onClick={cartAdd}>增加1</button>
            <button onClick={cartLess}>减少1</button>
            <button onClick={() => cartSet(100)}>设置成100</button>
        </div>
    );
}



function App() {
    // const [获取状态,修改状态函数] = useState(状态初始值);
    const [cart, setCartState] = useState({ cartNum: 100 });

    // 增加
    const cartAdd = () => setCartState({ cartNum: cart.cartNum + 1 });
    // 减少
    const cartLess = () => setCartState({ cartNum: cart.cartNum - 1 });
    // 设置
    const cartSet = number => setCartState({ cartNum: number });

    // 数据供应商 - 生产数据
    return <Provider value={{ cart, cartAdd, cartLess, cartSet }}>
        <div>
            <h1>父组件状态：{cart.cartNum}</h1>
            <Son></Son>
        </div>
    </Provider>;
}

export default App;