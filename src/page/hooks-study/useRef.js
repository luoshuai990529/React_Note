import React, { useRef,useState,useEffect } from 'react';

function App() {

    const TextRef = useRef()

    const changeValue = ()=>{
        TextRef.current.value="hello useRef"
    }

    const TextStorage = useRef()
    const [text,setValue] = useState('')

    useEffect(()=>{
        // text发生改变 触发useEffect方法，将text赋值给TextStorage的value保存起来
        TextStorage.current.value= text;
        console.log("TextStorage的value:"+TextStorage.current.value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[text])

    return<>
        <h1 style={{fontSize:'16px',background:'#eee'}}>{'useRef() 比 ref 属性更有用。它可以很方便地保存任何可变值'}</h1>
        <input ref={TextRef}  type="text" />
        <button onClick={()=>{changeValue()}}>改变input值</button>
        <hr/>
        {/* 当下面表单的值发生变化，将对应的值赋给text */}
        <input ref={TextStorage}  value={text}  onChange={(e)=>{setValue(e.target.value)}} type="text"/>
    </>
}

export default App