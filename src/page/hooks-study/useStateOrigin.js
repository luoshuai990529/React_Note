import React from 'react';
import { useState ,memo ,useMemo,useCallback} from "react";

/* 
  状态可分为三个知识点：
    1. 初始化 状态
    2. 获取 状态
    3. 修改 状态
*/

const Children = (props)=>{
    console.log('Children子组件渲染');

    /* 
        注意：使用 useState ，每次更新都是独立的，const [code,setCode] = useState(10010) 
        也就是说每次都会生成一个新的值（哪怕这个值没有变化），即使使用了 React.memo ，也还是会重新渲染
    */
    const {data,onClick} = props
    return <div style={{background:'yellow'}}>
        <div>子组件接收props代号：{data.code}</div>
        <button onClick={onClick}>code加1</button> 
    </div>
}

// 默认情况，只要父组件状态变了（不管子组件依不依赖该状态），子组件也会重新渲染
// 一般的优化：
// 类组件：可以使用 pureComponent
// 函数组件：使用 React.memo ，
const MemoChildren = memo(Children)

function App() {
    // 如果你修改状态的时候，传的状态值没有变化，则不重新渲染
    console.log('父组件App渲染');

    // 推荐写法
    // 注意点：useState不能存在于条件判断语句中
    const [cartNum, setCartNumState] = useState(10);
    const [userInfo, setUseruserInfo] = useState({username:'张三',age:18});

    // 惰性初始化state 这个函数只会在初始化时会执行一次
    function getInitState() {
        console.log('惰性初始化initState');
        let initState = 0;
        for (let i = 0; i < 100; i++) {
            initState++
        }
        return initState
    }
    const [initstate, setInitState] = useState(getInitState)

    // 将code 状态和 setCode方法传入子组件，
    // 注意： 父组件更新时，这里的变量和函数每次都会重新创建，那么子组件接受到的属性每次都会认为是新的，所以子组件也会随之更新
    // const [code,setCode] = useState(10010)
    // const data = {code}
    // const addClick = ()=>{
    //     setCode(code+1)
    // }

    // 使用 useMemo useCallBack优化
    const [code,setCode] = useState(10086)
    // 只有当依赖值 code 变了， data才会更新，addClick才会重新定义
    const data = useMemo(()=>({code}),[code])
    const addClick = useCallback(()=>{
        setCode(code+1)
    },[code])

    return <>
        <h1 className='desc'>{'Hook 内部使用 Object.is 来比较新/旧 state 是否相等，为true则不会重新渲染'}</h1>
        <h1 className='desc'>{'使用 useState ，每次更新都是独立的，也就是说每次都会生成一个新的值（哪怕这个值没有变化），即使使用了 React.memo ，也还是会重新渲染。(可使用useMemo，useCallBack优化)'}</h1>
        <h1>用户：{userInfo.username}</h1>
        <h2>购物车数量：{cartNum}</h2>
        <h2>initstate：{initstate}</h2>
        <button onClick={() => setCartNumState(cartNum + 1)}>cartNum数量加1</button>
        <button onClick={() => setInitState(initstate + 1)}>initstate数量加1</button>
        <button onClick={() => setUseruserInfo({username:'张三',age:18})}>点击修改userInfo（传入相同值的状态，引用不同）</button>
        <MemoChildren data={data} onClick={addClick}></MemoChildren>
        {/* <Children data={data} onClick={addClick}></Children> */}
    </>;
}


export default App;