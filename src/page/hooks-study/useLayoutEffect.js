import React from "react";
import { useState } from "react";
import { useLayoutEffect,useEffect } from "react";
// import { useState } from "react";

/* 
    1.useEffect 在全部渲染完毕后才会执行
    2.useLayoutEffect 会在 浏览器 layout 之后，painting 之前执行
    3.其函数签名与 useEffect 相同，但它会在所有的 DOM 变更之后同步调用 effect
    4.可以使用它来读取 DOM 布局并同步触发重渲染
    5.在浏览器执行绘制之前 useLayoutEffect 内部的更新计划将被同步刷新
    6.尽可能使用标准的 useEffect 以避免阻塞视图更新
*/

const Son = (aa) => {
    const [count, setCount] = useState(0);
    useLayoutEffect(()=>{
        // alert(count)
    })
    useEffect(()=>{
        alert(count)
    })

    return (
        <>
            <h1 className='desc'>useEffect 在全部渲染完毕后才会执行,useLayoutEffect 会在 浏览器 layout 之后，painting 之前执行</h1>
            <h1>函数组件</h1>
            <h1>count的值：{count}</h1>
            <button onClick={() => setCount(count + 1)}>count增加</button>

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
