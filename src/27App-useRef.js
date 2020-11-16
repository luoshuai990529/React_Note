import React, { useRef,useState,useEffect } from 'react';

function App(params) {

    
    const TextRef = useRef()
    const changeValue = ()=>{
        console.log(TextRef.current);
        TextRef.current.value="hello useRef"
    }
    const TestRef = useRef()
    const [text,setValue] = useState('')

    useEffect(()=>{
        // text发生改变 触发useEffect方法，将text赋值给TestRef的value保存起来
        TestRef.current.value= text;
        console.log("TestRef的value:"+TestRef.current.value);
    },[text])

    return<>
        <input ref={TextRef} type="text"/>
        <button onClick={()=>{changeValue()}}>改变input值</button>
        <hr/>
        {/* 当下面表单的值发生变化，将对应的值赋给text */}
        <input ref={TestRef}  value={text}  onChange={(e)=>{setValue(e.target.value)}} type="text"/>
    </>
}

export default App