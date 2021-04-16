import React, { useRef,useState,useEffect } from 'react';

function App() {

    /* 
        useRef 返回的 ref 对象在组件的整个生命周期内保持不变，
        也就是说每次重新渲染函数组件时，返回的ref 对象都是同一个
        （使用 React.createRef ，每次重新渲染组件都会重新创建 ref）
    */
    const TextRef = useRef()

    const changeValue = ()=>{
        TextRef.current.value="hello useRef"
    }

    const TextStorage = useRef()
    const [text,setValue] = useState('')
    const [count,setCount] = useState(0)
    useEffect(()=>{
        // text发生改变 触发useEffect方法，将text赋值给TextStorage的value保存起来
        TextStorage.current.value= text;
        console.log("TextStorage的value:"+TextStorage.current.value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[text])

    return<>
        <h1 style={{fontSize:'16px',background:'#eee'}}>{'useRef() 比 ref 属性更有用。它可以很方便地保存任何可变值'}</h1>
        <p>{count}</p><br />
        <button onClick={()=>{setCount(count+1)}}>点击+1</button>
        <Children/>
        <hr />
        <input ref={TextRef}  type="text" />
        <button onClick={()=>{changeValue()}}>改变input值</button>
        <hr/>
        {/* 当下面表单的值发生变化，将对应的值赋给text */}
        <input ref={TextStorage}  value={text}  onChange={(e)=>{setValue(e.target.value)}} type="text"/>
    </>
}
let inpDom;
const Children = ()=>{

    const inputRef = useRef()
    console.log('inpDom===inputRef', inpDom === inputRef);
    inpDom = inputRef
    function getFocus(){
        inputRef.current.focus()
    }
    return <div>
        <input type='text' ref={inputRef}/>
        <button onClick={getFocus}>获取焦点</button>
    </div>
}

export default App